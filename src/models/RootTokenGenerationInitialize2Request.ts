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
 * @interface RootTokenGenerationInitialize2Request
 */
export interface RootTokenGenerationInitialize2Request {
    /**
     * Specifies a base64-encoded PGP public key.
     * @type {string}
     * @memberof RootTokenGenerationInitialize2Request
     */
    pgp_key?: string;
}

/**
 * Check if a given object implements the RootTokenGenerationInitialize2Request interface.
 */
export function instanceOfRootTokenGenerationInitialize2Request(value: object): value is RootTokenGenerationInitialize2Request {
    return true;
}

export function RootTokenGenerationInitialize2RequestFromJSON(json: any): RootTokenGenerationInitialize2Request {
    return RootTokenGenerationInitialize2RequestFromJSONTyped(json, false);
}

export function RootTokenGenerationInitialize2RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationInitialize2Request {
    if (json == null) {
        return json;
    }
    return {
        
        'pgp_key': json['pgp_key'] == null ? undefined : json['pgp_key'],
    };
}

export function RootTokenGenerationInitialize2RequestToJSON(json: any): RootTokenGenerationInitialize2Request {
    return RootTokenGenerationInitialize2RequestToJSONTyped(json, false);
}

export function RootTokenGenerationInitialize2RequestToJSONTyped(value?: RootTokenGenerationInitialize2Request | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'pgp_key': value['pgp_key'],
    };
}

