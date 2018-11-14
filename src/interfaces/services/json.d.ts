/**
 * A collection of helpers for generating request bodies for the various ajax requests
 */
/**
 * @ignore
 */
export declare const generateFlowInputs: (inputsData: any) => any;
export interface IFlowId {
    id: string;
    versionId?: string;
    versionid?: string;
}
/**
  * @ignore
  */
export declare const generateInitializationRequest: (flowId: IFlowId, stateId?: string, annotations?: any, inputs?: any[], playerUrl?: string, joinUrl?: string, mode?: string, reportingMode?: string) => {
    flowId: {
        id: string;
        versionId: string;
    };
    stateId: string;
    annotations: any;
    inputs: any[];
    playerUrl: string;
    joinPlayerUrl: string;
    mode: string;
    reportingMode: string;
};
/**
  * @ignore
  */
export declare const generateInvokeRequest: (stateData: any, invokeType: string, selectedOutcomeId?: string, selectedMapElementId?: string, pageComponentInputResponses?: any[], navigationElementId?: string, selectedNavigationElementId?: string, annotations?: any, location?: any, mode?: string) => {
    invokeType: string;
    stateId: any;
    stateToken: any;
    currentMapElementId: any;
    annotations: any;
    geoLocation: any;
    mapElementInvokeRequest: {
        pageRequest: {
            pageComponentInputResponses: any[];
        };
        selectedOutcomeId: string;
    };
    mode: string;
    selectedMapElementId: string;
    navigationElementId: string;
    selectedNavigationElementId: string;
};
/**
  * @ignore
  */
export declare const generateNavigateRequest: (stateData: any, navigationId: string, navigationElementId: string, mapElementId: string, pageComponentInputResponses?: any[], annotations?: any, location?: any) => {
    stateId: any;
    stateToken: any;
    currentMapElementId: any;
    invokeType: string;
    navigationElementId: string;
    selectedMapElementId: string;
    selectedNavigationItemId: string;
    annotations: any;
    geoLocation: any;
    mapElementInvokeRequest: {
        pageRequest: {
            pageComponentInputResponses: any[];
        };
        selectedOutcomeId: any;
    };
};
/**
  * @ignore
  */
export declare const generateSessionRequest: (sessionId: string, sessionUrl: string, loginUrl: string, username?: string, password?: string, token?: string) => {
    loginUrl: string;
    sessionUrl: string;
    sessionToken: string;
    username: string;
    password: string;
    token: string;
};
