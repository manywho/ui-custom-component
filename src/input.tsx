import * as React from 'react';
import { IComponentProps, IManywho } from './interfaces';
import { component } from './wrapper';

declare const manywho: IManywho;

class CustomInput extends React.Component<IComponentProps> {

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        manywho.state.setComponent(
            this.props.id,
            { contentValue: e.target.value },
            this.props.flowKey,
            true,
        );
        this.forceUpdate();
    }

    onBlur = () => {
        manywho.component.handleEvent(
            this,
            this.props.model,
            this.props.flowKey,
            null,
        );
    }

    render() {
        const contentValue =
            this.props.state && this.props.state.contentValue !== undefined ?
                this.props.state.contentValue :
                this.props.model.contentValue;

        return <input type="text" value={contentValue as string} onChange={this.onChange} onBlur={this.onBlur} />;
    }
}

manywho.component.register('custom-input', component(CustomInput));

export default CustomInput;
