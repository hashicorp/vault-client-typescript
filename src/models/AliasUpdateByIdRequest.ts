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
 * @interface AliasUpdateByIdRequest
 */
export interface AliasUpdateByIdRequest {
    /**
     * Entity ID to which this alias should be tied to
     * @type {string}
     * @memberof AliasUpdateByIdRequest
     */
    canonical_id?: string;
    /**
     * Entity ID to which this alias should be tied to. This field is deprecated in favor of 'canonical_id'.
     * @type {string}
     * @memberof AliasUpdateByIdRequest
     */
    entity_id?: string;
    /**
     * Mount accessor to which this alias belongs to
     * @type {string}
     * @memberof AliasUpdateByIdRequest
     */
    mount_accessor?: string;
    /**
     * Name of the alias
     * @type {string}
     * @memberof AliasUpdateByIdRequest
     */
    name?: string;
}

/**
 * Check if a given object implements the AliasUpdateByIdRequest interface.
 */
export function instanceOfAliasUpdateByIdRequest(value: object): value is AliasUpdateByIdRequest {
    return true;
}

export function AliasUpdateByIdRequestFromJSON(json: any): AliasUpdateByIdRequest {
    return AliasUpdateByIdRequestFromJSONTyped(json, false);
}

export function AliasUpdateByIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasUpdateByIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'canonical_id': json['canonical_id'] == null ? undefined : json['canonical_id'],
        'entity_id': json['entity_id'] == null ? undefined : json['entity_id'],
        'mount_accessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function AliasUpdateByIdRequestToJSON(json: any): AliasUpdateByIdRequest {
    return AliasUpdateByIdRequestToJSONTyped(json, false);
}

export function AliasUpdateByIdRequestToJSONTyped(value?: AliasUpdateByIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'canonical_id': value['canonical_id'],
        'entity_id': value['entity_id'],
        'mount_accessor': value['mount_accessor'],
        'name': value['name'],
    };
}

