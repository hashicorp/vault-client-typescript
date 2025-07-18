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
 * @interface SamlWriteRoleNameRequest
 */
export interface SamlWriteRoleNameRequest {
    /**
     * Mapping of attribute names to values to assert exist in the SAML Response's Assertion.
     * @type {object}
     * @memberof SamlWriteRoleNameRequest
     */
    bound_attributes?: object;
    /**
     * The type of matching assertion to perform on bound_attributes key-value pairs. If 'string', requires a direct string match in values. If 'glob', allows for wildcard matching using the '*' character in values.
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    bound_attributes_type?: SamlWriteRoleNameRequestBoundAttributesTypeEnum;
    /**
     * The subject to assert is in the SAML Response. The subject in theSAML Response needs to match one of the values configured.
     * @type {Array<string>}
     * @memberof SamlWriteRoleNameRequest
     */
    bound_subjects?: Array<string>;
    /**
     * The type of matching assertion to perform on bound_subject. If 'string', requires a direct string match. If 'glob', allows for wildcardmatching using the '*' character.
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    bound_subjects_type?: SamlWriteRoleNameRequestBoundSubjectsTypeEnum;
    /**
     * The attribute to use for Vault Identity group alias names.
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    groups_attribute?: string;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof SamlWriteRoleNameRequest
     */
    token_bound_cidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    token_explicit_max_ttl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    token_max_ttl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof SamlWriteRoleNameRequest
     */
    token_no_default_policy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof SamlWriteRoleNameRequest
     */
    token_num_uses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    token_period?: string;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof SamlWriteRoleNameRequest
     */
    token_policies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    token_ttl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof SamlWriteRoleNameRequest
     */
    token_type?: string;
}

/**
* @export
* @enum {string}
*/
export enum SamlWriteRoleNameRequestBoundAttributesTypeEnum {
    STRING = 'string',
    GLOB = 'glob'
}
/**
* @export
* @enum {string}
*/
export enum SamlWriteRoleNameRequestBoundSubjectsTypeEnum {
    STRING = 'string',
    GLOB = 'glob'
}


/**
 * Check if a given object implements the SamlWriteRoleNameRequest interface.
 */
export function instanceOfSamlWriteRoleNameRequest(value: object): value is SamlWriteRoleNameRequest {
    return true;
}

export function SamlWriteRoleNameRequestFromJSON(json: any): SamlWriteRoleNameRequest {
    return SamlWriteRoleNameRequestFromJSONTyped(json, false);
}

export function SamlWriteRoleNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SamlWriteRoleNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'bound_attributes': json['bound_attributes'] == null ? undefined : json['bound_attributes'],
        'bound_attributes_type': json['bound_attributes_type'] == null ? undefined : json['bound_attributes_type'],
        'bound_subjects': json['bound_subjects'] == null ? undefined : json['bound_subjects'],
        'bound_subjects_type': json['bound_subjects_type'] == null ? undefined : json['bound_subjects_type'],
        'groups_attribute': json['groups_attribute'] == null ? undefined : json['groups_attribute'],
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

export function SamlWriteRoleNameRequestToJSON(json: any): SamlWriteRoleNameRequest {
    return SamlWriteRoleNameRequestToJSONTyped(json, false);
}

export function SamlWriteRoleNameRequestToJSONTyped(value?: SamlWriteRoleNameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bound_attributes': value['bound_attributes'],
        'bound_attributes_type': value['bound_attributes_type'],
        'bound_subjects': value['bound_subjects'],
        'bound_subjects_type': value['bound_subjects_type'],
        'groups_attribute': value['groups_attribute'],
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

