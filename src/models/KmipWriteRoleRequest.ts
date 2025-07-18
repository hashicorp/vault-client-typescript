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
 * @interface KmipWriteRoleRequest
 */
export interface KmipWriteRoleRequest {
    /**
     * Allow the "Activate" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_activate?: boolean;
    /**
     * Allow the "Add Attribute" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_add_attribute?: boolean;
    /**
     * Allow ALL operations to be performed by this role. This can be overridden if other allowed operations are set to false within the same request.
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_all?: boolean;
    /**
     * Allow the "Create" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_create?: boolean;
    /**
     * Allow the "Create Key Pair" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_create_key_pair?: boolean;
    /**
     * Allow the "Decrypt" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_decrypt?: boolean;
    /**
     * Allow the "Delete Attribute" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_delete_attribute?: boolean;
    /**
     * Allow the "Destroy" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_destroy?: boolean;
    /**
     * Allow the "Discover Versions" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_discover_versions?: boolean;
    /**
     * Allow the "Encrypt" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_encrypt?: boolean;
    /**
     * Allow the "Get" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_get?: boolean;
    /**
     * Allow the "Get Attribute List" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_get_attribute_list?: boolean;
    /**
     * Allow the "Get Attributes" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_get_attributes?: boolean;
    /**
     * Allow the "Import" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_import?: boolean;
    /**
     * Allow the "Locate" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_locate?: boolean;
    /**
     * Allow the "Mac" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_mac?: boolean;
    /**
     * Allow the "Mac Verify" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_mac_verify?: boolean;
    /**
     * Allow the "Modify Attribute" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_modify_attribute?: boolean;
    /**
     * Allow NO operations to be performed by this role. This can be overridden if other allowed operations are set to true within the same request.
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_none?: boolean;
    /**
     * Allow the "Query" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_query?: boolean;
    /**
     * Allow the "Register" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_register?: boolean;
    /**
     * Allow the "Rekey" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_rekey?: boolean;
    /**
     * Allow the "Rekey Key Pair" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_rekey_key_pair?: boolean;
    /**
     * Allow the "Revoke" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_revoke?: boolean;
    /**
     * Allow the "Rng Retrieve" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_rng_retrieve?: boolean;
    /**
     * Allow the "Rng Seed" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_rng_seed?: boolean;
    /**
     * Allow the "Sign" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_sign?: boolean;
    /**
     * Allow the "Signature Verify" operation to be performed by this role
     * @type {boolean}
     * @memberof KmipWriteRoleRequest
     */
    operation_signature_verify?: boolean;
    /**
     * Client certificate key bits, valid values depend on key type
     * @type {number}
     * @memberof KmipWriteRoleRequest
     */
    tls_client_key_bits?: number;
    /**
     * Client certificate key type, rsa or ec
     * @type {string}
     * @memberof KmipWriteRoleRequest
     */
    tls_client_key_type?: KmipWriteRoleRequestTlsClientKeyTypeEnum;
    /**
     * Client certificate TTL in either an integer number of seconds (10) or an integer time unit (10s)
     * @type {string}
     * @memberof KmipWriteRoleRequest
     */
    tls_client_ttl?: string;
}

/**
* @export
* @enum {string}
*/
export enum KmipWriteRoleRequestTlsClientKeyTypeEnum {
    RSA = 'rsa',
    EC = 'ec'
}


/**
 * Check if a given object implements the KmipWriteRoleRequest interface.
 */
export function instanceOfKmipWriteRoleRequest(value: object): value is KmipWriteRoleRequest {
    return true;
}

export function KmipWriteRoleRequestFromJSON(json: any): KmipWriteRoleRequest {
    return KmipWriteRoleRequestFromJSONTyped(json, false);
}

