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
 * @interface AliCloudWriteRoleRequest
 */
export interface AliCloudWriteRoleRequest {
    /**
     * JSON of policies to be dynamically applied to users of this role.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    inline_policies?: string;
    /**
     * The maximum allowed lifetime of tokens issued using this role.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    max_ttl?: string;
    /**
     * The name and type of each remote policy to be applied. Example: "name:AliyunRDSReadOnlyAccess,type:System".
     * @type {Array<string>}
     * @memberof AliCloudWriteRoleRequest
     */
    remote_policies?: Array<string>;
    /**
     * ARN of the role to be assumed. If provided, inline_policies and remote_policies should be blank. At creation time, this role must have configured trusted actors, and the access key and secret that will be used to assume the role (in /config) must qualify as a trusted actor.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    role_arn?: string;
    /**
     * Duration in seconds after which the issued token should expire. Defaults to 0, in which case the value will fallback to the system/mount defaults.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the AliCloudWriteRoleRequest interface.
 */
export function instanceOfAliCloudWriteRoleRequest(value: object): value is AliCloudWriteRoleRequest {
    return true;
}

export function AliCloudWriteRoleRequestFromJSON(json: any): AliCloudWriteRoleRequest {
    return AliCloudWriteRoleRequestFromJSONTyped(json, false);
}

export function AliCloudWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliCloudWriteRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'inline_policies': json['inline_policies'] == null ? undefined : json['inline_policies'],
        'max_ttl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'remote_policies': json['remote_policies'] == null ? undefined : json['remote_policies'],
        'role_arn': json['role_arn'] == null ? undefined : json['role_arn'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function AliCloudWriteRoleRequestToJSON(json: any): AliCloudWriteRoleRequest {
    return AliCloudWriteRoleRequestToJSONTyped(json, false);
}

export function AliCloudWriteRoleRequestToJSONTyped(value?: AliCloudWriteRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inline_policies': value['inline_policies'],
        'max_ttl': value['max_ttl'],
        'remote_policies': value['remote_policies'],
        'role_arn': value['role_arn'],
        'ttl': value['ttl'],
    };
}

