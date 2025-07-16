## Build Workarounds

The client generated successfully with minimal options out of the box but unfortunately the resulting .ts files contained errors.
The following are the known issues at time of writing and the methods used to circumvent them within the mustache templates.

### Spec Validation Errors

The current spec output from the `vault/scripts/gen_openapi.sh` contains errors which cause validation to fail.
These are primarily related to duplicate `operationId`'s which the generator handles by appending a number to the generated name for uniqueness.
To work around this for now until/if these errors can be resolved within Vault, the `--skip-validate-spec` flag is used.

_It's worth noting that there are currently two other vault api clients that rely on the spec for generation, [vault-client-go](https://github.com/hashicorp/vault-client-go)
and [vault-client-dotnet](https://github.com/hashicorp/vault-client-dotnet). Updates to the spec could result in breaking changes for consumers
of those libraries._

### Enum Name Generation

Something strange was occurring with enum name generation that resulted in said enum to be referenced by a different name.
To better illustrate, consider this snippet from the spec with an enum defined for a path parameter:

```json
{
  "/{pki_mount_path}/intermediate/generate/{exported}": {
    "description": "Generate a new CSR and private key used for signing.",
    "parameters": [
      {
        "name": "exported",
        "description": "Must be \"internal\", \"exported\" or \"kms\". If set to \"exported\", the generated private key will be returned. This is your *only* chance to retrieve the private key!",
        "in": "path",
        "schema": {
          "type": "string",
          "enum": ["internal", "external", "kms"]
        },
        "required": true
      }
    ]
  }
}
```

An interface is generated to describe the request that references the enum:

```ts
export interface SecretsApiPkiGenerateIntermediateOperationRequest {
  exported: PkiGenerateIntermediateExportedEnum;
  pkiMountPath: string;
  pkiGenerateIntermediateRequest: PkiGenerateIntermediateRequest;
}
```

But the enum name that was being generated did not match and unexpectedly had _Operation_ appended to the `operationId`:

```ts
export enum PkiGenerateIntermediateOperationExportedEnum {
  INTERNAL = "internal",
  EXTERNAL = "external",
  KMS = "kms",
}
```

After trying out many of the configuration options for both the generator and cli to no avail, the solution arrived at was
to override the default `apis` mustache template and use a consistent variable between enum instances. Notice that on line 25
the interface is defined and uses `datatypeWithEnum` when the value is an enum:

```hbs
export interface {{#prefixParameterInterfaces}}{{classname}}{{/prefixParameterInterfaces}}{{operationIdCamelCase}}Request {
{{#allParams}}
    {{paramName}}{{^required}}?{{/required}}: {{#isEnum}}{{{datatypeWithEnum}}}{{/isEnum}}{{^isEnum}}{{#hasReadOnly}}Omit<{{{dataType}}}, {{#readOnlyVars}}'{{baseName}}'{{^-last}}|{{/-last}}{{/readOnlyVars}}>{{/hasReadOnly}}{{^hasReadOnly}}{{{dataType}}}{{/hasReadOnly}}{{#isNullable}} | null{{/isNullable}}{{/isEnum}};
{{/allParams}}
}
```

The enum definition was defining the name as `operationIdCamelCase` with `enumName` as the suffix (which is configurable in the generator options):

```hbs
export enum {{operationIdCamelCase}}{{enumName}} {
{{#allowableValues}}
    {{#enumVars}}
    {{{name}}} = {{{value}}}{{^-last}},{{/-last}}
    {{/enumVars}}
{{/allowableValues}}
}
```

`operationId` is a variable that is available and when used instead of the camel case variant it is the correct id from the spec. However, for some reason
_Operation_ is appended which as previously mentioned breaks the references. To work around this, `datatypeWithEnum` was used instead:

```hbs
export enum {{datatypeWithEnum}} {
{{#allowableValues}}
    {{#enumVars}}
    {{{name}}} = {{{value}}}{{^-last}},{{/-last}}
    {{/enumVars}}
{{/allowableValues}}
}
```

This means that the `enumNameSuffix` generator config option will no longer have an impact which seems fine given the `Enum` is a sane default.
Conversely, the interface definition could have been updated to use the `operationIdCamelCase` and `enumName` but this seemed like a clearer fix.
Once the template override was in place the `--template-dir` flag was added so it could be picked up by the cli.

### Duplicate Properties

This appears to be a mistake at the code level where a property has been duplicated with a slightly different key and description.

```json
{
  "components": {
    "schemas": {
      "SystemWriteManagedKeysTypeNameRequest": {
        "properties": {
          "key-bits": {
            "type": "integer",
            "description": "The desired key length in bits if the RSA key is to be generated, either 2048, 3072, or 4096."
          },
          "key_bits": {
            "type": "integer",
            "description": "For RSA keys, the desired key length in bits if the key is to be generated, either 2048, 3072, or 4096."
          }
        }
      }
    }
  }
}
```

The generator camelizes the keys and both properties become `keyBits`, resulting in a duplicate identifier error.
To workaround this the `--name-mappings` config option was used to map the generated name of `key-bits` to `keyBitsDashed`.
This should be considered a temporary workaround to satisfy the type checker until fixed in the Vault code.

### Void Responses

In the case of the Vault API and the OpenAPI spec, if a request does not return anything under the `data` key it is
considered to be a void response. In the generated client, regardless what is actually returned from the server or
from any middleware, the value is cast to `undefined`. This poses a problem since there is an outer request object
that contains information that may be needed by the UI. For example the `/sys/wrapping/wrap` endpoint is considered to
return a void response but in the UI the `wrap_info.token` property is needed to display the result to the user.

Since the full response is available within a middleware, it was explored as a possibility to cache the full responses
in the api service to be accessed as necessary. This didn't seem like a durable solution and not a particularly
straightforward development pattern. Instead, the apis and runtime templates have been updated to change both the
`VoidApiResponse` type and return value.

A `VoidResponse` interface was added to the runtime template to capture the Vault API response shape for requests where
`response.data` is `null`:

```ts
export interface VoidResponse {
  auth: null;
  data: null;
  lease_duration: number;
  lease_id: string;
  mount_type: string;
  renewable: boolean;
  request_id: string;
  warnings: Array<string> | null;
  wrap_info: {
    accessor: string;
    creation_path: string;
    creation_time: string;
    wrapped_accessor: string;
    token: string;
    ttl: number;
  } | null;
}
```

The `VoidApiResponse` class was also updated to return the raw response json:

```ts
export class VoidApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<VoidResponse> {
    return await this.raw.json();
  }
}
```

In the apis template, if the `returnType` was not defined there was a condition to not return the results from the raw request.
This wasn't necessary since the raw requests were returning `undefined` anyway. Here's an example of how it looked before the template updates:

```ts
// SystemApi.ts
  async wrap(
    requestBody: { [key: string]: any },
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.wrapRaw({ requestBody: requestBody }, initOverrides);
  }
```

The `wrapRaw` request is returning `new runtime.VoidApiResponse(response);` which we updated to return the raw response json.
Removing the conditions from the template results in getting the response from the raw requests and returning the value.
Also, notice that the return type of the `Promise` has been updated to `VoidResponse`:

```ts
  async wrap(
    requestBody: { [key: string]: any },
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.VoidResponse> {
    const response = await this.wrapRaw({ requestBody: requestBody }, initOverrides);
    return await response.value();
  }
```

### JSON Api Responses

The client expects the data to be returned in the top level response object but it's actually nested under the
data key. Middleware was initially utilized to handle that, but it conflicted with the update to void responses.
If a void response had data under the `data` key the middleware would return the data rather than the full response.
A more durable solution was to remove the middleware and handle the data extraction in the runtime template:

```ts
export class JSONApiResponse<T> {
  constructor(
    public raw: Response,
    private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue
  ) {}

  async value(): Promise<T> {
    return this.transformer(await this.raw.json());
    const response = await this.raw.json();
    return this.transformer(response.data);
  }
}
```

### Query Overrides

The client expects query parameters to be listed in the spec and makes them arguments to the request methods. Unfortunately,
there are cases in the current Vault spec where all available query params aren't listed. Furthermore, there isn't a way
within the current client structure to add or remove query params on a per request basis. To work around this, the runtime
template was updated to move the query handling below the `initOverrides`. This allows for the request context query
value to be updated in the `initOverride` function which will then be passed to the `queryParamsStringify` method.

```ts
const overriddenInit: RequestInit = {
  ...initParams,
  ...(await initOverrideFn({
    init: initParams,
    context,
  })),
};
// moving the block after the initOverride execution allows for context.query to be updated

// allow context.query to be updated in initOverride function before updating url
if (context.query !== undefined && Object.keys(context.query).length !== 0) {
  // only add the querystring to the URL if there are query parameters.
  // this is done to avoid urls ending with a "?" character which buggy webservers
  // do not handle correctly sometimes.
  url += "?" + this.configuration.queryParamsStringify(context.query);
}
```

When using the client a query param can be added like this:

```ts
// the first arg is the list query param but no others are defined
// use the initOverride function as the second arg to access the context
// set additional params on the context.query object
await this.api.sys.uiConfigListCustomMessages(
  true,
  ({ context: { query } }) => {
    query.authenticated = authenticated;
  }
);
```

# Camelizing Response Keys

For instances where a response is typed as void and we return the full response or for nested objects that are not typed, the response keys
will be in snake_case. This causes issues with consistency since the `JSONApiResponse` transformer will convert known properties
to camelCase. To ensure keys are consistently cased a method was added to convert all keys to camelCase. This is utilized in both
the `JSONApiResponse` and `VoidApiResponse` classes.