export function KmipWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KmipWriteRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'operation_activate': json['operation_activate'] == null ? undefined : json['operation_activate'],
        'operation_add_attribute': json['operation_add_attribute'] == null ? undefined : json['operation_add_attribute'],
        'operation_all': json['operation_all'] == null ? undefined : json['operation_all'],
        'operation_create': json['operation_create'] == null ? undefined : json['operation_create'],
        'operation_create_key_pair': json['operation_create_key_pair'] == null ? undefined : json['operation_create_key_pair'],
        'operation_decrypt': json['operation_decrypt'] == null ? undefined : json['operation_decrypt'],
        'operation_delete_attribute': json['operation_delete_attribute'] == null ? undefined : json['operation_delete_attribute'],
        'operation_destroy': json['operation_destroy'] == null ? undefined : json['operation_destroy'],
        'operation_discover_versions': json['operation_discover_versions'] == null ? undefined : json['operation_discover_versions'],
        'operation_encrypt': json['operation_encrypt'] == null ? undefined : json['operation_encrypt'],
        'operation_get': json['operation_get'] == null ? undefined : json['operation_get'],
        'operation_get_attribute_list': json['operation_get_attribute_list'] == null ? undefined : json['operation_get_attribute_list'],
        'operation_get_attributes': json['operation_get_attributes'] == null ? undefined : json['operation_get_attributes'],
        'operation_import': json['operation_import'] == null ? undefined : json['operation_import'],
        'operation_locate': json['operation_locate'] == null ? undefined : json['operation_locate'],
        'operation_mac': json['operation_mac'] == null ? undefined : json['operation_mac'],
        'operation_mac_verify': json['operation_mac_verify'] == null ? undefined : json['operation_mac_verify'],
        'operation_modify_attribute': json['operation_modify_attribute'] == null ? undefined : json['operation_modify_attribute'],
        'operation_none': json['operation_none'] == null ? undefined : json['operation_none'],
        'operation_query': json['operation_query'] == null ? undefined : json['operation_query'],
        'operation_register': json['operation_register'] == null ? undefined : json['operation_register'],
        'operation_rekey': json['operation_rekey'] == null ? undefined : json['operation_rekey'],
        'operation_rekey_key_pair': json['operation_rekey_key_pair'] == null ? undefined : json['operation_rekey_key_pair'],
        'operation_revoke': json['operation_revoke'] == null ? undefined : json['operation_revoke'],
        'operation_rng_retrieve': json['operation_rng_retrieve'] == null ? undefined : json['operation_rng_retrieve'],
        'operation_rng_seed': json['operation_rng_seed'] == null ? undefined : json['operation_rng_seed'],
        'operation_sign': json['operation_sign'] == null ? undefined : json['operation_sign'],
        'operation_signature_verify': json['operation_signature_verify'] == null ? undefined : json['operation_signature_verify'],
        'tls_client_key_bits': json['tls_client_key_bits'] == null ? undefined : json['tls_client_key_bits'],
        'tls_client_key_type': json['tls_client_key_type'] == null ? undefined : json['tls_client_key_type'],
        'tls_client_ttl': json['tls_client_ttl'] == null ? undefined : json['tls_client_ttl'],
    };
}

export function KmipWriteRoleRequestToJSON(json: any): KmipWriteRoleRequest {
    return KmipWriteRoleRequestToJSONTyped(json, false);
}

export function KmipWriteRoleRequestToJSONTyped(value?: KmipWriteRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'operation_activate': value['operation_activate'],
        'operation_add_attribute': value['operation_add_attribute'],
        'operation_all': value['operation_all'],
        'operation_create': value['operation_create'],
        'operation_create_key_pair': value['operation_create_key_pair'],
        'operation_decrypt': value['operation_decrypt'],
        'operation_delete_attribute': value['operation_delete_attribute'],
        'operation_destroy': value['operation_destroy'],
        'operation_discover_versions': value['operation_discover_versions'],
        'operation_encrypt': value['operation_encrypt'],
        'operation_get': value['operation_get'],
        'operation_get_attribute_list': value['operation_get_attribute_list'],
        'operation_get_attributes': value['operation_get_attributes'],
        'operation_import': value['operation_import'],
        'operation_locate': value['operation_locate'],
        'operation_mac': value['operation_mac'],
        'operation_mac_verify': value['operation_mac_verify'],
        'operation_modify_attribute': value['operation_modify_attribute'],
        'operation_none': value['operation_none'],
        'operation_query': value['operation_query'],
        'operation_register': value['operation_register'],
        'operation_rekey': value['operation_rekey'],
        'operation_rekey_key_pair': value['operation_rekey_key_pair'],
        'operation_revoke': value['operation_revoke'],
        'operation_rng_retrieve': value['operation_rng_retrieve'],
        'operation_rng_seed': value['operation_rng_seed'],
        'operation_sign': value['operation_sign'],
        'operation_signature_verify': value['operation_signature_verify'],
        'tls_client_key_bits': value['tls_client_key_bits'],
        'tls_client_key_type': value['tls_client_key_type'],
        'tls_client_ttl': value['tls_client_ttl'],
    };
}

