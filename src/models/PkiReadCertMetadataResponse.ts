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
 * @interface PkiReadCertMetadataResponse
 */
export interface PkiReadCertMetadataResponse {
    /**
     * User provided certificate metadata, base64 encoded
     * @type {string}
     * @memberof PkiReadCertMetadataResponse
     */
    cert_metadata?: string;
    /**
     * Expiration time of the certificate, RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCertMetadataResponse
     */
    expiration?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCertMetadataResponse
     */
    issuer_id?: string;
    /**
     * Role that issued the certificate
     * @type {string}
     * @memberof PkiReadCertMetadataResponse
     */
    role?: string;
    /**
     * Serial number associated with the certificate metadata in colon-separated format
     * @type {string}
     * @memberof PkiReadCertMetadataResponse
     */
    serial_number?: string;
}

/**
 * Check if a given object implements the PkiReadCertMetadataResponse interface.
 */
export function instanceOfPkiReadCertMetadataResponse(value: object): value is PkiReadCertMetadataResponse {
    return true;
}

export function PkiReadCertMetadataResponseFromJSON(json: any): PkiReadCertMetadataResponse {
    return PkiReadCertMetadataResponseFromJSONTyped(json, false);
}

export function PkiReadCertMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCertMetadataResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'cert_metadata': json['cert_metadata'] == null ? undefined : json['cert_metadata'],
        'expiration': json['expiration'] == null ? undefined : json['expiration'],
        'issuer_id': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'role': json['role'] == null ? undefined : json['role'],
        'serial_number': json['serial_number'] == null ? undefined : json['serial_number'],
    };
}

export function PkiReadCertMetadataResponseToJSON(json: any): PkiReadCertMetadataResponse {
    return PkiReadCertMetadataResponseToJSONTyped(json, false);
}

export function PkiReadCertMetadataResponseToJSONTyped(value?: PkiReadCertMetadataResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cert_metadata': value['cert_metadata'],
        'expiration': value['expiration'],
        'issuer_id': value['issuer_id'],
        'role': value['role'],
        'serial_number': value['serial_number'],
    };
}

