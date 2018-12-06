import { IManywho } from './interfaces';

declare const manywho: IManywho;

export function getClasses(model: any) {
    if (model.attributes && !manywho.utils.isNullOrWhitespace(model.attributes.classes)) {
        return [model.attributes.classes];
    }

    return [];
}
