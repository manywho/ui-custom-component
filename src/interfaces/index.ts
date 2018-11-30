import { Logger, LogLevel } from 'loglevel';
import * as Ajax from './services/ajax';
import * as Authorization from './services/authorization';
import * as Callbacks from './services/callbacks';
import * as Collaboration from './services/collaboration';
import * as Component from './services/component';
import * as Connection from './services/connection';
import * as Engine from './services/engine';
import * as Formatting from './services/formatting';
import * as Json from './services/json';
import * as Model from './services/model';
import * as Settings from './services/settings';
import * as Social from './services/social';
import * as State from './services/state';
import * as Styling from './services/styling';
import * as Tours from './services/tours';
import * as Utils from './services/utils';
import * as Validation from './services/validation';

export interface IManywho {
    ajax: typeof Ajax;
    authorization: typeof Authorization;
    callbacks: typeof Callbacks;
    collaboration: typeof Collaboration;
    component: typeof Component;
    connection: typeof Connection;
    engine: typeof Engine;
    formatting: typeof Formatting;
    kson: typeof Json;
    model: typeof Model;
    settings: typeof Settings;
    social: typeof Social;
    state: typeof State;
    styling: typeof Styling;
    tours: typeof Tours;
    utils: typeof Utils;
    validation: typeof Validation;
    log: Logger;
}

export interface IObjectData {
    developerName: string;
    externalId: string;
    internalId: string;
    isSelected: boolean;
    order: number;
    properties: [
        {
            contentFormat: string | null;
            contentType: string;
            contentValue: string | number | boolean | null;
            developerName: string;
            objectData: IObjectData[] | null;
            typeElementId: string | null;
            typeElementPropertyId: string;
        }
    ];
}

interface IObjectDataType {
    developerName: string;
    properties: [
        {
            developerName: string;
        }
    ];
}

interface IAuthurizationContext {
    users: [
        {
            authenticationId: string;
            attribute: string;
            runningUser: boolean
        }
    ];
    groups: [
        {
            authenticationId: string;
            attribute: string;
        }
    ];
    runningAuthenticationId: string;
    globalAuthenticationType: string;
}

interface IConfigurationValue {
    valueElementId: string;
    typeElementId: string | null;
    typeElementPropertyId: string | null;
    developerName: string;
    typeElementDeveloperName: string | null;
    typeElementPropertyDeveloperName: string | null;
    contentValue: string;
    objectData: IObjectData[];
}

interface ICulture {
    id: string;
    developerName: string;
    developerSummary: string;
    brand: string;
    language: string;
    country: string;
    variant: string;
}

interface IListFilterWhere {
    columnName: string;
    criteriaType: CriteriaType;
    value: string;
    contentValue: string;
    objectData: IObjectData[];
}

export interface IListFilter {
    id: string;
    comparisonType: ComparisonType;
    filterByProvidedObjects: boolean;
    orderByPropertyDeveloperName: string;
    orderByDirectionType: OrderByDirectionType;
    orderBy: [
        {
            columnName: string;
            direction: OrderByDirectionType;
        }
    ];
    limit: number;
    offset: number;
    search: string;
    searchCriteria: [
        {
            columnName: string;
        }
    ];
    listFilters: IListFilter[];
    where: IListFilterWhere[];
}

export interface IObjectDataRequest {
    authorization: IAuthurizationContext;
    command: {
        commandType: string;
        properties: any;
    };
    configurationValues: IConfigurationValue[];
    culture: ICulture;
    listFilter: IListFilter;
    objectDataType: IObjectDataType;
    stateId: string;
    token: string | null;
    typeElementBindingId: string;
}

interface IColumn {
    componentType: string | null;
    contentFormat: string | null;
    contentType: string;
    developerName: string;
    isDisplayValue: boolean;
    isEditable: boolean;
    label: string;
    order: number;
    typeElementPropertyId: string;
    typeElementPropertyToDisplayId: string;
}

