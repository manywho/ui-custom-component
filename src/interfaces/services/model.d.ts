export interface INotification {
    timeout: number | string;
    message: string;
    type: string;
    dismissible: boolean;
    position: string;
}
/**
 * Parse the engine response into the model for this state from a `FORWARD` invoke request. This will setup the model
 * for things like: components, containers, outcomes, faults, votes, etc
 * @param engineInvokeResponse
 * @param flowKey
 */
export declare const parseEngineResponse: (engineInvokeResponse: any, flowKey: string) => void;
/**
 * Parse the engine response into the model for this state from a `SYNC` invoke request
 * @param response Response from `Ajax.invoke`
 * @param flowKey
 */
export declare const parseEngineSyncResponse: (response: any, flowKey: string) => void;
/**
 * Parse the navigation response from `Ajax.getNavigation` into the model for this state
 * @param id Id of the navigation configuration in the flow
 * @param response Navigation response returned by `Ajax.getNavigation`
 * @param flowKey
 * @param currentMapElementId
 */
export declare const parseNavigationResponse: (id: string, response: any, flowKey: string, currentMapElementId: string) => void;
/**
 * Get the label of the current page
 */
export declare const getLabel: (flowKey: string) => any;
/**
 * Get an ordered array of all the child models of a container
 */
export declare const getChildren: (containerId: string, flowKey: string) => any[];
/**
 * Get a container by id
 */
export declare const getContainer: (containerId: string, flowKey: string) => any;
/**
 * Get a component by id
 */
export declare const getComponent: (componentId: string, flowKey: string) => any;
/**
 * Get a component by name
 */
export declare const getComponentByName: (name: string, flowKey: string) => any;
/**
 * Get all the components
 */
export declare const getComponents: (flowKey: string) => any;
/**
 * Get an outcome by id
 */
export declare const getOutcome: (id: string, flowKey: string) => any;
/**
 * Get all the outcomes for a container / component
 * @param id Id of the component or container that the outcomes are associated with
 */
export declare const getOutcomes: (id: string, flowKey: string) => any[];
/**
 * Get currently active notifications for a given position
 * @param flowKey
 * @param position `center`, `left`, `right`
 */
export declare const getNotifications: (flowKey: string, position: string) => INotification[];
/**
 * Remove a notification
 */
export declare const removeNotification: (flowKey: string, notification: INotification) => void;
/**
 * Add a new notification
 */
export declare const addNotification: (flowKey: string, notification: INotification) => void;
/**
 * @ignore
 */
export declare const getSelectedNavigation: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const setSelectedNavigation: (navigationId: string, flowKey: string) => void;
/**
 * Get the model for a configured navigation by id
 */
export declare const getNavigation: (navigationId: string, flowKey: string) => any;
/**
 * Get the first navigation model configured for this flow
 */
export declare const getDefaultNavigationId: (flowKey: string) => string;
/**
 * Search the model for a matching container, component, outcome or navigation (in that order) for the given `id`
 */
export declare const getItem: (id: string, flowKey: string) => any;
/**
 * @ignore
 */
export declare const getInvokeType: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const getWaitMessage: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const getPreCommitStateValues: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const getStateValues: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const getExecutionLog: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const setExecutionLog: (flowKey: string, executionLog: any) => void;
/**
 * @hidden
 */
export declare const getHistory: (flowKey: string) => any;
/**
 * @hidden
 */
export declare const setHistory: (engineInvokeResponse: any, flowKey: string) => void;
/**
 * @hidden
 */
export declare const setHistorySelectedOutcome: (selectedOutcome: any, invokeType: string, flowKey: string) => void;
/**
 * @hidden
 */
export declare const popHistory: (mapElementId: string, flowKey: string) => void;
/**
 * Check if an item has the property `containerType`
 */
export declare const isContainer: (item: any) => boolean;
/**
 * Create a new empty model for this state
 */
export declare const initializeModel: (flowKey: string) => void;
/**
 * @ignore
 */
export declare const getAttributes: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const getParentStateId: (flowKey: string) => any;
/**
 * Remove the local cache of the model for this state
 */
export declare const deleteFlowModel: (flowKey: string) => void;
/**
 * @ignore
 */
export declare const getRootFaults: (flowKey: string) => any;
/**
 * Set this flow models `containers` property by iterating through the `containers` array merge with the matching container data in `data`
 */
export declare const setContainers: (flowKey: string, containers: any[], data: any, propertyName?: string) => void;
/**
 * Set this flow models `components` property by iterating through the `components` array merge with the matching container data in `data`
 */
export declare const setComponents: (flowKey: string, components: any[], data: any) => void;
/**
 * @ignore
 */
export declare const setAttributes: (flowKey: string, attributes: any) => void;
/**
 * @ignore
 */
export declare const setModal: (flowKey: string, modal: any) => void;
/**
 * @ignore
 */
export declare const getModal: (flowKey: string) => any;
