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
 * @interface SshIssueCertificateRequest
 */
export interface SshIssueCertificateRequest {
    /**
     * Type of certificate to be created; either "user" or "host".
     * @type {string}
     * @memberof SshIssueCertificateRequest
     */
    cert_type?: string;
    /**
     * Critical options that the certificate should be signed for.
     * @type {object}
     * @memberof SshIssueCertificateRequest
     */
    critical_options?: object;
    /**
     * Extensions that the certificate should be signed for.
     * @type {object}
     * @memberof SshIssueCertificateRequest
     */
    extensions?: object;
    /**
     * Specifies the number of bits to use for the generated keys.
     * @type {number}
     * @memberof SshIssueCertificateRequest
     */
    key_bits?: number;
    /**
     * Key id that the created certificate should have. If not specified, the display name of the token will be used.
     * @type {string}
     * @memberof SshIssueCertificateRequest
     */
    key_id?: string;
    /**
     * Specifies the desired key type; must be `rsa`, `ed25519` or `ec`
     * @type {string}
     * @memberof SshIssueCertificateRequest
     */
    key_type?: string;
    /**
     * The requested Time To Live for the SSH certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be later than the role max TTL.
     * @type {string}
     * @memberof SshIssueCertificateRequest
     */
    ttl?: string;
    /**
     * Valid principals, either usernames or hostnames, that the certificate should be signed for. Must be non-empty unless allow_empty_principals=true (not recommended) or a value for DefaultUser has been set in the role
     * @type {string}
     * @memberof SshIssueCertificateRequest
     */
    valid_principals?: string;
}

/**
 * Check if a given object implements the SshIssueCertificateRequest interface.
 */
export function instanceOfSshIssueCertificateRequest(value: object): value is SshIssueCertificateRequest {
    return true;
}

export function SshIssueCertificateRequestFromJSON(json: any): SshIssueCertificateRequest {
    return SshIssueCertificateRequestFromJSONTyped(json, false);
}

export function SshIssueCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SshIssueCertificateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cert_type': json['cert_type'] == null ? undefined : json['cert_type'],
        'critical_options': json['critical_options'] == null ? undefined : json['critical_options'],
        'extensions': json['extensions'] == null ? undefined : json['extensions'],
        'key_bits': json['key_bits'] == null ? undefined : json['key_bits'],
        'key_id': json['key_id'] == null ? undefined : json['key_id'],
        'key_type': json['key_type'] == null ? undefined : json['key_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
        'valid_principals': json['valid_principals'] == null ? undefined : json['valid_principals'],
    };
}

export function SshIssueCertificateRequestToJSON(json: any): SshIssueCertificateRequest {
    return SshIssueCertificateRequestToJSONTyped(json, false);
}

export function SshIssueCertificateRequestToJSONTyped(value?: SshIssueCertificateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cert_type': value['cert_type'],
        'critical_options': value['critical_options'],
        'extensions': value['extensions'],
        'key_bits': value['key_bits'],
        'key_id': value['key_id'],
        'key_type': value['key_type'],
        'ttl': value['ttl'],
        'valid_principals': value['valid_principals'],
    };
}

