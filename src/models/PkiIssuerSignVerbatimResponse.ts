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
 * @interface PkiIssuerSignVerbatimResponse
 */
export interface PkiIssuerSignVerbatimResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiIssuerSignVerbatimResponse
     */
    ca_chain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiIssuerSignVerbatimResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiIssuerSignVerbatimResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiIssuerSignVerbatimResponse
     */
    issuing_ca?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiIssuerSignVerbatimResponse
     */
    serial_number?: string;
}

/**
 * Check if a given object implements the PkiIssuerSignVerbatimResponse interface.
 */
export function instanceOfPkiIssuerSignVerbatimResponse(value: object): value is PkiIssuerSignVerbatimResponse {
    return true;
}

export function PkiIssuerSignVerbatimResponseFromJSON(json: any): PkiIssuerSignVerbatimResponse {
    return PkiIssuerSignVerbatimResponseFromJSONTyped(json, false);
}

export function PkiIssuerSignVerbatimResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssuerSignVerbatimResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ca_chain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'expiration': json['expiration'] == null ? undefined : json['expiration'],
        'issuing_ca': json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        'serial_number': json['serial_number'] == null ? undefined : json['serial_number'],
    };
}

export function PkiIssuerSignVerbatimResponseToJSON(json: any): PkiIssuerSignVerbatimResponse {
    return PkiIssuerSignVerbatimResponseToJSONTyped(json, false);
}

export function PkiIssuerSignVerbatimResponseToJSONTyped(value?: PkiIssuerSignVerbatimResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_chain': value['ca_chain'],
        'certificate': value['certificate'],
        'expiration': value['expiration'],
        'issuing_ca': value['issuing_ca'],
        'serial_number': value['serial_number'],
    };
}

