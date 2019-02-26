import * as React from 'react';
import { IComponentModel, IComponentProps } from '../interfaces';
import './debug.css';

const getModal = (model: IComponentModel, data: any, type: string) => (
    <div className="modal-debug" id={`${model.id}-${type}`} tabIndex={-1} role="dialog">
        <div>
            <a href="#" title="Close" className="modal-close">Close</a>
            <h4>{type} - {model.developerName}</h4>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    </div>
);

export const debugComponent = (
    Component: React.ComponentClass<IComponentProps> | React.FunctionComponent<IComponentProps>,
    props: IComponentProps,
) => {
    return (
        <div className="debug-component">
            <div>
                <span>{props.model.developerName}</span>
                <span>{props.model.id}</span>
                <a href={`#${props.model.id}-model`}>Model</a>
                <a href={`#${props.model.id}-state`}>State</a>
            </div>
            {React.createElement(Component, props)}
            {getModal(props.model, props.model, 'model')}
            {getModal(props.model, props.state, 'state')}
        </div>
    );
};
