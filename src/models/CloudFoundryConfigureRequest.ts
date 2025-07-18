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
 * @interface CloudFoundryConfigureRequest
 */
export interface CloudFoundryConfigureRequest {
    /**
     * CF’s API address.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_api_addr?: string;
    /**
     * The PEM-format certificates that are presented for mutual TLS with the CloudFoundry API. If not set, mutual TLS is not used
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_api_mutual_tls_certificate?: string;
    /**
     * The PEM-format private key that are used for mutual TLS with the CloudFoundry API. If not set, mutual TLS is not used
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_api_mutual_tls_key?: string;
    /**
     * The PEM-format CA certificates that are acceptable for the CF API to present.
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_api_trusted_certificates?: Array<string>;
    /**
     * The client id for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_client_id?: string;
    /**
     * The client secret for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_client_secret?: string;
    /**
     * The password for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_password?: string;
    /**
     * The timeout for calls to CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_timeout?: string;
    /**
     * The username for CF’s API.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    cf_username?: string;
    /**
     * The PEM-format CA certificates that are required to have issued the instance certificates presented for logging in.
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     */
    identity_ca_certificates?: Array<string>;
    /**
     * Duration in seconds for the maximum acceptable length in the future a "signing_time" can be. Useful for clock drift. Set low to reduce the opportunity for replay attacks.
     * @type {number}
     * @memberof CloudFoundryConfigureRequest
     */
    login_max_seconds_not_after?: number;
    /**
     * Duration in seconds for the maximum acceptable age of a "signing_time". Useful for clock drift. Set low to reduce the opportunity for replay attacks.
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     */
    login_max_seconds_not_before?: string;
    /**
     * Deprecated. Please use "cf_api_addr".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcf_api_addr?: string;
    /**
     * Deprecated. Please use "cf_api_trusted_certificates".
     * @type {Array<string>}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcf_api_trusted_certificates?: Array<string>;
    /**
     * Deprecated. Please use "cf_password".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcf_password?: string;
    /**
     * Deprecated. Please use "cf_username".
     * @type {string}
     * @memberof CloudFoundryConfigureRequest
     * @deprecated
     */
    pcf_username?: string;
}

/**
 * Check if a given object implements the CloudFoundryConfigureRequest interface.
 */
export function instanceOfCloudFoundryConfigureRequest(value: object): value is CloudFoundryConfigureRequest {
    return true;
}

export function CloudFoundryConfigureRequestFromJSON(json: any): CloudFoundryConfigureRequest {
    return CloudFoundryConfigureRequestFromJSONTyped(json, false);
}

export function CloudFoundryConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudFoundryConfigureRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cf_api_addr': json['cf_api_addr'] == null ? undefined : json['cf_api_addr'],
        'cf_api_mutual_tls_certificate': json['cf_api_mutual_tls_certificate'] == null ? undefined : json['cf_api_mutual_tls_certificate'],
        'cf_api_mutual_tls_key': json['cf_api_mutual_tls_key'] == null ? undefined : json['cf_api_mutual_tls_key'],
        'cf_api_trusted_certificates': json['cf_api_trusted_certificates'] == null ? undefined : json['cf_api_trusted_certificates'],
        'cf_client_id': json['cf_client_id'] == null ? undefined : json['cf_client_id'],
        'cf_client_secret': json['cf_client_secret'] == null ? undefined : json['cf_client_secret'],
        'cf_password': json['cf_password'] == null ? undefined : json['cf_password'],
        'cf_timeout': json['cf_timeout'] == null ? undefined : json['cf_timeout'],
        'cf_username': json['cf_username'] == null ? undefined : json['cf_username'],
        'identity_ca_certificates': json['identity_ca_certificates'] == null ? undefined : json['identity_ca_certificates'],
        'login_max_seconds_not_after': json['login_max_seconds_not_after'] == null ? undefined : json['login_max_seconds_not_after'],
        'login_max_seconds_not_before': json['login_max_seconds_not_before'] == null ? undefined : json['login_max_seconds_not_before'],
        'pcf_api_addr': json['pcf_api_addr'] == null ? undefined : json['pcf_api_addr'],
        'pcf_api_trusted_certificates': json['pcf_api_trusted_certificates'] == null ? undefined : json['pcf_api_trusted_certificates'],
        'pcf_password': json['pcf_password'] == null ? undefined : json['pcf_password'],
        'pcf_username': json['pcf_username'] == null ? undefined : json['pcf_username'],
    };
}

export function CloudFoundryConfigureRequestToJSON(json: any): CloudFoundryConfigureRequest {
    return CloudFoundryConfigureRequestToJSONTyped(json, false);
}

export function CloudFoundryConfigureRequestToJSONTyped(value?: CloudFoundryConfigureRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cf_api_addr': value['cf_api_addr'],
        'cf_api_mutual_tls_certificate': value['cf_api_mutual_tls_certificate'],
        'cf_api_mutual_tls_key': value['cf_api_mutual_tls_key'],
        'cf_api_trusted_certificates': value['cf_api_trusted_certificates'],
        'cf_client_id': value['cf_client_id'],
        'cf_client_secret': value['cf_client_secret'],
        'cf_password': value['cf_password'],
        'cf_timeout': value['cf_timeout'],
        'cf_username': value['cf_username'],
        'identity_ca_certificates': value['identity_ca_certificates'],
        'login_max_seconds_not_after': value['login_max_seconds_not_after'],
        'login_max_seconds_not_before': value['login_max_seconds_not_before'],
        'pcf_api_addr': value['pcf_api_addr'],
        'pcf_api_trusted_certificates': value['pcf_api_trusted_certificates'],
        'pcf_password': value['pcf_password'],
        'pcf_username': value['pcf_username'],
    };
}

