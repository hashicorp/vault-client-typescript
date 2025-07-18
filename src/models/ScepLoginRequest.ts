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
 * @interface ScepLoginRequest
 */
export interface ScepLoginRequest {
    /**
     * The type of challenge to use for authentication the PKI plugin expects to use
     * @type {string}
     * @memberof ScepLoginRequest
     */
    challenge_type?: ScepLoginRequestChallengeTypeEnum;
    /**
     * When using InTune authentication, validate the PKI mount can solve the challenge/response
     * @type {string}
     * @memberof ScepLoginRequest
     */
    challenge_value?: string;
    /**
     * CSR provided through the SCEP protocol.
     * @type {string}
     * @memberof ScepLoginRequest
     */
    csr: string;
    /**
     * The name of the SCEP role to authenticate against.
     * @type {string}
     * @memberof ScepLoginRequest
     */
    name?: string;
}

/**
* @export
* @enum {string}
*/
export enum ScepLoginRequestChallengeTypeEnum {
    STATIC = 'static',
    INTUNE = 'intune'
}


/**
 * Check if a given object implements the ScepLoginRequest interface.
 */
export function instanceOfScepLoginRequest(value: object): value is ScepLoginRequest {
    if (!('csr' in value) || value['csr'] === undefined) return false;
    return true;
}

export function ScepLoginRequestFromJSON(json: any): ScepLoginRequest {
    return ScepLoginRequestFromJSONTyped(json, false);
}

export function ScepLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScepLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'challenge_type': json['challenge_type'] == null ? undefined : json['challenge_type'],
        'challenge_value': json['challenge_value'] == null ? undefined : json['challenge_value'],
        'csr': json['csr'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function ScepLoginRequestToJSON(json: any): ScepLoginRequest {
    return ScepLoginRequestToJSONTyped(json, false);
}

export function ScepLoginRequestToJSONTyped(value?: ScepLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'challenge_type': value['challenge_type'],
        'challenge_value': value['challenge_value'],
        'csr': value['csr'],
        'name': value['name'],
    };
}

