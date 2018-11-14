/// <reference types="jquery" />
/**
 * Return `value` parsed as a number or zero
 */
export declare const getNumber: (value: any) => number;
/**
 * Update the url in the browser to the join url
 */
export declare const replaceBrowserUrl: (response: any) => void;
/**
 * Stolen from: http://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
 */
export declare const parseQueryString: (queryString: string) => any;
/**
 * @hidden
 */
export declare const extend: (mergedObject: any, objects: any, isDeep?: boolean) => any;
/**
 * @hidden
 */
export declare const extendObjectData: (mergedObjectData: any[], objectData: any[]) => any[];
/**
 * Check if a string is `null` or only contains whitespace
 */
export declare const isNullOrWhitespace: (value: string) => boolean;
/**
 * Check if a value is `null` or `undefined`
 */
export declare const isNullOrUndefined: (value: any) => boolean;
/**
 * Check if a string is `null` or ""
 */
export declare const isNullOrEmpty: (value: string) => boolean;
/**
 * Check equality for two strings
 */
export declare const isEqual: (value1: string, value2: string, ignoreCase: boolean) => boolean;
/**
 * Returns an array with an entry for each property value of the passed in object
 */
export declare const convertToArray: (obj: any) => any[];
/**
 * Check if an array contains item where the `key` property is equal to `id`
 */
export declare const contains: (collection: any[], id: string, key: string) => boolean;
/**
 * Get an item from an array where the `key` property of the item is equal to `id`
 */
export declare const get: (collection: any[], id: string, key: string) => any;
/**
 * @hidden
 */
export declare const getAll: (map: any, id: string, key: string) => any[];
/**
 * Construct a new flow key
 */
export declare const getFlowKey: (tenantId: string, flowId: string, flowVersionId: string, stateId: string, element: string) => any;
/**
 * Get a key in the format of `tenantid_stateid` derived from the `flowKey`
 */
export declare const getLookUpKey: (flowKey: string) => string;
/**
 * Get the `element` from a flow key
 */
export declare const extractElement: (flowKey: string) => string;
/**
 * Get the `tenant id` from a flow key
 */
export declare const extractTenantId: (flowKey: string) => string;
/**
 * Get the `flow id` from a flow key
 */
export declare const extractFlowId: (flowKey: string) => string;
/**
 * Get the `flow version id` from a flow key
 */
export declare const extractFlowVersionId: (flowKey: string) => string;
/**
 * Get the `state id` from a flow key
 */
export declare const extractStateId: (flowKey: string) => string;
/**
 * @hidden
 */
export declare const removeLoadingIndicator: (id: string) => void;
/**
 * Check if the flow is running in an embedded scenario by checking if the `documentElement` has the `manywho` class applied
 */
export declare const isEmbedded: () => boolean;
/**
 * Returns true if the `clientWidth` is smaller than 768px
 */
export declare const isSmallScreen: (flowKey: any) => boolean;
/**
 * Stolen from here: http://stackoverflow.com/questions/8817394/javascript-get-deep-value-from-object-by-passing-path-to-it-as-string
 */
export declare const getValueByPath: (obj: any, path: string) => any;
/**
 * Unmount the flow from the DOM then remove the containing element
 */
export declare const removeFlowFromDOM: (flowKey: any) => void;
/**
 * Returns the property where its `developerName` is equal to the `propertyName` argument
 */
export declare const getObjectDataProperty: (properties: any[], propertyName: string) => any;
/**
 * Set the `contentValue` of a property that matches the `propertyName`
 */
export declare const setObjectDataProperty: (properties: any[], propertyName: string, value: string | number | boolean) => void;
/**
 * Check if the models objectdata is empty
 */
export declare const isEmptyObjectData: (model: any) => boolean;
/**
 * Returns true if the objectdata is a single item and all of its properties content values are null or whitespace
 */
export declare const isPlaceholderObjectData: (objectData: any[]) => boolean;
/**
 * Stolen from: https://github.com/johndugan/javascript-debounce/blob/master/debounce.js
 */
export declare const debounce: (func: Function, wait: number, immediate: boolean) => () => void;
/**
 * Remove all traces of the flow from the model, settings, state, social, callbacks and DOM. Then inform collaboration the user has left.
 */
export declare const removeFlow: (flowKey: string) => void;
/**
 * Stolen from: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export declare const guid: () => string;
/**
 * Stolen from: https://github.com/soundcloud/jquery-whenall
 */
export declare const whenAll: (deferreds: JQueryDeferred<any[]>[]) => JQueryDeferred<any>;
