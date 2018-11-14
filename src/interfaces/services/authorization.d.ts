import * as Callbacks from './callbacks';
/**
 * @hidden
 */
export declare const setAuthenticationToken: (authenticationToken: any, flowKey: any) => void;
/**
 * Determine if the running user is authorized based on the response from the platform
 * @param response Response from `Ajax.initialize`, `Ajax.join` or `Ajax.invoke`
 * @param flowKey
 */
export declare const isAuthorized: (response: any, flowKey: string) => boolean;
/**
 * Redirect to a provided OAuth1, OAuth2 or SAML url, or display the login dialog component
 * @param response Response from `Ajax.join` or `Ajax.invoke`
 * @param flowKey
 * @param onAuthenticated Callback after the running user has successfully authenticated using the Login dialog.
 * This does not get called when authenticated with OAuth2 or SAML.
 */
export declare const invokeAuthorization: (response: any, flowKey: any, onAuthenticated: Callbacks.ICallback) => void;
/**
 * Check the running users authentication (token & url) with a 3rd party service
 * @param loginUrl Url of the 3rd party service that the running users session information will be sent to
 * @param flowKey
 * @param onAuthenticated Callback with the response from `Ajax.sessionAuthentication`
 */
export declare const authorizeBySession: (loginUrl: string, flowKey: string, onAuthenticated: Callbacks.ICallback) => void;
