/**
 * Initialize the default settings and provide any custom settings or overrides
 * @param custom Custom settings to append to or override the default settings
 * @param handlers Custom event handlers to append to or override the default event handlers
 */
export declare const initialize: (custom?: any, handlers?: any) => any;
/**
 * Intialize settings for a specific flow and provide and custom settings or overrides
 * @param settings Custom settings that are specific to this flow execution (based on the flowKey)
 * @param flowKey
 */
export declare const initializeFlow: (settings: any, flowKey: string) => void;
/**
 * Get the value of a specific setting. Checks global settings first, then flow specific settings (if the flowKey parameter is specified)
 * @param path The nested path of the flow specific setting to retrieve e.g. `formatting.isEnabled`
 * @param flowKey
 * @param defaultValue Value to return if no matching setting can be found
 */
export declare const global: (path: string, flowKey?: string, defaultValue?: any) => any;
/**
 * Get a flow specific setting
 * @param path The nested path of the flow specific setting to retrieve e.g. `formatting.isEnabled`
 * @param flowKey
 */
export declare const flow: (path: string, flowKey: string) => any;
/**
 * Get an event specific setting
 * @param path The nested path of the event specific setting to retrieve e.g. `invoke.done`
 */
export declare const event: (path: string) => any;
/**
 * Get a theme specific setting
 * @param path The nested path of the theme specific setting to retrieve
 */
export declare const theme: (path: string) => any;
/**
 * Returns true if the execution mode of the flow is set to DEBUG or DEBUG_STEPTHROUGH. Set the value parameter to true to enable debug mode
 * @param flowKey
 * @param value True to set the debug mode to "DEBUG"
 */
export declare const isDebugEnabled: (flowKey: string, value?: boolean) => boolean;
/**
 * Removes custom flow settings based on the flowkey
 * @param flowKey
 */
export declare const remove: (flowKey: string) => void;
