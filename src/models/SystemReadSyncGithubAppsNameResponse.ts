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
 * @interface SystemReadSyncGithubAppsNameResponse
 */
export interface SystemReadSyncGithubAppsNameResponse {
    /**
     * Application ID of the GitHub App.
     * @type {number}
     * @memberof SystemReadSyncGithubAppsNameResponse
     */
    app_id?: number;
    /**
     * The name of the GitHub app. Used to identify the application when configuring the GitHub destination
     * @type {string}
     * @memberof SystemReadSyncGithubAppsNameResponse
     */
    name?: string;
}

/**
 * Check if a given object implements the SystemReadSyncGithubAppsNameResponse interface.
 */
export function instanceOfSystemReadSyncGithubAppsNameResponse(value: object): value is SystemReadSyncGithubAppsNameResponse {
    return true;
}

export function SystemReadSyncGithubAppsNameResponseFromJSON(json: any): SystemReadSyncGithubAppsNameResponse {
    return SystemReadSyncGithubAppsNameResponseFromJSONTyped(json, false);
}

export function SystemReadSyncGithubAppsNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemReadSyncGithubAppsNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'app_id': json['app_id'] == null ? undefined : json['app_id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function SystemReadSyncGithubAppsNameResponseToJSON(json: any): SystemReadSyncGithubAppsNameResponse {
    return SystemReadSyncGithubAppsNameResponseToJSONTyped(json, false);
}

export function SystemReadSyncGithubAppsNameResponseToJSONTyped(value?: SystemReadSyncGithubAppsNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app_id': value['app_id'],
        'name': value['name'],
    };
}

