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
 * @interface SystemPatchSyncDestinationsAzureKvNameRequest
 */
export interface SystemPatchSyncDestinationsAzureKvNameRequest {
    /**
     * Sets which IPv4 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    allowed_ipv4_addresses?: Array<string>;
    /**
     * Sets which IPv6 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    allowed_ipv6_addresses?: Array<string>;
    /**
     * Sets which port numbers Vault is allowed to connect through for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    allowed_ports?: Array<string>;
    /**
     * OAuth2 client id of an Azure app registration with access to the key vault.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    client_id?: string;
    /**
     * OAuth2 client secret of an Azure app registration with access to the key vault.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    client_secret?: string;
    /**
     * Azure environment name. If not provided, AzurePublicCloud is used.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    cloud?: string;
    /**
     * Custom tags to set on the secret managed at the destination. Custom tags are merged with system tags.
     * @type {object}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    custom_tags?: object;
    /**
     * Allows all IP addresses and ports to be connected to for syncing secrets.
     * @type {boolean}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    disable_strict_networking?: boolean;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Supports `secret-path` and `secret-key`.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    granularity?: string;
    /**
     * URI of the Azure Key Vault to access.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    key_vault_uri?: string;
    /**
     * Asynchronously unsyncs all associated secrets with the destination then deletes the destination config.
     * @type {boolean}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    purge?: boolean;
    /**
     * Template describing how to generate external secret names. Supports a subset of the Go Template syntax.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    secret_name_template?: string;
    /**
     * List of custom tags to remove for patch requests. This field is ignored on create and update requests.
     * @type {Array<string>}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    tags_to_remove?: Array<string>;
    /**
     * Tenant id for the Azure Active Directory.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAzureKvNameRequest
     */
    tenant_id?: string;
}

/**
 * Check if a given object implements the SystemPatchSyncDestinationsAzureKvNameRequest interface.
 */
export function instanceOfSystemPatchSyncDestinationsAzureKvNameRequest(value: object): value is SystemPatchSyncDestinationsAzureKvNameRequest {
    return true;
}

export function SystemPatchSyncDestinationsAzureKvNameRequestFromJSON(json: any): SystemPatchSyncDestinationsAzureKvNameRequest {
    return SystemPatchSyncDestinationsAzureKvNameRequestFromJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsAzureKvNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncDestinationsAzureKvNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'allowed_ipv4_addresses': json['allowed_ipv4_addresses'] == null ? undefined : json['allowed_ipv4_addresses'],
        'allowed_ipv6_addresses': json['allowed_ipv6_addresses'] == null ? undefined : json['allowed_ipv6_addresses'],
        'allowed_ports': json['allowed_ports'] == null ? undefined : json['allowed_ports'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'client_secret': json['client_secret'] == null ? undefined : json['client_secret'],
        'cloud': json['cloud'] == null ? undefined : json['cloud'],
        'custom_tags': json['custom_tags'] == null ? undefined : json['custom_tags'],
        'disable_strict_networking': json['disable_strict_networking'] == null ? undefined : json['disable_strict_networking'],
        'granularity': json['granularity'] == null ? undefined : json['granularity'],
        'key_vault_uri': json['key_vault_uri'] == null ? undefined : json['key_vault_uri'],
        'purge': json['purge'] == null ? undefined : json['purge'],
        'secret_name_template': json['secret_name_template'] == null ? undefined : json['secret_name_template'],
        'tags_to_remove': json['tags_to_remove'] == null ? undefined : json['tags_to_remove'],
        'tenant_id': json['tenant_id'] == null ? undefined : json['tenant_id'],
    };
}

export function SystemPatchSyncDestinationsAzureKvNameRequestToJSON(json: any): SystemPatchSyncDestinationsAzureKvNameRequest {
    return SystemPatchSyncDestinationsAzureKvNameRequestToJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsAzureKvNameRequestToJSONTyped(value?: SystemPatchSyncDestinationsAzureKvNameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowed_ipv4_addresses': value['allowed_ipv4_addresses'],
        'allowed_ipv6_addresses': value['allowed_ipv6_addresses'],
        'allowed_ports': value['allowed_ports'],
        'client_id': value['client_id'],
        'client_secret': value['client_secret'],
        'cloud': value['cloud'],
        'custom_tags': value['custom_tags'],
        'disable_strict_networking': value['disable_strict_networking'],
        'granularity': value['granularity'],
        'key_vault_uri': value['key_vault_uri'],
        'purge': value['purge'],
        'secret_name_template': value['secret_name_template'],
        'tags_to_remove': value['tags_to_remove'],
        'tenant_id': value['tenant_id'],
    };
}

