import * as Validation from './validation';
/**
 * Reset the local state of each component defined in the models. Optionally perform validation on each model
 */
export declare const refreshComponents: (models: any, invokeType: string, flowKey: string) => void;
/**
 * Return the users current location. Updated with `setLocation`
 */
export declare const getLocation: (flowKey: string) => any;
/**
 * Set the current location to the running users `navigator.geolocation` if the `location.isTrackingEnabled` setting is true
 */
export declare const setLocation: (flowKey: string) => void;
/**
 * Set the `location.time` property specifically based on the running users time. Optionally override timezone using the `i18n.timezoneOffset` setting
 */
export declare const setUserTime: (flowKey: string) => void;
/**
 * Get the state of a specific component
 * @param id Id of the component
 * @param flowKey
 */
export declare const getComponent: (id: string, flowKey: string) => IComponentValue;
/**
 * Get the state of every component
 * @param flowKey
 */
export declare const getComponents: (flowKey: string) => IComponentValue[];
export interface IComponentValue {
    objectData?: any[];
    contentValue?: string | number | boolean;
    loading?: {
        message: string;
    };
    error?: {
        message: string;
    };
    isValid?: boolean;
    validationMessage?: string;
}
/**
 * Update the state of a single component. If clientside validation is enabled the new state will be validated first
 * @param push Set to true to call `Collaboration.push` after updating the component
 */
export declare const setComponent: (id: string, value: IComponentValue, flowKey: string, push: boolean) => void;
/**
 * Overwrite the existing state of every component
 * @param values The state of each component
 * @param flowKey
 */
export declare const setComponents: (values: any, flowKey: string) => void;
export interface IPageComponentInputResponseRequest {
    pageComponentId: string;
    contentValue: string | number | boolean;
    objectData: any[];
}
/**
 * Transform the current components local state into an array of IPageComponentInputResponseRequest
 */
export declare const getPageComponentInputResponseRequests: (flowKey: string) => IPageComponentInputResponseRequest[];
/**
 * Get the validation result for a components local state
 * @param id The component id
 */
export declare const isValid: (id: string, flowKey: string) => Validation.IValidationResult;
/**
 * Call `isValid` on every components local state. Returns true if every component is valid
 */
export declare const isAllValid: (flowKey: string) => boolean;
/**
 * Update the id, token, and map element id of the current state
 * @param id The state id
 * @param mapElementId Id of the map element the state is currently on
 * @param flowKey
 */
export declare const setState: (id: string, token: string, mapElementId: string, flowKey: string) => void;
/**
 * @ignore
 */
export declare const getState: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const setOptions: (flowOptions: any, flowKey: string) => void;
/**
 * @ignore
 */
export declare const getOptions: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const setLogin: (loginData: any, flowKey: string) => void;
/**
 * @ignore
 */
export declare const getLogin: (flowKey: string) => any;
/**
 * Update the active authentication token for the current user
 */
export declare const setAuthenticationToken: (token: string, flowKey: string) => void;
/**
 * Get the authentication token for the current user
 */
export declare const getAuthenticationToken: (flowKey: string) => string;
/**
 * @ignore
 */
export declare const getSessionData: (flowKey: string) => any;
/**
 * @ignore
 */
export declare const setSessionData: (id: string, url: string, flowKey: string) => void;
/**
 * Set the `loading` property of the component's state to `data`
 * @param componentId
 * @param data
 * @param flowKey
 */
export declare const setComponentLoading: (componentId: string, data: any, flowKey: string) => void;
/**
 * Set the `error` property on a component to an object with `message` and `id` properties.
 * If the `error` argument is a string it will populate the `message` property
 */
export declare const setComponentError: (componentId: string, error: any, flowKey: string) => void;
/**
 * Remove the local state for this flow
 */
export declare const remove: (flowKey: string) => void;
