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
 * @interface PkiRootSignSelfIssuedRequest
 */
export interface PkiRootSignSelfIssuedRequest {
    /**
     * PEM-format self-issued certificate to be signed.
     * @type {string}
     * @memberof PkiRootSignSelfIssuedRequest
     */
    certificate?: string;
    /**
     * Reference to a existing issuer; either "default" for the configured default issuer, an identifier or the name assigned to the issuer.
     * @type {string}
     * @memberof PkiRootSignSelfIssuedRequest
     */
    issuer_ref?: string;
    /**
     * If true, require the public key algorithm of the signer to match that of the self issued certificate.
     * @type {boolean}
     * @memberof PkiRootSignSelfIssuedRequest
     */
    require_matching_certificate_algorithms?: boolean;
}

/**
 * Check if a given object implements the PkiRootSignSelfIssuedRequest interface.
 */
export function instanceOfPkiRootSignSelfIssuedRequest(value: object): value is PkiRootSignSelfIssuedRequest {
    return true;
}

export function PkiRootSignSelfIssuedRequestFromJSON(json: any): PkiRootSignSelfIssuedRequest {
    return PkiRootSignSelfIssuedRequestFromJSONTyped(json, false);
}

export function PkiRootSignSelfIssuedRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiRootSignSelfIssuedRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'issuer_ref': json['issuer_ref'] == null ? undefined : json['issuer_ref'],
        'require_matching_certificate_algorithms': json['require_matching_certificate_algorithms'] == null ? undefined : json['require_matching_certificate_algorithms'],
    };
}

export function PkiRootSignSelfIssuedRequestToJSON(json: any): PkiRootSignSelfIssuedRequest {
    return PkiRootSignSelfIssuedRequestToJSONTyped(json, false);
}

export function PkiRootSignSelfIssuedRequestToJSONTyped(value?: PkiRootSignSelfIssuedRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certificate': value['certificate'],
        'issuer_ref': value['issuer_ref'],
        'require_matching_certificate_algorithms': value['require_matching_certificate_algorithms'],
    };
}

