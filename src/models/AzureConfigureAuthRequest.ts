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
 * @interface AzureConfigureAuthRequest
 */
export interface AzureConfigureAuthRequest {
    /**
     * The OAuth2 client id to connection to Azure. This value can also be provided with the AZURE_CLIENT_ID environment variable.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    client_id?: string;
    /**
     * The OAuth2 client secret to connection to Azure. This value can also be provided with the AZURE_CLIENT_SECRET environment variable.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    client_secret?: string;
    /**
     * If set to true, will deregister all registered rotation jobs from the RotationManager for the plugin.
     * @type {boolean}
     * @memberof AzureConfigureAuthRequest
     */
    disable_automated_rotation?: boolean;
    /**
     * The Azure environment name. If not provided, AzurePublicCloud is used. This value can also be provided with the AZURE_ENVIRONMENT environment variable.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    environment?: string;
    /**
     * Audience of plugin identity tokens
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    identity_token_audience?: string;
    /**
     * Time-to-live of plugin identity tokens
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    identity_token_ttl?: string;
    /**
     * The maximum number of attempts a failed operation will be retried before producing an error.
     * @type {number}
     * @memberof AzureConfigureAuthRequest
     */
    max_retries?: number;
    /**
     * The maximum delay allowed before retrying an operation.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    max_retry_delay?: string;
    /**
     * The resource URL for the vault application in Azure Active Directory. This value can also be provided with the AZURE_AD_RESOURCE environment variable.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    resource?: string;
    /**
     * The initial amount of delay to use before retrying an operation, increasing exponentially.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    retry_delay?: string;
    /**
     * The TTL of the root password in Azure. This can be either a number of seconds or a time formatted duration (ex: 24h, 48ds)
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    root_password_ttl?: string;
    /**
     * TTL for automatic credential rotation of the given username. Mutually exclusive with rotation_schedule
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    rotation_period?: string;
    /**
     * CRON-style string that will define the schedule on which rotations should occur. Mutually exclusive with rotation_period
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    rotation_schedule?: string;
    /**
     * Specifies the amount of time in which the rotation is allowed to occur starting from a given rotation_schedule
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    rotation_window?: string;
    /**
     * The tenant id for the Azure Active Directory. This is sometimes referred to as Directory ID in AD. This value can also be provided with the AZURE_TENANT_ID environment variable.
     * @type {string}
     * @memberof AzureConfigureAuthRequest
     */
    tenant_id?: string;
}

/**
 * Check if a given object implements the AzureConfigureAuthRequest interface.
 */
export function instanceOfAzureConfigureAuthRequest(value: object): value is AzureConfigureAuthRequest {
    return true;
}

export function AzureConfigureAuthRequestFromJSON(json: any): AzureConfigureAuthRequest {
    return AzureConfigureAuthRequestFromJSONTyped(json, false);
}

export function AzureConfigureAuthRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AzureConfigureAuthRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'client_secret': json['client_secret'] == null ? undefined : json['client_secret'],
        'disable_automated_rotation': json['disable_automated_rotation'] == null ? undefined : json['disable_automated_rotation'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'identity_token_audience': json['identity_token_audience'] == null ? undefined : json['identity_token_audience'],
        'identity_token_ttl': json['identity_token_ttl'] == null ? undefined : json['identity_token_ttl'],
        'max_retries': json['max_retries'] == null ? undefined : json['max_retries'],
        'max_retry_delay': json['max_retry_delay'] == null ? undefined : json['max_retry_delay'],
        'resource': json['resource'] == null ? undefined : json['resource'],
        'retry_delay': json['retry_delay'] == null ? undefined : json['retry_delay'],
        'root_password_ttl': json['root_password_ttl'] == null ? undefined : json['root_password_ttl'],
        'rotation_period': json['rotation_period'] == null ? undefined : json['rotation_period'],
        'rotation_schedule': json['rotation_schedule'] == null ? undefined : json['rotation_schedule'],
        'rotation_window': json['rotation_window'] == null ? undefined : json['rotation_window'],
        'tenant_id': json['tenant_id'] == null ? undefined : json['tenant_id'],
    };
}

export function AzureConfigureAuthRequestToJSON(json: any): AzureConfigureAuthRequest {
    return AzureConfigureAuthRequestToJSONTyped(json, false);
}

export function AzureConfigureAuthRequestToJSONTyped(value?: AzureConfigureAuthRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'client_id': value['client_id'],
        'client_secret': value['client_secret'],
        'disable_automated_rotation': value['disable_automated_rotation'],
        'environment': value['environment'],
        'identity_token_audience': value['identity_token_audience'],
        'identity_token_ttl': value['identity_token_ttl'],
        'max_retries': value['max_retries'],
        'max_retry_delay': value['max_retry_delay'],
        'resource': value['resource'],
        'retry_delay': value['retry_delay'],
        'root_password_ttl': value['root_password_ttl'],
        'rotation_period': value['rotation_period'],
        'rotation_schedule': value['rotation_schedule'],
        'rotation_window': value['rotation_window'],
        'tenant_id': value['tenant_id'],
    };
}

