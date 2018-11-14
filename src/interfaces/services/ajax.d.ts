/// <reference types="jquery" />
/**
 * Make a file or objectdata request to the platform
 * @param url Endpoint (excluding host) that the request will be made against
 * @param event Type of event, `Settings.event(event + '.done')` will be called when the request completes
 * @param limit Number of results to return
 * @param search Search string to apply to the list filter
 * @param orderBy Property name to order results by
 * @param orderByDirection ASC or DESC
 * @param page Page offset for the list filter
 */
export declare const dispatchDataRequest: (url: string, event: string, request: any, tenantId: string, stateId: string, authenticationToken: string, limit: number, search: string, orderBy: string, orderByDirection: string, page: number) => JQueryXHR;
/**
 * POST to `/api/run/1/authentication/stateId`
 */
export declare const login: (loginUrl: string, username: string, password: string, sessionId: string, sessionUrl: string, stateId: string, tenantId: string) => JQueryXHR;
/**
 * POST to `/api/run/1` to initialize a state
 */
export declare const initialize: (engineInitializationRequest: any, tenantId: string, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/run/1/state/out/stateId/selectedOutcomeId` to flow out
 */
export declare const flowOut: (stateId: string, tenantId: string, selectedOutcomeId: string, authenticationToken: string) => JQueryXHR;
/**
 * GET the state of currently executing flow at `/api/run/1/state/stateId`
 */
export declare const join: (stateId: string, tenantId: string, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/run/1/state/engineInvokeRequest.stateId` to update the state of the flow
 */
export declare const invoke: (engineInvokeRequest: any, tenantId: string, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/run/1/navigation/stateId`
 */
export declare const getNavigation: (stateId: string, stateToken: string, navigationElementId: string, tenantId: string, authenticationToken?: string) => JQueryXHR;
/**
 * GET at `/api/run/1/flow/name/name`
 */
export declare const getFlowByName: (name: string, tenantId: string, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/service/1/data` to make an objectdata request
 * @param limit Number of results to return
 * @param search Search string to apply to the list filter
 * @param orderBy Property name to order results by
 * @param orderByDirection ASC or DESC
 * @param page Page offset for the list filter
 */
export declare const dispatchObjectDataRequest: (request: any, tenantId: string, stateId: string, authenticationToken: string, limit: number, search: string, orderBy: string, orderByDirection: string, page: number) => JQueryXHR;
/**
 * POST to `/api/service/1/file` to make a filedata request
 * @param limit Number of results to return
 * @param search Search string to apply to the list filter
 * @param orderBy Property name to order results by
 * @param orderByDirection ASC or DESC
 * @param page Page offset for the list filter
 */
export declare const dispatchFileDataRequest: (request: any, tenantId: string, stateId: string, authenticationToken: string, limit: number, search: string, orderBy: string, orderByDirection: string, page: number) => JQueryXHR;
/**
 * POST to `/api/service/1/file/content` to upload a file to a 3rd party service
 * DEPRECATED: Does not support offline file upload
 * @param onProgress Callback to recieve progress event info
 */
export declare const uploadFile: (formData: FormData, tenantId: string, authenticationToken: string, onProgress: EventListenerOrEventListenerObject) => JQueryXHR;
/**
 * POST to `/api/service/1/file/content` to upload a file to a 3rd party service (offline supported)
 * @param onProgress Callback to recieve progress event info
 */
export declare const uploadFiles: (files: File[], request: any, tenantId: string, authenticationToken: string, onProgress: EventListenerOrEventListenerObject, stateId: string) => JQueryXHR;
/**
 * POST to `/api/social/1/stream/streamId/file` to upload a file to a 3rd party social stream
 * @param onProgress Callback to recieve progress event info
 */
export declare const uploadSocialFile: (formData: FormData, streamId: string, tenantId: string, authenticationToken: string, onProgress: EventListenerOrEventListenerObject) => JQueryXHR;
/**
 * POST to `/api/run/1/authentication/stateId`
 */
export declare const sessionAuthentication: (tenantId: string, stateId: string, request: any, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/run/1/state/stateId/ping/`
 */
export declare const ping: (tenantId: string, stateId: string, stateToken: string, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/log/flowId/stateId`
 */
export declare const getExecutionLog: (tenantId: string, flowId: string, stateId: string, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/social/1/stream/streamId/user/me`
 */
export declare const getSocialMe: (tenantId: string, streamId: string, stateId: string, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/social/1/stream/streamId/follower`
 */
export declare const getSocialFollowers: (tenantId: string, streamId: string, stateId: string, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/social/1/stream/streamId?page=page&pageSize=pageSize`
 */
export declare const getSocialMessages: (tenantId: string, streamId: string, stateId: string, page: number, pageSize: number, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/social/1/stream/streamId/message`
 */
export declare const sendSocialMessage: (tenantId: string, streamId: string, stateId: string, request: any, authenticationToken: string) => JQueryXHR;
/**
 * POST to `/api/social/1/stream/streamId?follow=isFollowing`
 */
export declare const follow: (tenantId: string, streamId: string, stateId: string, isFollowing: boolean, authenticationToken: string) => JQueryXHR;
/**
 * GET at `/api/social/1/stream/streamId/user?name=name`
 */
export declare const getSocialUsers: (tenantId: string, streamId: string, stateId: string, name: string, authenticationToken: string) => JQueryXHR;
