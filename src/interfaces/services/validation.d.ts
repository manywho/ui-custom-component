export interface IValidationResult {
    isValid: boolean;
    validationMessage: string;
}
/**
 * Check if the `validation.when` setting contains the `when` parameter, thus validation should be performed
 * @param invokeType When to validate: INITIALIZE, JOIN, MOVE, SYNC
 * @param flowKey
 */
export declare const shouldValidate: (invokeType: string, flowKey: string) => boolean;
/**
 * Validate the ContentValue or ObjectData for a given models local state. Custom regex validation will be
 * taken from the models `validation` attribute, and a custom message from the `validationMessage` attribute
 * @param model The model that will be validated
 * @param state The matching local state for the model that will be validated
 * @param flowKey
 */
export declare const validate: (model: any, state: any, flowKey: string) => IValidationResult;
/**
 * Validate a string against a regex and / or null check if required
 * @param value The string to validate
 * @param regex Regex to validate the string with.
 * @param message Custom validation message to be returned in an invalid response
 * @param isRequired Set to true to return an invalid response if the the value is null or empty
 * @param flowKey
 */
export declare const validateString: (value: string, regex: string, message: string, isRequired: boolean, flowKey: string) => IValidationResult;
/**
 * Validate a number against a regex and / or null check if required
 * @param value The number to validate
 * @param regex Regex to validate the number with. `toString()` will be called on the number first
 * @param message Custom validation message to be returned in an invalid response
 * @param isRequired Set to true to return an invalid response if the the value is null or empty
 * @param flowKey
 */
export declare const validateNumber: (value: any, regex: string, message: string, isRequired: boolean, flowKey: string) => IValidationResult;
/**
 * Validate a boolean
 * @param value The boolean to validate
 * @param message Custom validation message to be returned in an invalid response
 * @param isRequired Set to true to return an invalid response if the the value false
 * @param flowKey
 */
export declare const validateBoolean: (value: boolean, message: string, isRequired: boolean, flowKey: string) => IValidationResult;
/**
 * Only isRequired validation is currently supported for objects
 * @param value The object to validate
 * @param message Custom validation message to be returned in an invalid response
 * @param isRequired Set to true to return an invalid response if the the value is null or empty
 * @param flowKey
 */
export declare const validateObject: (value: object, message: string, isRequired: boolean, flowKey: string) => IValidationResult;
/**
 * Only isRequired validation is currently supported for lists
 * @param value The array to validate
 * @param message Custom validation message to be returned in an invalid response
 * @param isRequired Set to true to return an invalid response if the the value is null or empty
 * @param flowKey
 */
export declare const validateList: (value: object[], message: string, isRequired: boolean, flowKey: string) => IValidationResult;
/**
 * Scroll to the first invalid element based on the selector in the `validation.scroll.selector` setting. Defaults to `.has-error`
 * @param flowKey
 */
export declare const scrollToInvalidElement: (flowKey: string) => void;
/**
 * Add an invalid notification populated with the message from the `localization.validation.notification` setting
 * @param flowKey
 */
export declare const addNotification: (flowKey: string) => void;
