export interface ICallback {
    type: string;
    execute: Function;
    name?: string;
    mapElement?: string;
    args?: any[];
    flowKey?: string;
    repeat?: boolean;
}
/**
 * Register a callback to be executed later
 * @param flowKey
 * @param options
 */
export declare const register: (flowKey: string, options: ICallback) => void;
/**
 * Execute a previously registered callback if a type & name are provided they will be checked against the registered callbacks first (in that order)
 * @param flowKey
 * @param type The type of context that callbacks are being executed in. Generally this is either the InvokeType in the invoke response
 * from Boomi Flow e.g. FORWARD, WAIT, DONE, etc
 * @param name The name of the callback to execute
 * @param mapElementId The Map Element Id of the callback to execute. During normal flow execution this will be populated by the
 * currentMapElementId from the invoke response
 * @param args Arguments to pass to the callback. During normal flow execution this will be the invoke response itself
 */
export declare const execute: (flowKey: string, type: string, name: string, mapElementId: string, args: any[]) => void;
/**
 * Remove all callbacks
 * @param flowKey
 */
export declare const remove: (flowKey: string) => void;
