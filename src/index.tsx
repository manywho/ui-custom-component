declare var manywho: any;

import * as React from 'react';
import './index.css';

class CustomComponent extends React.Component<null, null> {
    render() {
        return <div className="custom-component">Custom Component</div>
    }
}

manywho.component.register('custom-component', CustomComponent);

export default CustomComponent;
