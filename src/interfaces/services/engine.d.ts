/// <reference types="jquery" />
/**
 * Intialize a new state of a flow (or join an existing state if the `stateId` is specified). If the user is not
 * authenticated and the flow requires authentication a login dialog will be displayed or the user will be redirected to an OAUTH2 or SAML url.
 * The flow will then be rendered into the DOm
 */
export declare const initialize: (tenantId: string, flowId: string, flowVersionId: string, container: string, stateId: string, authenticationToken: string, options: any, isInitializing: string | boolean) => any;
/**
 * Invoke with a `FORWARD` down a specified outcome
 */
export declare const move: (outcome: any, flowKey: string) => any;
/**
 * Flow out to another flow, remove this flow from the DOM then re-render the new flow
 */
export declare const flowOut: (outcome: any, flowKey: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Re-join the parent state and remove this flow from the DOM
 */
export declare const returnToParent: (flowKey: string, parentStateId: string) => JQueryDeferred<any>;
/**
 * Invoke a `SYNC` with the platform to get the latest version of the state then re-render
 */
export declare const sync: (flowKey: string) => JQuery.Promise3<any, never, never, never, never, never, never, never, never>;
/**
 * Move the state to a specific map element as defined by a navigation item specified in the flow
 */
export declare const navigate: (navigationId: string, navigationElementId: string, mapElementId: string, flowKey: string) => JQueryDeferred<any>;
/**
 * Join an existing state and render it into a new container
 */
export declare const join: (tenantId: string, flowId: string, flowVersionId: string, container: string, stateId: string, authenticationToken: string, options: any) => JQueryDeferred<any>;
/**
 * Set the components loading status, execute the objectdata request, update the components local state with the response then re-render
 * @param id The id of the component this objectdata request is being requested by
 * @param limit Number of results to return
 * @param search Search string to apply to the list filter
 * @param orderBy Property name to order results by
 * @param orderByDirection ASC or DESC
 * @param page Page offset for the list filter
 */
export declare const objectDataRequest: (id: string, request: any, flowKey: string, limit: number, search?: string, orderBy?: string, orderByDirection?: string, page?: number) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Set the components loading status, execute a file data request, update the components local state with the response then re-render
 * @param id The id of the component this filedata request is being requested by
 * @param limit Number of results to return
 * @param search Search string to apply to the list filter
 * @param orderBy Property name to order results by
 * @param orderByDirection ASC or DESC
 * @param page Page offset for the list filter
 */
export declare const fileDataRequest: (id: string, request: any, flowKey: string, limit: number, search?: string, orderBy?: string, orderByDirection?: string, page?: number) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Toggle the debug setting and re-render
 */
export declare const toggleDebug: (flowKey: string) => void;
/**
 * Parse the platform response using the `responseParser` and update the local state. If the response status is WAIT or STATUS
 * then kickoff an `Engine.ping`
 */
export declare const parseResponse: (response: any, responseParser: (model: any, response: any, flowKey: string) => void, invokeType: string, flowKey: string) => void;
/**
 * Call `Ajax.ping` on a success re-join the flow with `Engine.join` otherwise set a timeout and call `ping` again in 10 seconds
 */
export declare const ping: (flowKey: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Re-render the flow by calling `ReactDOM.render`
 */
export declare const render: (flowKey: string) => void;
