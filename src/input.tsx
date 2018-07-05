declare var manywho: any;

import * as React from 'react';

class CustomInput extends React.Component<any, any> {

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
            manywho.model.getComponent(
                this.props.id,
                this.props.flowKey,
            ),
            this.props.flowKey,
        );
    }

    render() {
        const model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        const state = manywho.state.getComponent(this.props.id, this.props.flowKey) || {};

        const contentValue =
            state && state.contentValue !== undefined ?
            state.contentValue :
            model.contentValue;

        return <input type="text" value={contentValue} onChange={this.onChange} onBlur={this.onBlur} />;
    }
}

manywho.component.register('custom-input', CustomInput);

export default CustomInput;
