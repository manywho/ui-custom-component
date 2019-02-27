import * as React from 'react';
import {
    IComponentIdProps,
    IComponentModel,
    IComponentProps,
    IContainerModel,
    IContainerProps,
    IManywho,
    IObjectData,
    IObjectDataProperty,
} from '../interfaces';
import { debugComponent } from './debug';
import { addProperties } from './objectData';
import { objectDataHandler } from './proxy';

const dedent: any = require('dedent');

declare const manywho: IManywho;

const getProps = (id: string, parentId: string, flowKey: string) => {
    const model = manywho.model.getItem(id, flowKey);
    const outcomes = manywho.model.getOutcomes(id, flowKey);

    return {
        className: manywho.styling.getClasses(parentId, id, model.componentType || model.containerType, flowKey),
        flowKey,
        id,
        model,
        outcomes: outcomes && outcomes
            .map((outcome) => React.createElement(manywho.component.getByName('outcome'), { id: outcome.id, flowKey})),
        parentId,
    };
};

export const container = (
    Container: React.ComponentClass<IContainerProps> | React.FunctionComponent<IContainerProps>,
) => {
    return ({ id, parentId, flowKey }: IComponentIdProps) => {
        const model: IContainerModel = manywho.model.getContainer(id, flowKey);
        const children = manywho.model.getChildren(id, flowKey);

        const props: IContainerProps = {
            ...getProps(id, parentId, flowKey),
            children: manywho.component.getChildComponents(children, id, flowKey),
        };

        manywho.log.debug(dedent`
            Rendering Container
            Name: ${model.developerName}
            Type: ${model.containerType}
            Order: ${model.order}
        `);

        return React.createElement(Container, props);
    };
};

export const component = (
    Component: React.ComponentClass<IComponentProps> | React.FunctionComponent<IComponentProps>,
    isDebugRenderingEnabled: boolean = false,
) => {
    return ({ id, parentId, flowKey }: IComponentIdProps) => {
        const model: IComponentModel = manywho.model.getComponent(id, flowKey);

        const onChange = (value: string | number | boolean | null, validate: boolean = true, push: boolean = true) => {
            manywho.state.setComponent(id, { contentValue: value }, flowKey, push);

            if (validate) {
                const state = manywho.state.getComponent(id, flowKey);
                manywho.state.setComponent(
                    id,
                    manywho.validation.validate(model, state, flowKey),
                    flowKey,
                    push,
                );
            }
        };

        const onEvent = (callback?: () => void) => {
            manywho.component.handleEvent(
                this,
                model,
                flowKey,
                callback,
            );
        };

        const getContentValue = <T extends string | number | boolean>() => {
            const state = manywho.state.getComponent(id, flowKey);

            return (state && state.contentValue !== undefined ?
                state.contentValue :
                model.contentValue) as T;
        };

        const getObjectData = (item: IComponentModel | IObjectDataProperty): any[] => {
            return item.objectData ?
                item.objectData.map((objectData: IObjectData) => addProperties(objectData))
                : null;
        };

        const getAttribute = (name: string): string | number | boolean | null => {
            if (model && model.attributes) {
                const key = Object
                    .keys(model.attributes)
                    .filter((item) => manywho.utils.isEqual(item, name, true))[0];

                if (key) {
                    return model.attributes[key];
                }
            }

            return null;
        };

        const props: IComponentProps = {
            ...getProps(id, parentId, flowKey),
            getAttribute,
            getContentValue,
            getObjectData,
            onChange,
            onEvent,
            state: manywho.state.getComponent(id, flowKey),
        };

        manywho.log.debug(dedent`
            Rendering Component
            Name: ${model.developerName}
            Type: ${model.componentType}
            Order: ${model.order}
        `);

        if (isDebugRenderingEnabled && manywho.settings.isDebugEnabled(flowKey)) {
            return debugComponent(Component, props);
        } else {
            return React.createElement(Component, props);
        }
    };
};
