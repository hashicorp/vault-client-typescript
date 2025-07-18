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
 * @interface SealStatusResponse
 */
export interface SealStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    build_date?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    cluster_id?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    cluster_name?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    hcp_link_resource_ID?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    hcp_link_status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    initialized?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    migration?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    n?: number;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    nonce?: string;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    progress?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    recovery_seal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    sealed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    storage_type?: string;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    t?: number;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    version?: string;
}

/**
 * Check if a given object implements the SealStatusResponse interface.
 */
export function instanceOfSealStatusResponse(value: object): value is SealStatusResponse {
    return true;
}

export function SealStatusResponseFromJSON(json: any): SealStatusResponse {
    return SealStatusResponseFromJSONTyped(json, false);
}

export function SealStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SealStatusResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'build_date': json['build_date'] == null ? undefined : json['build_date'],
        'cluster_id': json['cluster_id'] == null ? undefined : json['cluster_id'],
        'cluster_name': json['cluster_name'] == null ? undefined : json['cluster_name'],
        'hcp_link_resource_ID': json['hcp_link_resource_ID'] == null ? undefined : json['hcp_link_resource_ID'],
        'hcp_link_status': json['hcp_link_status'] == null ? undefined : json['hcp_link_status'],
        'initialized': json['initialized'] == null ? undefined : json['initialized'],
        'migration': json['migration'] == null ? undefined : json['migration'],
        'n': json['n'] == null ? undefined : json['n'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'recovery_seal': json['recovery_seal'] == null ? undefined : json['recovery_seal'],
        'sealed': json['sealed'] == null ? undefined : json['sealed'],
        'storage_type': json['storage_type'] == null ? undefined : json['storage_type'],
        't': json['t'] == null ? undefined : json['t'],
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SealStatusResponseToJSON(json: any): SealStatusResponse {
    return SealStatusResponseToJSONTyped(json, false);
}

export function SealStatusResponseToJSONTyped(value?: SealStatusResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'build_date': value['build_date'],
        'cluster_id': value['cluster_id'],
        'cluster_name': value['cluster_name'],
        'hcp_link_resource_ID': value['hcp_link_resource_ID'],
        'hcp_link_status': value['hcp_link_status'],
        'initialized': value['initialized'],
        'migration': value['migration'],
        'n': value['n'],
        'nonce': value['nonce'],
        'progress': value['progress'],
        'recovery_seal': value['recovery_seal'],
        'sealed': value['sealed'],
        'storage_type': value['storage_type'],
        't': value['t'],
        'type': value['type'],
        'version': value['version'],
    };
}

