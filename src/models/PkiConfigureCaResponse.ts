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
 * @interface PkiConfigureCaResponse
 */
export interface PkiConfigureCaResponse {
    /**
     * Existing issuers specified as part of the import bundle of this request
     * @type {Array<string>}
     * @memberof PkiConfigureCaResponse
     */
    existing_issuers?: Array<string>;
    /**
     * Existing keys specified as part of the import bundle of this request
     * @type {Array<string>}
     * @memberof PkiConfigureCaResponse
     */
    existing_keys?: Array<string>;
    /**
     * Net-new issuers imported as a part of this request
     * @type {Array<string>}
     * @memberof PkiConfigureCaResponse
     */
    imported_issuers?: Array<string>;
    /**
     * Net-new keys imported as a part of this request
     * @type {Array<string>}
     * @memberof PkiConfigureCaResponse
     */
    imported_keys?: Array<string>;
    /**
     * A mapping of issuer_id to key_id for all issuers included in this request
     * @type {object}
     * @memberof PkiConfigureCaResponse
     */
    mapping?: object;
}

/**
 * Check if a given object implements the PkiConfigureCaResponse interface.
 */
export function instanceOfPkiConfigureCaResponse(value: object): value is PkiConfigureCaResponse {
    return true;
}

export function PkiConfigureCaResponseFromJSON(json: any): PkiConfigureCaResponse {
    return PkiConfigureCaResponseFromJSONTyped(json, false);
}

export function PkiConfigureCaResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureCaResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'existing_issuers': json['existing_issuers'] == null ? undefined : json['existing_issuers'],
        'existing_keys': json['existing_keys'] == null ? undefined : json['existing_keys'],
        'imported_issuers': json['imported_issuers'] == null ? undefined : json['imported_issuers'],
        'imported_keys': json['imported_keys'] == null ? undefined : json['imported_keys'],
        'mapping': json['mapping'] == null ? undefined : json['mapping'],
    };
}

export function PkiConfigureCaResponseToJSON(json: any): PkiConfigureCaResponse {
    return PkiConfigureCaResponseToJSONTyped(json, false);
}

export function PkiConfigureCaResponseToJSONTyped(value?: PkiConfigureCaResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'existing_issuers': value['existing_issuers'],
        'existing_keys': value['existing_keys'],
        'imported_issuers': value['imported_issuers'],
        'imported_keys': value['imported_keys'],
        'mapping': value['mapping'],
    };
}

