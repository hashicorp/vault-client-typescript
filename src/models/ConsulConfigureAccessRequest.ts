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
 * @interface ConsulConfigureAccessRequest
 */
export interface ConsulConfigureAccessRequest {
    /**
     * Consul server address
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    address?: string;
    /**
     * CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    ca_cert?: string;
    /**
     * Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    client_cert?: string;
    /**
     * Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    client_key?: string;
    /**
     * URI scheme for the Consul address
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    scheme?: string;
    /**
     * Token for API calls
     * @type {string}
     * @memberof ConsulConfigureAccessRequest
     */
    token?: string;
}

/**
 * Check if a given object implements the ConsulConfigureAccessRequest interface.
 */
export function instanceOfConsulConfigureAccessRequest(value: object): value is ConsulConfigureAccessRequest {
    return true;
}

export function ConsulConfigureAccessRequestFromJSON(json: any): ConsulConfigureAccessRequest {
    return ConsulConfigureAccessRequestFromJSONTyped(json, false);
}

export function ConsulConfigureAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsulConfigureAccessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
        'ca_cert': json['ca_cert'] == null ? undefined : json['ca_cert'],
        'client_cert': json['client_cert'] == null ? undefined : json['client_cert'],
        'client_key': json['client_key'] == null ? undefined : json['client_key'],
        'scheme': json['scheme'] == null ? undefined : json['scheme'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function ConsulConfigureAccessRequestToJSON(json: any): ConsulConfigureAccessRequest {
    return ConsulConfigureAccessRequestToJSONTyped(json, false);
}

export function ConsulConfigureAccessRequestToJSONTyped(value?: ConsulConfigureAccessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'ca_cert': value['ca_cert'],
        'client_cert': value['client_cert'],
        'client_key': value['client_key'],
        'scheme': value['scheme'],
        'token': value['token'],
    };
}

