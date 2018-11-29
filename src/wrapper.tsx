import * as React from 'react';
import {
    IComponentIdProps,
    IComponentModel,
    IComponentProps,
    IContainerModel,
    IContainerProps,
    IManywho,
} from './interfaces';

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
) => {
    return ({ id, parentId, flowKey }: IComponentIdProps) => {
        const model: IComponentModel = manywho.model.getComponent(id, flowKey);

        const props: IComponentProps = {
            ...getProps(id, parentId, flowKey),
            state: manywho.state.getComponent(id, flowKey),
        };

        manywho.log.debug(dedent`
            Rendering Component
            Name: ${model.developerName}
            Type: ${model.componentType}
            Order: ${model.order}
        `);

        return React.createElement(Component, props);
    };
};
