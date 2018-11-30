import * as React from 'react';
import { IComponentProps, IManywho } from './interfaces';
import { component } from './wrapper';

declare const manywho: IManywho;

class CustomInput extends React.Component<IComponentProps> {

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }

    onBlur = () => {
        this.props.onEvent();
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.getContentValue<string>()}
                onChange={this.onChange}
                onBlur={this.onBlur}
            />
        );
    }
}

manywho.component.register('custom-input', component(CustomInput));

export default CustomInput;
