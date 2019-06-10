// tslint:disable-next-line:no-reference-import
/// <reference types="react" />
/// <reference types="jquery" />
import * as React from 'react';
import { IComponentProps, IContainerProps } from '..';
/**
 * @hidden
 */
export declare const mixins: {};
/**
 * Enum of the supported content types
 */
export declare const contentTypes: {
    string: string;
    number: string;
    boolean: string;
    password: string;
    datetime: string;
    content: string;
    object: string;
    list: string;
};

type componentWrapper = (props: IComponentProps) => JSX.Element;
type containerWrapper = (props: IContainerProps) => JSX.Element;

/**
 * Register a React component, that can be fetched later by Name. Optionally provide aliases that will return the same component
 * @param name Name to register the component with
 * @param component
 * @param alias Extra names that can also be used to fetch the component later
 */
export declare const register: (
    name: string,
    component: typeof React.Component | React.FunctionComponent | componentWrapper,
    alias?: string[]) => void;
/**
 * Register a React component, the name will be prepended with `mw-`. An alias of `mw-items-container` will also be added
 * @param name
 * @param component
 */
export declare const registerItems: (name: string, component: typeof React.Component | React.FunctionComponent) => void;
/**
 * Add an alias for a name
 * @param alias
 * @param name Name of a previously registered component
 */
export declare const registerAlias: (alias: string, name: string) => void;
/**
 * Register a React component as a container, the name will be prepended with `mw-`
 * @param name
 * @param component
 */
export declare const registerContainer: (name: string, component: typeof React.Component | React.FunctionComponent | containerWrapper) => void;
/**
 * Get the previously registered component based on the models `componentType` or `containerType`
 * @param model
 */
export declare const get: (model: any) => any;
/**
 * Get the previously registered component by name
 * @param name Name of the component
 */
export declare const getByName: any;
/**
 * Transform the child models into the relevant components
 * @param children
 * @param id
 * @param flowKey
 */
export declare const getChildComponents: (children: any[], id: string, flowKey: string) => Array<React.DetailedReactHTMLElement<{
    flowKey: string;
    id: any;
    parentId: string;
    key: any;
}, HTMLElement>>;
/**
 * Transform the outcome models into outcome components
 * @param outcomes
 * @param flowKey
 */
export declare const getOutcomes: (outcomes: any[], flowKey: string) => any[];
/**
 * If the model `hasEvents = true` perform an `Engine.sync` then re-render the flow and `forceUpdate` on the component
 * @param component
 * @param model
 * @param flowKey
 * @param callback Callaback that is called after `Engine.sync` returns
 */
export declare const handleEvent: (component: React.Component<{}, {}> | React.StatelessComponent<{}>, model: any, flowKey: any, callback: () => void) => void;
/**
 * Get the ObjectData items from the model that match the selected ids
 * @param model
 * @param selectedIds The external ids of the selected items
 */
export declare const getSelectedRows: (model: any, selectedIds: string[]) => any[];
/**
 * Get the columns that have `isDisplayValue` set to true, or contain a property with a developer name of `isDisplayValue`
 * and a content value of `true`
 * @param columns
 */
export declare const getDisplayColumns: (columns: any[]) => any[];
/**
 * Add's a div element as the React target for the flow to the element targetted by the containerSelector setting
 * @param flowKey
 */
export declare const appendFlowContainer: (flowKey: string) => HTMLElement;
/**
 * Focus the first input or textarea control on larger screen devices i.e. width > 768px
 * @param flowKey
 */
export declare const focusInput: (flowKey: string) => void;
/**
 * Scrolls the window to the top of the flow container
 * @param flowKey
 */
export declare const scrollToTop: (flowKey: string) => void;
/**
 * Calls `Engine.move` then `Engine.flowOut` if the `outcome.isOut` is true. Will open a new window instead if the `uri`
 * or `uriTypeElementPropertyId` attributes are defined
 * @param outcome
 * @param objectData
 * @param flowKey
 * @returns Deffered result from `Engine.move`
 */
export declare const onOutcome: (outcome: any, objectData: any[], flowKey: string) => JQueryDeferred<any>;
