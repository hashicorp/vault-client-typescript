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
 * @interface RekeyAttemptUpdateResponse
 */
export interface RekeyAttemptUpdateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptUpdateResponse
     */
    backup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptUpdateResponse
     */
    complete?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof RekeyAttemptUpdateResponse
     */
    keys?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RekeyAttemptUpdateResponse
     */
    keys_base64?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptUpdateResponse
     */
    n?: number;
    /**
     * 
     * @type {string}
     * @memberof RekeyAttemptUpdateResponse
     */
    nonce?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RekeyAttemptUpdateResponse
     */
    pgp_fingerprints?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptUpdateResponse
     */
    progress?: number;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptUpdateResponse
     */
    required?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptUpdateResponse
     */
    started?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptUpdateResponse
     */
    t?: number;
    /**
     * 
     * @type {string}
     * @memberof RekeyAttemptUpdateResponse
     */
    verification_nonce?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptUpdateResponse
     */
    verification_required?: boolean;
}

/**
 * Check if a given object implements the RekeyAttemptUpdateResponse interface.
 */
export function instanceOfRekeyAttemptUpdateResponse(value: object): value is RekeyAttemptUpdateResponse {
    return true;
}

export function RekeyAttemptUpdateResponseFromJSON(json: any): RekeyAttemptUpdateResponse {
    return RekeyAttemptUpdateResponseFromJSONTyped(json, false);
}

export function RekeyAttemptUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RekeyAttemptUpdateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'backup': json['backup'] == null ? undefined : json['backup'],
        'complete': json['complete'] == null ? undefined : json['complete'],
        'keys': json['keys'] == null ? undefined : json['keys'],
        'keys_base64': json['keys_base64'] == null ? undefined : json['keys_base64'],
        'n': json['n'] == null ? undefined : json['n'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'pgp_fingerprints': json['pgp_fingerprints'] == null ? undefined : json['pgp_fingerprints'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'required': json['required'] == null ? undefined : json['required'],
        'started': json['started'] == null ? undefined : json['started'],
        't': json['t'] == null ? undefined : json['t'],
        'verification_nonce': json['verification_nonce'] == null ? undefined : json['verification_nonce'],
        'verification_required': json['verification_required'] == null ? undefined : json['verification_required'],
    };
}

export function RekeyAttemptUpdateResponseToJSON(json: any): RekeyAttemptUpdateResponse {
    return RekeyAttemptUpdateResponseToJSONTyped(json, false);
}

export function RekeyAttemptUpdateResponseToJSONTyped(value?: RekeyAttemptUpdateResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'backup': value['backup'],
        'complete': value['complete'],
        'keys': value['keys'],
        'keys_base64': value['keys_base64'],
        'n': value['n'],
        'nonce': value['nonce'],
        'pgp_fingerprints': value['pgp_fingerprints'],
        'progress': value['progress'],
        'required': value['required'],
        'started': value['started'],
        't': value['t'],
        'verification_nonce': value['verification_nonce'],
        'verification_required': value['verification_required'],
    };
}

