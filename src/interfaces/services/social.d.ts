/// <reference types="jquery" />
/**
 * Initialize the social stream by requesting `Ajax.getSocialMe` then `Ajax.getSocialMessages`, then render the feed
 */
export declare const initialize: (flowKey: string, streamId: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Get the currently active stream
 */
export declare const getStream: (flowKey: string) => any;
/**
 * Refresh the current page of messages via `Ajax.getSocialMessages` then display them in the feed
 */
export declare const refreshMessages: (flowKey: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Get the messages for this stream via `Ajax.getSocialMessages` then display them in the feed
 */
export declare const getMessages: (flowKey: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Send a message to the social stream
 * @param message Message content
 * @param repliedTo Id of the message thats being replied to (optional)
 * @param mentionedUsers @ mentioned users
 * @param attachments Files to be uploaded as part of the message
 */
export declare const sendMessage: (flowKey: string, message: string, repliedTo: string, mentionedUsers: any, attachments: any) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Display the loading indicator in the social feed, toggle follow status with `Ajax.follow` then re-render
 */
export declare const toggleFollow: (flowKey: string) => JQuery.Promise3<void, never, never, never, never, never, never, never, never>;
/**
 * Get the users for this stream via `Ajax.getUsers`, optionally filter by a specific name
 */
export declare const getUsers: (flowKey: string, name?: string) => JQueryXHR;
/**
 * Upload a file to the stream via `Ajax.uploadSocialFile`
 */
export declare const attachFiles: (flowKey: string, formData: FormData, onProgress: EventListenerOrEventListenerObject) => JQueryXHR;
/**
 * Remove locally cached data on the social stream for this state
 */
export declare const remove: (flowKey: string) => void;
