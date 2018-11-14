import * as Ajax from './services/ajax';
import * as Authorization from './services/authorization';
import * as Callbacks from './services/callbacks';
import * as Collaboration from './services/collaboration';
import * as Component from './services/component';
import * as Connection from './services/connection';
import * as Engine from './services/engine';
import * as Formatting from './services/formatting';
import * as Json from './services/json';
import * as Model from './services/model';
import * as Settings from './services/settings';
import * as Social from './services/social';
import * as State from './services/state';
import * as Styling from './services/styling';
import * as Tours from './services/tours';
import * as Utils from './services/utils';
import * as Validation from './services/validation';

export interface IManywho {
    ajax: typeof Ajax;
    authorization: typeof Authorization;
    callbacks: typeof Callbacks;
    collaboration: typeof Collaboration;
    component: typeof Component;
    connection: typeof Connection;
    engine: typeof Engine;
    formatting: typeof Formatting;
    kson: typeof Json;
    model: typeof Model;
    settings: typeof Settings;
    social: typeof Social;
    state: typeof State;
    styling: typeof Styling;
    tours: typeof Tours;
    utils: typeof Utils;
    validation: typeof Validation;
    log: any;
}

export interface IComponentProps {
    flowKey: string;
    id: string;
    parentId?: string;
    key?: string;
}
