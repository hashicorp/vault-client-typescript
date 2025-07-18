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
 * @interface RateLimitQuotasConfigureRequest
 */
export interface RateLimitQuotasConfigureRequest {
    /**
     * Specifies the list of exempt global paths from all rate limit quotas. If empty no global paths will be exempt.
     * @type {Array<string>}
     * @memberof RateLimitQuotasConfigureRequest
     */
    absolute_rate_limit_exempt_paths?: Array<string>;
    /**
     * If set, starts audit logging of requests that get rejected due to rate limit quota rule violations.
     * @type {boolean}
     * @memberof RateLimitQuotasConfigureRequest
     */
    enable_rate_limit_audit_logging?: boolean;
    /**
     * If set, additional rate limit quota HTTP headers will be added to responses.
     * @type {boolean}
     * @memberof RateLimitQuotasConfigureRequest
     */
    enable_rate_limit_response_headers?: boolean;
    /**
     * Specifies the list of exempt paths from all rate limit quotas. If empty no paths will be exempt.
     * @type {Array<string>}
     * @memberof RateLimitQuotasConfigureRequest
     */
    rate_limit_exempt_paths?: Array<string>;
}

/**
 * Check if a given object implements the RateLimitQuotasConfigureRequest interface.
 */
export function instanceOfRateLimitQuotasConfigureRequest(value: object): value is RateLimitQuotasConfigureRequest {
    return true;
}

export function RateLimitQuotasConfigureRequestFromJSON(json: any): RateLimitQuotasConfigureRequest {
    return RateLimitQuotasConfigureRequestFromJSONTyped(json, false);
}

export function RateLimitQuotasConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateLimitQuotasConfigureRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'absolute_rate_limit_exempt_paths': json['absolute_rate_limit_exempt_paths'] == null ? undefined : json['absolute_rate_limit_exempt_paths'],
        'enable_rate_limit_audit_logging': json['enable_rate_limit_audit_logging'] == null ? undefined : json['enable_rate_limit_audit_logging'],
        'enable_rate_limit_response_headers': json['enable_rate_limit_response_headers'] == null ? undefined : json['enable_rate_limit_response_headers'],
        'rate_limit_exempt_paths': json['rate_limit_exempt_paths'] == null ? undefined : json['rate_limit_exempt_paths'],
    };
}

export function RateLimitQuotasConfigureRequestToJSON(json: any): RateLimitQuotasConfigureRequest {
    return RateLimitQuotasConfigureRequestToJSONTyped(json, false);
}

export function RateLimitQuotasConfigureRequestToJSONTyped(value?: RateLimitQuotasConfigureRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'absolute_rate_limit_exempt_paths': value['absolute_rate_limit_exempt_paths'],
        'enable_rate_limit_audit_logging': value['enable_rate_limit_audit_logging'],
        'enable_rate_limit_response_headers': value['enable_rate_limit_response_headers'],
        'rate_limit_exempt_paths': value['rate_limit_exempt_paths'],
    };
}

