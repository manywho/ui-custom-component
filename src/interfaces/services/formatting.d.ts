/**
 * Set the initial culture to be used when formatting from the `window.navigator.language` or override by the `i18n.culture` setting
 * @param flowKey
 */
export declare const initialize: (flowKey: any) => void;
/**
 * Format a value using the defined format string. Currently supports datetimes and numbers only.
 * @param value The value to format
 * @param format Format string to apply to the value
 * @param contentType Type of the value as defined in the metadata e.g. `ContentString`
 * @param flowKey
 */
export declare const format: (value: string | number, format: string, contentType: string, flowKey: string) => string | number;
/**
 * Converts a .NET datetime format string into a MomentJS format string
 * @param format Format string to convert
 */
export declare const toMomentFormat: (format: string) => string;
/**
 * Format a datetime and return it as a string
 * @param dateTime DateTime to format
 * @param format MomentJS format string
 * @param flowKey
 */
export declare const dateTime: (dateTime: string, format: string, flowKey: string) => string;
/**
 * Format a number and return it as a string
 * @param value Number to format
 * @param format Format string, supported formats include e, E (scientifix); c, C (currency); and symbols as
 * documented here: http://numbrojs.com/format.html
 * @param flowKey
 */
export declare const number: (value: string | number, format: string, flowKey: string) => string;
