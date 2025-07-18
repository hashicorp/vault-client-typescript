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
 * @interface AppRoleWritePeriodRequest
 */
export interface AppRoleWritePeriodRequest {
    /**
     * Use "token_period" instead. If this and "token_period" are both specified, only "token_period" will be used.
     * @type {string}
     * @memberof AppRoleWritePeriodRequest
     * @deprecated
     */
    period?: string;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof AppRoleWritePeriodRequest
     */
    token_period?: string;
}

/**
 * Check if a given object implements the AppRoleWritePeriodRequest interface.
 */
export function instanceOfAppRoleWritePeriodRequest(value: object): value is AppRoleWritePeriodRequest {
    return true;
}

export function AppRoleWritePeriodRequestFromJSON(json: any): AppRoleWritePeriodRequest {
    return AppRoleWritePeriodRequestFromJSONTyped(json, false);
}

export function AppRoleWritePeriodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWritePeriodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'period': json['period'] == null ? undefined : json['period'],
        'token_period': json['token_period'] == null ? undefined : json['token_period'],
    };
}

export function AppRoleWritePeriodRequestToJSON(json: any): AppRoleWritePeriodRequest {
    return AppRoleWritePeriodRequestToJSONTyped(json, false);
}

export function AppRoleWritePeriodRequestToJSONTyped(value?: AppRoleWritePeriodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'period': value['period'],
        'token_period': value['token_period'],
    };
}

