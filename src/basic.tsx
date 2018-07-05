declare var manywho: any;

import * as React from 'react';
import './css/basic.css';

class CustomBasic extends React.Component<any, any> {
    render() {
        return <div className="custom-basic">Basic Custom Component</div>;
    }
}

manywho.component.register('custom-basic', CustomBasic);

export default CustomBasic;
