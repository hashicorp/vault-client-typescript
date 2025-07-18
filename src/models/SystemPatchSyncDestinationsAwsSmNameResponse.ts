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
 * @interface SystemPatchSyncDestinationsAwsSmNameResponse
 */
export interface SystemPatchSyncDestinationsAwsSmNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    connection_details?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    name?: string;
    /**
     * List of key value pairs of Vault configuration options.
     * @type {object}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    options?: object;
    /**
     * Error message if the purge job failed.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    purge_error?: string;
    /**
     * Timestamp of when a purge job was initiated when deleting a destination.
     * @type {Date}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    purge_initiated_at?: Date;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    type?: string;
}

/**
 * Check if a given object implements the SystemPatchSyncDestinationsAwsSmNameResponse interface.
 */
export function instanceOfSystemPatchSyncDestinationsAwsSmNameResponse(value: object): value is SystemPatchSyncDestinationsAwsSmNameResponse {
    return true;
}

export function SystemPatchSyncDestinationsAwsSmNameResponseFromJSON(json: any): SystemPatchSyncDestinationsAwsSmNameResponse {
    return SystemPatchSyncDestinationsAwsSmNameResponseFromJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsAwsSmNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncDestinationsAwsSmNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'connection_details': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'options': json['options'] == null ? undefined : json['options'],
        'purge_error': json['purge_error'] == null ? undefined : json['purge_error'],
        'purge_initiated_at': json['purge_initiated_at'] == null ? undefined : (new Date(json['purge_initiated_at'])),
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function SystemPatchSyncDestinationsAwsSmNameResponseToJSON(json: any): SystemPatchSyncDestinationsAwsSmNameResponse {
    return SystemPatchSyncDestinationsAwsSmNameResponseToJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsAwsSmNameResponseToJSONTyped(value?: SystemPatchSyncDestinationsAwsSmNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'connection_details': value['connection_details'],
        'name': value['name'],
        'options': value['options'],
        'purge_error': value['purge_error'],
        'purge_initiated_at': value['purge_initiated_at'] == null ? undefined : ((value['purge_initiated_at']).toISOString()),
        'type': value['type'],
    };
}

