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
 * @interface PkiListIssuersResponse
 */
export interface PkiListIssuersResponse {
    /**
     * Key info with issuer name
     * @type {object}
     * @memberof PkiListIssuersResponse
     */
    key_info?: object;
    /**
     * A list of keys
     * @type {Array<string>}
     * @memberof PkiListIssuersResponse
     */
    keys?: Array<string>;
}

/**
 * Check if a given object implements the PkiListIssuersResponse interface.
 */
export function instanceOfPkiListIssuersResponse(value: object): value is PkiListIssuersResponse {
    return true;
}

export function PkiListIssuersResponseFromJSON(json: any): PkiListIssuersResponse {
    return PkiListIssuersResponseFromJSONTyped(json, false);
}

export function PkiListIssuersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiListIssuersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'key_info': json['key_info'] == null ? undefined : json['key_info'],
        'keys': json['keys'] == null ? undefined : json['keys'],
    };
}

export function PkiListIssuersResponseToJSON(json: any): PkiListIssuersResponse {
    return PkiListIssuersResponseToJSONTyped(json, false);
}

export function PkiListIssuersResponseToJSONTyped(value?: PkiListIssuersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key_info': value['key_info'],
        'keys': value['keys'],
    };
}

