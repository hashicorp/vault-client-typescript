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
 * @interface AwsReadStaticCredsNameResponse
 */
export interface AwsReadStaticCredsNameResponse {
    /**
     * The access key of the AWS Credential
     * @type {string}
     * @memberof AwsReadStaticCredsNameResponse
     */
    access_key?: string;
    /**
     * The secret key of the AWS Credential
     * @type {string}
     * @memberof AwsReadStaticCredsNameResponse
     */
    secret_key?: string;
}

/**
 * Check if a given object implements the AwsReadStaticCredsNameResponse interface.
 */
export function instanceOfAwsReadStaticCredsNameResponse(value: object): value is AwsReadStaticCredsNameResponse {
    return true;
}

export function AwsReadStaticCredsNameResponseFromJSON(json: any): AwsReadStaticCredsNameResponse {
    return AwsReadStaticCredsNameResponseFromJSONTyped(json, false);
}

export function AwsReadStaticCredsNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwsReadStaticCredsNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'access_key': json['access_key'] == null ? undefined : json['access_key'],
        'secret_key': json['secret_key'] == null ? undefined : json['secret_key'],
    };
}

export function AwsReadStaticCredsNameResponseToJSON(json: any): AwsReadStaticCredsNameResponse {
    return AwsReadStaticCredsNameResponseToJSONTyped(json, false);
}

export function AwsReadStaticCredsNameResponseToJSONTyped(value?: AwsReadStaticCredsNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access_key': value['access_key'],
        'secret_key': value['secret_key'],
    };
}

