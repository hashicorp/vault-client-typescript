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
 * @interface TransitGenerateCmacRequest
 */
export interface TransitGenerateCmacRequest {
    /**
     * Specifies a list of items to be processed in a single batch. When this parameter is set, if the parameter 'input' is also set, it will be ignored. Any batch output will preserve the order of the batch input.
     * @type {Array<object>}
     * @memberof TransitGenerateCmacRequest
     */
    batch_input?: Array<object>;
    /**
     * The base64-encoded input data
     * @type {string}
     * @memberof TransitGenerateCmacRequest
     */
    input?: string;
    /**
     * The version of the key to use for generating the CMAC. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
     * @type {number}
     * @memberof TransitGenerateCmacRequest
     */
    key_version?: number;
    /**
     * MAC length to use (POST body parameter). This must be greater than 0, and no larger than the cipher-block size.
     * @type {number}
     * @memberof TransitGenerateCmacRequest
     */
    mac_length?: number;
}

/**
 * Check if a given object implements the TransitGenerateCmacRequest interface.
 */
export function instanceOfTransitGenerateCmacRequest(value: object): value is TransitGenerateCmacRequest {
    return true;
}

export function TransitGenerateCmacRequestFromJSON(json: any): TransitGenerateCmacRequest {
    return TransitGenerateCmacRequestFromJSONTyped(json, false);
}

export function TransitGenerateCmacRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitGenerateCmacRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'batch_input': json['batch_input'] == null ? undefined : json['batch_input'],
        'input': json['input'] == null ? undefined : json['input'],
        'key_version': json['key_version'] == null ? undefined : json['key_version'],
        'mac_length': json['mac_length'] == null ? undefined : json['mac_length'],
    };
}

export function TransitGenerateCmacRequestToJSON(json: any): TransitGenerateCmacRequest {
    return TransitGenerateCmacRequestToJSONTyped(json, false);
}

export function TransitGenerateCmacRequestToJSONTyped(value?: TransitGenerateCmacRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'batch_input': value['batch_input'],
        'input': value['input'],
        'key_version': value['key_version'],
        'mac_length': value['mac_length'],
    };
}

