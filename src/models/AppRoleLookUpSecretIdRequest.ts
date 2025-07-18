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
 * @interface AppRoleLookUpSecretIdRequest
 */
export interface AppRoleLookUpSecretIdRequest {
    /**
     * SecretID attached to the role.
     * @type {string}
     * @memberof AppRoleLookUpSecretIdRequest
     */
    secret_id?: string;
}

/**
 * Check if a given object implements the AppRoleLookUpSecretIdRequest interface.
 */
export function instanceOfAppRoleLookUpSecretIdRequest(value: object): value is AppRoleLookUpSecretIdRequest {
    return true;
}

export function AppRoleLookUpSecretIdRequestFromJSON(json: any): AppRoleLookUpSecretIdRequest {
    return AppRoleLookUpSecretIdRequestFromJSONTyped(json, false);
}

export function AppRoleLookUpSecretIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleLookUpSecretIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret_id': json['secret_id'] == null ? undefined : json['secret_id'],
    };
}

export function AppRoleLookUpSecretIdRequestToJSON(json: any): AppRoleLookUpSecretIdRequest {
    return AppRoleLookUpSecretIdRequestToJSONTyped(json, false);
}

export function AppRoleLookUpSecretIdRequestToJSONTyped(value?: AppRoleLookUpSecretIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret_id': value['secret_id'],
    };
}

