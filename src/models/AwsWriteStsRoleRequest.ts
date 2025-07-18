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
 * @interface AwsWriteStsRoleRequest
 */
export interface AwsWriteStsRoleRequest {
    /**
     * AWS external ID to be used when assuming the STS role.
     * @type {string}
     * @memberof AwsWriteStsRoleRequest
     */
    external_id?: string;
    /**
     * AWS ARN for STS role to be assumed when interacting with the account specified. The Vault server must have permissions to assume this role.
     * @type {string}
     * @memberof AwsWriteStsRoleRequest
     */
    sts_role?: string;
}

/**
 * Check if a given object implements the AwsWriteStsRoleRequest interface.
 */
export function instanceOfAwsWriteStsRoleRequest(value: object): value is AwsWriteStsRoleRequest {
    return true;
}

export function AwsWriteStsRoleRequestFromJSON(json: any): AwsWriteStsRoleRequest {
    return AwsWriteStsRoleRequestFromJSONTyped(json, false);
}

export function AwsWriteStsRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwsWriteStsRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'external_id': json['external_id'] == null ? undefined : json['external_id'],
        'sts_role': json['sts_role'] == null ? undefined : json['sts_role'],
    };
}

export function AwsWriteStsRoleRequestToJSON(json: any): AwsWriteStsRoleRequest {
    return AwsWriteStsRoleRequestToJSONTyped(json, false);
}

export function AwsWriteStsRoleRequestToJSONTyped(value?: AwsWriteStsRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'external_id': value['external_id'],
        'sts_role': value['sts_role'],
    };
}

