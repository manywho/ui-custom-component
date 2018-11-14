/// <reference types="jquery" />
/**
 * Adding authentication token and tenant id to request headers
 * */
export declare const beforeSend: (xhr: XMLHttpRequest, tenantId: string, authenticationToken: string, event: string, request: any) => void;
/**
 * Make an AJAX request to the Boomi Flow platform
 * @param context TODO
 * @param event Type of event, `Settings.event(event + '.done')` will be called when the request completes
 * @param url The path to make the request against, excluding the host which is fetched from `Settings.global('platform.uri')`
 * @param type AJAX request type e.g. GET, POST, etc
 * @param tenantId The GUID of the tenant to make the request against
 * @param stateId The GUID of the state we are making the request from
 * @param authenticationToken Current running users authentication token
 * @param data Body of the request data
 * @returns JQuery deferred from the $.ajax request
 */
export declare const request: (context: any, event: string, url: string, type: string, tenantId: string, stateId: string, authenticationToken: string, data: object) => JQuery.jqXHR<any>;
/**
 * Upload a file to the Boomi Flow platform
 * @param context TODO
 * @param event Type of event, `Settings.event(event + '.done')` will be called when the request completes
 * @param url The path to make the request against, excluding the host which is fetched from `Settings.global('platform.uri')`
 * @param formData FormData for the file being uploaded
 * @param tenantId The GUID of the tenant to make the request against
 * @param authenticationToken Current running users authentication token
 * @param onProgress Callback to recieve progress event info
 * @returns JQuery deferred from the $.ajax request
 */
export declare const upload: (context: any, event: string, url: string, formData: FormData, tenantId: string, authenticationToken: string, onProgress: EventListenerOrEventListenerObject) => JQuery.jqXHR<any>;
/**
 * Upload a file to the Boomi Flow platform
 * @param context TODO
 * @param event Type of event, `Settings.event(event + '.done')` will be called when the request completes
 * @param url The path to make the request against, excluding the host which is fetched from `Settings.global('platform.uri')`
 * @param files List of files to be uploaded
 * @param request Request payload data
 * @param tenantId The GUID of the tenant to make the request against
 * @param authenticationToken Current running users authentication token
 * @param onProgress Callback to recieve progress event info
 * @param _ (stateId) Only currently used when offline
 * @returns JQuery deferred from the $.ajax request
 */
export declare const uploadFiles: (context: any, event: string, url: string, files: File[], request: any, tenantId: string, authenticationToken: string, onProgress: EventListenerOrEventListenerObject, _: string) => JQuery.jqXHR<any>;
