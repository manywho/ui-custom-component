/**
 * Get an array of class names that were previously registered. Also includes classes from the `classes` attribute
 * @param parentId Id of the parent container
 * @param id Id of the target component, container or outcome
 * @param type Adds a default class of this type prefixed with `mw-` .e.g `mw-input` for an input type
 */
export declare const getClasses: (parentId: string, id: string, type: string, flowKey: string) => string[];
/**
 * Register class names for a specific container type, these are returned from `getClasses`
 * @param containerType Type name of the container as it appears in the metadata e.g. `VERTICAL_FLOW`
 * @param classes Class names to include with this container type
 */
export declare const registerContainer: (containerType: string, classes: string | Function | string[]) => void;
/**
 * Register class names for a specific component type, these are returned from `getClasses`
 * @param componentType Type name of the component as it appears in the metadata e.g. `input`
 * @param classes Class names to include with this component type
 */
export declare const registerComponent: (componentType: string, classes: string | Function | string[]) => void;
