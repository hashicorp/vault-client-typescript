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
 * @interface AzureWriteAuthRoleRequest
 */
export interface AzureWriteAuthRoleRequest {
    /**
     * Comma-separated list of group ids that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_group_ids?: Array<string>;
    /**
     * Comma-separated list of locations that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_locations?: Array<string>;
    /**
     * Comma-separated list of resource groups that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_resource_groups?: Array<string>;
    /**
     * Comma-separated list of scale sets that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_scale_sets?: Array<string>;
    /**
     * Comma-separated list of service principal ids that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_service_principal_ids?: Array<string>;
    /**
     * Comma-separated list of subscription ids that login is restricted to.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    bound_subscription_ids?: Array<string>;
    /**
     * Use "token_max_ttl" instead. If this and "token_max_ttl" are both specified, only "token_max_ttl" will be used.
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     * @deprecated
     */
    max_ttl?: string;
    /**
     * Use "token_num_uses" instead. If this and "token_num_uses" are both specified, only "token_num_uses" will be used.
     * @type {number}
     * @memberof AzureWriteAuthRoleRequest
     * @deprecated
     */
    num_uses?: number;
    /**
     * Use "token_period" instead. If this and "token_period" are both specified, only "token_period" will be used.
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     * @deprecated
     */
    period?: string;
    /**
     * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     * @deprecated
     */
    policies?: Array<string>;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_bound_cidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_explicit_max_ttl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_max_ttl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_no_default_policy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_num_uses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_period?: string;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_policies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_ttl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     */
    token_type?: string;
    /**
     * Use "token_ttl" instead. If this and "token_ttl" are both specified, only "token_ttl" will be used.
     * @type {string}
     * @memberof AzureWriteAuthRoleRequest
     * @deprecated
     */
    ttl?: string;
}

/**
 * Check if a given object implements the AzureWriteAuthRoleRequest interface.
 */
export function instanceOfAzureWriteAuthRoleRequest(value: object): value is AzureWriteAuthRoleRequest {
    return true;
}

export function AzureWriteAuthRoleRequestFromJSON(json: any): AzureWriteAuthRoleRequest {
    return AzureWriteAuthRoleRequestFromJSONTyped(json, false);
}

export function AzureWriteAuthRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AzureWriteAuthRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'bound_group_ids': json['bound_group_ids'] == null ? undefined : json['bound_group_ids'],
        'bound_locations': json['bound_locations'] == null ? undefined : json['bound_locations'],
        'bound_resource_groups': json['bound_resource_groups'] == null ? undefined : json['bound_resource_groups'],
        'bound_scale_sets': json['bound_scale_sets'] == null ? undefined : json['bound_scale_sets'],
        'bound_service_principal_ids': json['bound_service_principal_ids'] == null ? undefined : json['bound_service_principal_ids'],
        'bound_subscription_ids': json['bound_subscription_ids'] == null ? undefined : json['bound_subscription_ids'],
        'max_ttl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'num_uses': json['num_uses'] == null ? undefined : json['num_uses'],
        'period': json['period'] == null ? undefined : json['period'],
        'policies': json['policies'] == null ? undefined : json['policies'],
        'token_bound_cidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'token_explicit_max_ttl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'token_max_ttl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'token_no_default_policy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'token_num_uses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'token_period': json['token_period'] == null ? undefined : json['token_period'],
        'token_policies': json['token_policies'] == null ? undefined : json['token_policies'],
        'token_ttl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'token_type': json['token_type'] == null ? undefined : json['token_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function AzureWriteAuthRoleRequestToJSON(json: any): AzureWriteAuthRoleRequest {
    return AzureWriteAuthRoleRequestToJSONTyped(json, false);
}

export function AzureWriteAuthRoleRequestToJSONTyped(value?: AzureWriteAuthRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bound_group_ids': value['bound_group_ids'],
        'bound_locations': value['bound_locations'],
        'bound_resource_groups': value['bound_resource_groups'],
        'bound_scale_sets': value['bound_scale_sets'],
        'bound_service_principal_ids': value['bound_service_principal_ids'],
        'bound_subscription_ids': value['bound_subscription_ids'],
        'max_ttl': value['max_ttl'],
        'num_uses': value['num_uses'],
        'period': value['period'],
        'policies': value['policies'],
        'token_bound_cidrs': value['token_bound_cidrs'],
        'token_explicit_max_ttl': value['token_explicit_max_ttl'],
        'token_max_ttl': value['token_max_ttl'],
        'token_no_default_policy': value['token_no_default_policy'],
        'token_num_uses': value['token_num_uses'],
        'token_period': value['token_period'],
        'token_policies': value['token_policies'],
        'token_ttl': value['token_ttl'],
        'token_type': value['token_type'],
        'ttl': value['ttl'],
    };
}

