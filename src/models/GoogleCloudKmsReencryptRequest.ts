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
 * @interface GoogleCloudKmsReencryptRequest
 */
export interface GoogleCloudKmsReencryptRequest {
    /**
     * Optional data that, if specified, must also be provided during decryption.
     * @type {string}
     * @memberof GoogleCloudKmsReencryptRequest
     */
    additional_authenticated_data?: string;
    /**
     * Ciphertext to be re-encrypted to the latest key version. This must be ciphertext that Vault previously generated for this named key.
     * @type {string}
     * @memberof GoogleCloudKmsReencryptRequest
     */
    ciphertext?: string;
    /**
     * Integer version of the crypto key version to use for the new encryption. If unspecified, this defaults to the latest active crypto key version.
     * @type {number}
     * @memberof GoogleCloudKmsReencryptRequest
     */
    key_version?: number;
}

/**
 * Check if a given object implements the GoogleCloudKmsReencryptRequest interface.
 */
export function instanceOfGoogleCloudKmsReencryptRequest(value: object): value is GoogleCloudKmsReencryptRequest {
    return true;
}

export function GoogleCloudKmsReencryptRequestFromJSON(json: any): GoogleCloudKmsReencryptRequest {
    return GoogleCloudKmsReencryptRequestFromJSONTyped(json, false);
}

export function GoogleCloudKmsReencryptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleCloudKmsReencryptRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'additional_authenticated_data': json['additional_authenticated_data'] == null ? undefined : json['additional_authenticated_data'],
        'ciphertext': json['ciphertext'] == null ? undefined : json['ciphertext'],
        'key_version': json['key_version'] == null ? undefined : json['key_version'],
    };
}

export function GoogleCloudKmsReencryptRequestToJSON(json: any): GoogleCloudKmsReencryptRequest {
    return GoogleCloudKmsReencryptRequestToJSONTyped(json, false);
}

export function GoogleCloudKmsReencryptRequestToJSONTyped(value?: GoogleCloudKmsReencryptRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'additional_authenticated_data': value['additional_authenticated_data'],
        'ciphertext': value['ciphertext'],
        'key_version': value['key_version'],
    };
}

