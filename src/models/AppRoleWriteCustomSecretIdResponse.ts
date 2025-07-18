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
 * @interface AppRoleWriteCustomSecretIdResponse
 */
export interface AppRoleWriteCustomSecretIdResponse {
    /**
     * Secret ID attached to the role.
     * @type {string}
     * @memberof AppRoleWriteCustomSecretIdResponse
     */
    secret_id?: string;
    /**
     * Accessor of the secret ID
     * @type {string}
     * @memberof AppRoleWriteCustomSecretIdResponse
     */
    secret_id_accessor?: string;
    /**
     * Number of times a secret ID can access the role, after which the secret ID will expire.
     * @type {number}
     * @memberof AppRoleWriteCustomSecretIdResponse
     */
    secret_id_num_uses?: number;
    /**
     * Duration in seconds after which the issued secret ID expires.
     * @type {number}
     * @memberof AppRoleWriteCustomSecretIdResponse
     */
    secret_id_ttl?: number;
}

/**
 * Check if a given object implements the AppRoleWriteCustomSecretIdResponse interface.
 */
export function instanceOfAppRoleWriteCustomSecretIdResponse(value: object): value is AppRoleWriteCustomSecretIdResponse {
    return true;
}

export function AppRoleWriteCustomSecretIdResponseFromJSON(json: any): AppRoleWriteCustomSecretIdResponse {
    return AppRoleWriteCustomSecretIdResponseFromJSONTyped(json, false);
}

export function AppRoleWriteCustomSecretIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteCustomSecretIdResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'secret_id': json['secret_id'] == null ? undefined : json['secret_id'],
        'secret_id_accessor': json['secret_id_accessor'] == null ? undefined : json['secret_id_accessor'],
        'secret_id_num_uses': json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
        'secret_id_ttl': json['secret_id_ttl'] == null ? undefined : json['secret_id_ttl'],
    };
}

export function AppRoleWriteCustomSecretIdResponseToJSON(json: any): AppRoleWriteCustomSecretIdResponse {
    return AppRoleWriteCustomSecretIdResponseToJSONTyped(json, false);
}

export function AppRoleWriteCustomSecretIdResponseToJSONTyped(value?: AppRoleWriteCustomSecretIdResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret_id': value['secret_id'],
        'secret_id_accessor': value['secret_id_accessor'],
        'secret_id_num_uses': value['secret_id_num_uses'],
        'secret_id_ttl': value['secret_id_ttl'],
    };
}

