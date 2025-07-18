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
 * @interface AppRoleWriteSecretIdNumUsesRequest
 */
export interface AppRoleWriteSecretIdNumUsesRequest {
    /**
     * Number of times a SecretID can access the role, after which the SecretID will expire.
     * @type {number}
     * @memberof AppRoleWriteSecretIdNumUsesRequest
     */
    secret_id_num_uses?: number;
}

/**
 * Check if a given object implements the AppRoleWriteSecretIdNumUsesRequest interface.
 */
export function instanceOfAppRoleWriteSecretIdNumUsesRequest(value: object): value is AppRoleWriteSecretIdNumUsesRequest {
    return true;
}

export function AppRoleWriteSecretIdNumUsesRequestFromJSON(json: any): AppRoleWriteSecretIdNumUsesRequest {
    return AppRoleWriteSecretIdNumUsesRequestFromJSONTyped(json, false);
}

export function AppRoleWriteSecretIdNumUsesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteSecretIdNumUsesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret_id_num_uses': json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
    };
}

export function AppRoleWriteSecretIdNumUsesRequestToJSON(json: any): AppRoleWriteSecretIdNumUsesRequest {
    return AppRoleWriteSecretIdNumUsesRequestToJSONTyped(json, false);
}

export function AppRoleWriteSecretIdNumUsesRequestToJSONTyped(value?: AppRoleWriteSecretIdNumUsesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret_id_num_uses': value['secret_id_num_uses'],
    };
}

