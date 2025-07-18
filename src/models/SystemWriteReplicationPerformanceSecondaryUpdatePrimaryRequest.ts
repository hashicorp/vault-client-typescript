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
 * @interface SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
 */
export interface SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    /**
     * A path to a file containing a PEM-encoded CA certificate to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    ca_file?: string;
    /**
     * A path to a directory containing PEM-encoded CA certificates to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    ca_path?: string;
    /**
     * The client certificate to use for authentication, in PEM format. Note: client authentication for this operation will always use TLS 1.2 or higher.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    client_cert_pem?: string;
    /**
     * The client key to use for authentication, in PEM format.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    client_key_pem?: string;
    /**
     * The API address of the primary. If not set, the value the primary supplies in the token will be used, which is the primary's redirect address.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    primary_api_addr?: string;
    /**
     * The token given by the primary to activate secondary status for this cluster.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    token?: string;
    /**
     * A comma separated list of host:port strings to serve as new addresses for the primary cluster
     * @type {Array<string>}
     * @memberof SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest
     */
    update_primary_addrs?: Array<string>;
}

/**
 * Check if a given object implements the SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest interface.
 */
export function instanceOfSystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest(value: object): value is SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    return true;
}

export function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestFromJSON(json: any): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    return SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ca_file': json['ca_file'] == null ? undefined : json['ca_file'],
        'ca_path': json['ca_path'] == null ? undefined : json['ca_path'],
        'client_cert_pem': json['client_cert_pem'] == null ? undefined : json['client_cert_pem'],
        'client_key_pem': json['client_key_pem'] == null ? undefined : json['client_key_pem'],
        'primary_api_addr': json['primary_api_addr'] == null ? undefined : json['primary_api_addr'],
        'token': json['token'] == null ? undefined : json['token'],
        'update_primary_addrs': json['update_primary_addrs'] == null ? undefined : json['update_primary_addrs'],
    };
}

export function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestToJSON(json: any): SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest {
    return SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequestToJSONTyped(value?: SystemWriteReplicationPerformanceSecondaryUpdatePrimaryRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_file': value['ca_file'],
        'ca_path': value['ca_path'],
        'client_cert_pem': value['client_cert_pem'],
        'client_key_pem': value['client_key_pem'],
        'primary_api_addr': value['primary_api_addr'],
        'token': value['token'],
        'update_primary_addrs': value['update_primary_addrs'],
    };
}

