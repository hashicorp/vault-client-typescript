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
 * @interface SystemPatchSyncDestinationsInMemNameRequest
 */
export interface SystemPatchSyncDestinationsInMemNameRequest {
    /**
     * Sets which IPv4 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    allowed_ipv4_addresses?: Array<string>;
    /**
     * Sets which IPv6 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    allowed_ipv6_addresses?: Array<string>;
    /**
     * Sets which port numbers Vault is allowed to connect through for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    allowed_ports?: Array<string>;
    /**
     * Allows all IP addresses and ports to be connected to for syncing secrets.
     * @type {boolean}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    disable_strict_networking?: boolean;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Supports `secret-path` and `secret-key`.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    granularity?: string;
    /**
     * Asynchronously unsyncs all associated secrets with the destination then deletes the destination config.
     * @type {boolean}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    purge?: boolean;
    /**
     * Template describing how to generate external secret names. Supports a subset of the Go Template syntax.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsInMemNameRequest
     */
    secret_name_template?: string;
}

/**
 * Check if a given object implements the SystemPatchSyncDestinationsInMemNameRequest interface.
 */
export function instanceOfSystemPatchSyncDestinationsInMemNameRequest(value: object): value is SystemPatchSyncDestinationsInMemNameRequest {
    return true;
}

export function SystemPatchSyncDestinationsInMemNameRequestFromJSON(json: any): SystemPatchSyncDestinationsInMemNameRequest {
    return SystemPatchSyncDestinationsInMemNameRequestFromJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsInMemNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncDestinationsInMemNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'allowed_ipv4_addresses': json['allowed_ipv4_addresses'] == null ? undefined : json['allowed_ipv4_addresses'],
        'allowed_ipv6_addresses': json['allowed_ipv6_addresses'] == null ? undefined : json['allowed_ipv6_addresses'],
        'allowed_ports': json['allowed_ports'] == null ? undefined : json['allowed_ports'],
        'disable_strict_networking': json['disable_strict_networking'] == null ? undefined : json['disable_strict_networking'],
        'granularity': json['granularity'] == null ? undefined : json['granularity'],
        'purge': json['purge'] == null ? undefined : json['purge'],
        'secret_name_template': json['secret_name_template'] == null ? undefined : json['secret_name_template'],
    };
}

export function SystemPatchSyncDestinationsInMemNameRequestToJSON(json: any): SystemPatchSyncDestinationsInMemNameRequest {
    return SystemPatchSyncDestinationsInMemNameRequestToJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsInMemNameRequestToJSONTyped(value?: SystemPatchSyncDestinationsInMemNameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowed_ipv4_addresses': value['allowed_ipv4_addresses'],
        'allowed_ipv6_addresses': value['allowed_ipv6_addresses'],
        'allowed_ports': value['allowed_ports'],
        'disable_strict_networking': value['disable_strict_networking'],
        'granularity': value['granularity'],
        'purge': value['purge'],
        'secret_name_template': value['secret_name_template'],
    };
}

