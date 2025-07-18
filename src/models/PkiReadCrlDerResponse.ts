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
 * @interface PkiReadCrlDerResponse
 */
export interface PkiReadCrlDerResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCrlDerResponse
     */
    ca_chain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCrlDerResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCrlDerResponse
     */
    issuer_id?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCrlDerResponse
     */
    revocation_time?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCrlDerResponse
     */
    revocation_time_rfc3339?: string;
}

/**
 * Check if a given object implements the PkiReadCrlDerResponse interface.
 */
export function instanceOfPkiReadCrlDerResponse(value: object): value is PkiReadCrlDerResponse {
    return true;
}

export function PkiReadCrlDerResponseFromJSON(json: any): PkiReadCrlDerResponse {
    return PkiReadCrlDerResponseFromJSONTyped(json, false);
}

export function PkiReadCrlDerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCrlDerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ca_chain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'issuer_id': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'revocation_time': json['revocation_time'] == null ? undefined : json['revocation_time'],
        'revocation_time_rfc3339': json['revocation_time_rfc3339'] == null ? undefined : json['revocation_time_rfc3339'],
    };
}

export function PkiReadCrlDerResponseToJSON(json: any): PkiReadCrlDerResponse {
    return PkiReadCrlDerResponseToJSONTyped(json, false);
}

export function PkiReadCrlDerResponseToJSONTyped(value?: PkiReadCrlDerResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_chain': value['ca_chain'],
        'certificate': value['certificate'],
        'issuer_id': value['issuer_id'],
        'revocation_time': value['revocation_time'],
        'revocation_time_rfc3339': value['revocation_time_rfc3339'],
    };
}

