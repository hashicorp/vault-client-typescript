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
 * @interface ScepWriteRoleRoleRequest
 */
export interface ScepWriteRoleRoleRequest {
    /**
     * The authentication type to use
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    auth_type?: ScepWriteRoleRoleRequestAuthTypeEnum;
    /**
     * The static challenge to use if auth_type is static-challenge, not used for other auth types
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    challenge?: string;
    /**
     * The display name to use for clients using this SCEP role
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    display_name?: string;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_bound_cidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_explicit_max_ttl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_max_ttl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_no_default_policy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_num_uses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_period?: string;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_policies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_ttl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof ScepWriteRoleRoleRequest
     */
    token_type?: string;
}

/**
* @export
* @enum {string}
*/
export enum ScepWriteRoleRoleRequestAuthTypeEnum {
    STATIC_CHALLENGE = 'static-challenge',
    INTUNE = 'intune'
}


/**
 * Check if a given object implements the ScepWriteRoleRoleRequest interface.
 */
export function instanceOfScepWriteRoleRoleRequest(value: object): value is ScepWriteRoleRoleRequest {
    return true;
}

export function ScepWriteRoleRoleRequestFromJSON(json: any): ScepWriteRoleRoleRequest {
    return ScepWriteRoleRoleRequestFromJSONTyped(json, false);
}

export function ScepWriteRoleRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScepWriteRoleRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'auth_type': json['auth_type'] == null ? undefined : json['auth_type'],
        'challenge': json['challenge'] == null ? undefined : json['challenge'],
        'display_name': json['display_name'] == null ? undefined : json['display_name'],
        'token_bound_cidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'token_explicit_max_ttl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'token_max_ttl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'token_no_default_policy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'token_num_uses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'token_period': json['token_period'] == null ? undefined : json['token_period'],
        'token_policies': json['token_policies'] == null ? undefined : json['token_policies'],
        'token_ttl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'token_type': json['token_type'] == null ? undefined : json['token_type'],
    };
}

export function ScepWriteRoleRoleRequestToJSON(json: any): ScepWriteRoleRoleRequest {
    return ScepWriteRoleRoleRequestToJSONTyped(json, false);
}

export function ScepWriteRoleRoleRequestToJSONTyped(value?: ScepWriteRoleRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'auth_type': value['auth_type'],
        'challenge': value['challenge'],
        'display_name': value['display_name'],
        'token_bound_cidrs': value['token_bound_cidrs'],
        'token_explicit_max_ttl': value['token_explicit_max_ttl'],
        'token_max_ttl': value['token_max_ttl'],
        'token_no_default_policy': value['token_no_default_policy'],
        'token_num_uses': value['token_num_uses'],
        'token_period': value['token_period'],
        'token_policies': value['token_policies'],
        'token_ttl': value['token_ttl'],
        'token_type': value['token_type'],
    };
}

