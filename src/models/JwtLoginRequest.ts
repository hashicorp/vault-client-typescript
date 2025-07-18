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
 * @interface JwtLoginRequest
 */
export interface JwtLoginRequest {
    /**
     * An optional token used to fetch group memberships specified by the distributed claim source in the jwt. This is supported only on Azure/Entra ID
     * @type {string}
     * @memberof JwtLoginRequest
     */
    distributed_claim_access_token?: string;
    /**
     * The signed JWT to validate.
     * @type {string}
     * @memberof JwtLoginRequest
     */
    jwt?: string;
    /**
     * The role to log in against.
     * @type {string}
     * @memberof JwtLoginRequest
     */
    role?: string;
}

/**
 * Check if a given object implements the JwtLoginRequest interface.
 */
export function instanceOfJwtLoginRequest(value: object): value is JwtLoginRequest {
    return true;
}

export function JwtLoginRequestFromJSON(json: any): JwtLoginRequest {
    return JwtLoginRequestFromJSONTyped(json, false);
}

export function JwtLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'distributed_claim_access_token': json['distributed_claim_access_token'] == null ? undefined : json['distributed_claim_access_token'],
        'jwt': json['jwt'] == null ? undefined : json['jwt'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function JwtLoginRequestToJSON(json: any): JwtLoginRequest {
    return JwtLoginRequestToJSONTyped(json, false);
}

export function JwtLoginRequestToJSONTyped(value?: JwtLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'distributed_claim_access_token': value['distributed_claim_access_token'],
        'jwt': value['jwt'],
        'role': value['role'],
    };
}

