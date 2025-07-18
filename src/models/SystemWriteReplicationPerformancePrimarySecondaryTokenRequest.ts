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
 * @interface SystemWriteReplicationPerformancePrimarySecondaryTokenRequest
 */
export interface SystemWriteReplicationPerformancePrimarySecondaryTokenRequest {
    /**
     * An opaque identifier that can be used to identify and revoke a secondary cluster's access later.
     * @type {string}
     * @memberof SystemWriteReplicationPerformancePrimarySecondaryTokenRequest
     */
    id?: string;
    /**
     * A base64-encoded public key generated by the secondary cluster.
     * @type {string}
     * @memberof SystemWriteReplicationPerformancePrimarySecondaryTokenRequest
     */
    secondary_public_key?: string;
    /**
     * The TTL to use for the secondary activation token. Defaults to 30 minutes.
     * @type {string}
     * @memberof SystemWriteReplicationPerformancePrimarySecondaryTokenRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the SystemWriteReplicationPerformancePrimarySecondaryTokenRequest interface.
 */
export function instanceOfSystemWriteReplicationPerformancePrimarySecondaryTokenRequest(value: object): value is SystemWriteReplicationPerformancePrimarySecondaryTokenRequest {
    return true;
}

export function SystemWriteReplicationPerformancePrimarySecondaryTokenRequestFromJSON(json: any): SystemWriteReplicationPerformancePrimarySecondaryTokenRequest {
    return SystemWriteReplicationPerformancePrimarySecondaryTokenRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationPerformancePrimarySecondaryTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPerformancePrimarySecondaryTokenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'secondary_public_key': json['secondary_public_key'] == null ? undefined : json['secondary_public_key'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function SystemWriteReplicationPerformancePrimarySecondaryTokenRequestToJSON(json: any): SystemWriteReplicationPerformancePrimarySecondaryTokenRequest {
    return SystemWriteReplicationPerformancePrimarySecondaryTokenRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationPerformancePrimarySecondaryTokenRequestToJSONTyped(value?: SystemWriteReplicationPerformancePrimarySecondaryTokenRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'secondary_public_key': value['secondary_public_key'],
        'ttl': value['ttl'],
    };
}

