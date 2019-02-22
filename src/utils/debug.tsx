import * as React from 'react';
import { IComponentModel, IComponentProps } from '../interfaces';
import './debug.css';

const getModal = (model: IComponentModel, data: any, type: string) => (
    <div className="modal fade" id={`${model.id}-${type}`} tabIndex={-1} role="dialog" style={{ position: 'fixed' }}>
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title">{type} - {model.developerName}</h4>
                </div>
                <div className="modal-body">
                    <pre>{JSON.stringify(data, null, 4)}</pre>
                </div>
            </div>
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
                <button className="btn btn-link btn-sm" data-toggle="modal" data-target={`#${props.model.id}-model`}>Model</button>
                <button className="btn btn-link btn-sm" data-toggle="modal" data-target={`#${props.model.id}-state`}>State</button>
            </div>
            {React.createElement(Component, props)}
            {getModal(props.model, props.model, 'model')}
            {getModal(props.model, props.state, 'state')}
        </div>
    );
};
