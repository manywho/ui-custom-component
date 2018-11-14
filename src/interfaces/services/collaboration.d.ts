/**
 * Open a websocket connection to the collaboration server endpoint, as defined in the `collaboration.uri` setting
 * @param flowKey
 */
export declare const initialize: (flowKey: string) => void;
/**
 * Has `initialize` been called for this state
 */
export declare const isInitialized: (flowKey: string) => boolean;
/**
 * Set `isEnabled` to true for this state, if we have initialized a socket yet then `initialize` will also be called
 * @param flowKey
 */
export declare const enable: (flowKey: string) => void;
/**
 * Set `isEnabled` to false for this state
 */
export declare const disable: (flowKey: string) => void;
/**
 * Emit a `join` event to the collaboration server, then call `getValues`
 */
export declare const join: (user: any, flowKey: any) => void;
/**
 * Emit a `left` event to the collaboration server
 */
export declare const leave: (user: any, flowKey: string) => void;
/**
 * Emit a `change` event to the collaboration server
 */
export declare const push: (id: string, values: any, flowKey: string) => void;
/**
 * Emit a `sync` event to the collaboration server
 */
export declare const sync: (flowKey: string) => void;
/**
 * Emit a `move` event to the collaboration server
 */
export declare const move: (flowKey: string) => void;
/**
 * Emit a `flowOut` event to the collaboration server
 */
export declare const flowOut: (flowKey: string, stateId: string, subFlowKey: string) => void;
/**
 * Emit a `returnToParent` event to the collaboration server
 */
export declare const returnToParent: (flowKey: string, parentStateId: string) => void;
/**
 * Emit a `getValues` event to the collaboration server
 */
export declare const getValues: (flowKey: string) => void;
/**
 * Emit a `syncFeed` event to the collaboration server
 */
export declare const syncFeed: (flowKey: string) => void;
/**
 * Remove all local data about the collaboration state
 * @param flowKey
 */
export declare const remove: (flowKey: string) => void;
