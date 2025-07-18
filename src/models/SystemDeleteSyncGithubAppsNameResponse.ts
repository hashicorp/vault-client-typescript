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
 * @interface SystemDeleteSyncGithubAppsNameResponse
 */
export interface SystemDeleteSyncGithubAppsNameResponse {
    /**
     * Application ID of the GitHub App.
     * @type {number}
     * @memberof SystemDeleteSyncGithubAppsNameResponse
     */
    app_id?: number;
    /**
     * The name of the GitHub app. Used to identify the application when configuring the GitHub destination
     * @type {string}
     * @memberof SystemDeleteSyncGithubAppsNameResponse
     */
    name?: string;
}

/**
 * Check if a given object implements the SystemDeleteSyncGithubAppsNameResponse interface.
 */
export function instanceOfSystemDeleteSyncGithubAppsNameResponse(value: object): value is SystemDeleteSyncGithubAppsNameResponse {
    return true;
}

export function SystemDeleteSyncGithubAppsNameResponseFromJSON(json: any): SystemDeleteSyncGithubAppsNameResponse {
    return SystemDeleteSyncGithubAppsNameResponseFromJSONTyped(json, false);
}

export function SystemDeleteSyncGithubAppsNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemDeleteSyncGithubAppsNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'app_id': json['app_id'] == null ? undefined : json['app_id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function SystemDeleteSyncGithubAppsNameResponseToJSON(json: any): SystemDeleteSyncGithubAppsNameResponse {
    return SystemDeleteSyncGithubAppsNameResponseToJSONTyped(json, false);
}

export function SystemDeleteSyncGithubAppsNameResponseToJSONTyped(value?: SystemDeleteSyncGithubAppsNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app_id': value['app_id'],
        'name': value['name'],
    };
}

