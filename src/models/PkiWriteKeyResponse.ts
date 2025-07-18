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
 * @interface PkiWriteKeyResponse
 */
export interface PkiWriteKeyResponse {
    /**
     * Key Id
     * @type {string}
     * @memberof PkiWriteKeyResponse
     */
    key_id?: string;
    /**
     * Key Name
     * @type {string}
     * @memberof PkiWriteKeyResponse
     */
    key_name?: string;
    /**
     * Key Type
     * @type {string}
     * @memberof PkiWriteKeyResponse
     */
    key_type?: string;
}

/**
 * Check if a given object implements the PkiWriteKeyResponse interface.
 */
export function instanceOfPkiWriteKeyResponse(value: object): value is PkiWriteKeyResponse {
    return true;
}

export function PkiWriteKeyResponseFromJSON(json: any): PkiWriteKeyResponse {
    return PkiWriteKeyResponseFromJSONTyped(json, false);
}

export function PkiWriteKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteKeyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'key_id': json['key_id'] == null ? undefined : json['key_id'],
        'key_name': json['key_name'] == null ? undefined : json['key_name'],
        'key_type': json['key_type'] == null ? undefined : json['key_type'],
    };
}

export function PkiWriteKeyResponseToJSON(json: any): PkiWriteKeyResponse {
    return PkiWriteKeyResponseToJSONTyped(json, false);
}

export function PkiWriteKeyResponseToJSONTyped(value?: PkiWriteKeyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key_id': value['key_id'],
        'key_name': value['key_name'],
        'key_type': value['key_type'],
    };
}

