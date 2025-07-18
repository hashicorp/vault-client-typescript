/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppRoleWriteSecretIdRequest
 */
export interface AppRoleWriteSecretIdRequest {
    /**
     * Comma separated string or list of CIDR blocks enforcing secret IDs to be used from specific set of IP addresses. If 'bound_cidr_list' is set on the role, then the list of CIDR blocks listed here should be a subset of the CIDR blocks listed on the role.
     * @type {Array<string>}
     * @memberof AppRoleWriteSecretIdRequest
     */
    cidr_list?: Array<string>;
    /**
     * Metadata to be tied to the SecretID. This should be a JSON formatted string containing the metadata in key value pairs.
     * @type {string}
     * @memberof AppRoleWriteSecretIdRequest
     */
    metadata?: string;
    /**
     * Number of times this SecretID can be used, after which the SecretID expires. Overrides secret_id_num_uses role option when supplied. May not be higher than role's secret_id_num_uses.
     * @type {number}
     * @memberof AppRoleWriteSecretIdRequest
     */
    num_uses?: number;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof AppRoleWriteSecretIdRequest
     */
    token_bound_cidrs?: Array<string>;
    /**
     * Duration in seconds after which this SecretID expires. Overrides secret_id_ttl role option when supplied. May not be longer than role's secret_id_ttl.
     * @type {string}
     * @memberof AppRoleWriteSecretIdRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the AppRoleWriteSecretIdRequest interface.
 */
export function instanceOfAppRoleWriteSecretIdRequest(value: object): value is AppRoleWriteSecretIdRequest {
    return true;
}

export function AppRoleWriteSecretIdRequestFromJSON(json: any): AppRoleWriteSecretIdRequest {
    return AppRoleWriteSecretIdRequestFromJSONTyped(json, false);
}

export function AppRoleWriteSecretIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteSecretIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cidr_list': json['cidr_list'] == null ? undefined : json['cidr_list'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'num_uses': json['num_uses'] == null ? undefined : json['num_uses'],
        'token_bound_cidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function AppRoleWriteSecretIdRequestToJSON(json: any): AppRoleWriteSecretIdRequest {
    return AppRoleWriteSecretIdRequestToJSONTyped(json, false);
}

export function AppRoleWriteSecretIdRequestToJSONTyped(value?: AppRoleWriteSecretIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cidr_list': value['cidr_list'],
        'metadata': value['metadata'],
        'num_uses': value['num_uses'],
        'token_bound_cidrs': value['token_bound_cidrs'],
        'ttl': value['ttl'],
    };
}

