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
 * @interface GenerateRandomWithSourceAndBytesResponse
 */
export interface GenerateRandomWithSourceAndBytesResponse {
    /**
     * 
     * @type {string}
     * @memberof GenerateRandomWithSourceAndBytesResponse
     */
    random_bytes?: string;
}

/**
 * Check if a given object implements the GenerateRandomWithSourceAndBytesResponse interface.
 */
export function instanceOfGenerateRandomWithSourceAndBytesResponse(value: object): value is GenerateRandomWithSourceAndBytesResponse {
    return true;
}

export function GenerateRandomWithSourceAndBytesResponseFromJSON(json: any): GenerateRandomWithSourceAndBytesResponse {
    return GenerateRandomWithSourceAndBytesResponseFromJSONTyped(json, false);
}

export function GenerateRandomWithSourceAndBytesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateRandomWithSourceAndBytesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'random_bytes': json['random_bytes'] == null ? undefined : json['random_bytes'],
    };
}

export function GenerateRandomWithSourceAndBytesResponseToJSON(json: any): GenerateRandomWithSourceAndBytesResponse {
    return GenerateRandomWithSourceAndBytesResponseToJSONTyped(json, false);
}

export function GenerateRandomWithSourceAndBytesResponseToJSONTyped(value?: GenerateRandomWithSourceAndBytesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'random_bytes': value['random_bytes'],
    };
}