export interface IContainerModel extends IComponentIdProps {
    attributes: any;
    containerType: string;
    developerName: string;
    label: string;
    order: number;
    pageContainerResponses: IContainerModel[];
    isEditable: boolean;
    isEnabled: boolean;
    isVisible: boolean;
    tags: any[];
}

export interface IComponentModel {
    attributes: any;
    id: string;
    isValid: boolean;
    validationMessage: string;
    contentValue: string | number | boolean | null;
    objectData: IObjectData[] | null;
    label: string;
    isRequired: boolean;
    isVisible: boolean;
    isEditable: boolean;
    isSearchable: boolean;
    isMultiSelect: boolean;
    isEnabled: boolean;
    maxSize: number;
    order: number;
    size: number;
    width: number;
    height: number;
    helpInfo: string;
    hintValue: string;
    hasEvents: boolean;
    columns: IColumn[];
    contentType: string;
    componentType: string;
    developerName: string;
    tags: any[] | null;
    objectDataRequest: IObjectDataRequest | null;
    imageUri: string | null;
    fileDataRequest: any | null;
}

export enum PageActionBindingType {
    Save = 'SAVE',
    PartialSave = 'PARTIAL_SAVE',
    NoSave = 'NO_SAVE',
}

export enum PageActionType {
    New = 'NEW',
    Query = 'QUERY',
    Insert = 'INSERT',
    Update = 'UPDATE',
    Upsert = 'UPSERT',
    Delete = 'DELETE',
    Remove = 'REMOVE',
    Add = 'ADD',
    Edit = 'EDIT',
    Next = 'NEXT',
    Back = 'BACK',
    Done = 'DONE',
    Save = 'SAVE',
    Cancel = 'CANCEL',
    Apply = 'APPLY',
    Import = 'IMPORT',
    Close = 'CLOSE',
    Open = 'OPEN',
    Submit = 'SUBMIT',
    Escalate = 'ESCALATE',
    Reject = 'REJECT',
    Delegate = 'DELEGATE',
}

export enum OrderByDirectionType {
    Ascending = 'ASC',
    Descending = 'DESC',
}

export enum ComparisonType {
    And = 'AND',
    Or = 'OR',
}

export enum CriteriaType {
    Equal = 'EQUAL',
    AllEqual = 'ALL_EQUAL',
    AnyEqual = 'ANY_EQUAL',
    NotEqual = 'NOT_EQUAL',
    GreaterThan = 'GREATER_THAN',
    GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
    LessThan = 'GREATER_THAN',
    LessThanOrEqual = 'GREATER_THAN_OR_EQUAL',
    Contains = 'CONTAINS',
    StartsWith = 'STARTS_WITH',
    EndsWith = 'ENDS_WITH',
    IsEmpty = 'IS_EMPTY',
}

export interface IOutcome {
    attributes: any;
    developerName: string;
    id: string;
    isBulkAction: boolean;
    isOut: boolean;
    label: string;
    order: number;
    pageActionBindingType: PageActionBindingType;
    pageActionType: PageActionType;
    pageObjectBindingId: string;
}

export interface IComponentIdProps {
    flowKey: string;
    id: string;
    parentId?: string;
    key?: string;
}

interface IComponentPropsBase<T> extends IComponentIdProps {
    model: T;
    outcomes: Array<React.ComponentElement<{id: string, flowKey: string}, any>> | null;
    className: string[] | null;
}

export interface IComponentProps extends IComponentPropsBase<IComponentModel> {
    state: State.IComponentValue | null;
    onEvent: (callback?: () => void) => void;
    onChange: (value: string | number | boolean | null, validate?: boolean, push?: boolean) => void;
    getContentValue: <T extends string | number | boolean>() => T;
}

export interface IContainerProps extends IComponentPropsBase<IContainerModel> {
    children: Array<React.DetailedReactHTMLElement<any, any>>;
}

export interface IOutcomeProps {
    id: string;
    flowKey: string;
    objectData?: any[];
}
