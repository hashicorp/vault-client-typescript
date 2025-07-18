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
 * @interface SystemReadSyncConfigResponse
 */
export interface SystemReadSyncConfigResponse {
    /**
     * Disables the syncing process between Vault and external destinations.
     * @type {boolean}
     * @memberof SystemReadSyncConfigResponse
     */
    disabled?: boolean;
    /**
     * Maximum number of pending sync operations allowed on the queue.
     * @type {number}
     * @memberof SystemReadSyncConfigResponse
     */
    queue_capacity?: number;
}

/**
 * Check if a given object implements the SystemReadSyncConfigResponse interface.
 */
export function instanceOfSystemReadSyncConfigResponse(value: object): value is SystemReadSyncConfigResponse {
    return true;
}

export function SystemReadSyncConfigResponseFromJSON(json: any): SystemReadSyncConfigResponse {
    return SystemReadSyncConfigResponseFromJSONTyped(json, false);
}

export function SystemReadSyncConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemReadSyncConfigResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'queue_capacity': json['queue_capacity'] == null ? undefined : json['queue_capacity'],
    };
}

export function SystemReadSyncConfigResponseToJSON(json: any): SystemReadSyncConfigResponse {
    return SystemReadSyncConfigResponseToJSONTyped(json, false);
}

export function SystemReadSyncConfigResponseToJSONTyped(value?: SystemReadSyncConfigResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disabled': value['disabled'],
        'queue_capacity': value['queue_capacity'],
    };
}

