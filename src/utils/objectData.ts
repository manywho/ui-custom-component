import { IManywho, IObjectData, IObjectDataProperty } from '../interfaces';
import { contentTypes } from '../interfaces/services/component';

declare const manywho: IManywho;

const objectDataProperties = ['developerName', 'externalId', 'internalId', 'properties', 'isSelected', 'order'];

export const removeProperties = (objectData: any[]): IObjectData[] => {
    return objectData.map((item: any) => {
        Object.keys(item)
            .filter((key: string) => objectDataProperties.indexOf(key) === -1)
            .forEach((key: string) => delete item[key]);

        if (item.properties) {
            item.properties = item.properties.map((property: IObjectDataProperty) => {
                if (property.objectData) {
                    property.objectData = removeProperties(property.objectData);
                }
                return property;
            });
        }

        return item;
    });
};

export const addProperties = (objectData: IObjectData): IObjectData => {
    objectData.properties.forEach((property) => {

        if (!objectData.hasOwnProperty(property.developerName)) {

            Object.defineProperty(objectData, property.developerName, {
                configurable: true,
                enumerable: true,
                get: () => {
                    if (manywho.utils.isEqual(property.contentType, 'ContentObject', true) || manywho.utils.isEqual(property.contentType, 'ContentList', true)) {
                        return (property.objectData || []).map((item: IObjectData) => addProperties(item));
                    } else {
                        return property.contentValue;
                    }
                },
                set: (newValue) => {
                    if (Array.isArray(newValue)) {
                        property.objectData = removeProperties(newValue);
                    } else if (newValue === null || newValue === undefined) {
                        property.objectData = newValue;
                        property.contentValue = newValue;
                    } else {
                        property.contentValue = newValue;
                    }
                },
            });
        }
    });

    return objectData;
};
