import { IManywho, IObjectData } from '../interfaces';

declare const manywho: IManywho;

const get = (objectData: IObjectData, name: string): any => {
    const property = manywho.utils.getObjectDataProperty(objectData.properties, name);
    if (property) {
        if (property.objectData) {
            return property.objectData.map((item: IObjectData) => new Proxy(item, objectDataHandler));
        } else {
            return property.contentValue;
        }
    }

    if (name === 'getProperty') {
        return (propertyName: string) => {
            manywho.utils.getObjectDataProperty(objectData.properties, propertyName);
        };
    }

    if (name in objectData) {
        return (objectData as any)[name];
    }

    return null;
};

const set = (objectData: IObjectData, name: string, value: any): boolean => {
    const property = manywho.utils.getObjectDataProperty(objectData.properties, name);
    if (property) {
        if (Array.isArray(value)) {
            property.objectData = value;
        } else {
            property.contentValue = value;
        }

        return true;
    }

    if (name in objectData) {
        (objectData as any)[name] = value;
        return true;
    }

    return false;
};

export const objectDataHandler = {
    get,
    set,
};
