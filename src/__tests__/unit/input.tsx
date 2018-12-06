import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import CustomInput from '../../input';
import { IManywho } from '../../interfaces';
import { component } from '../../wrapper';

declare const manywho: IManywho;

configure({ adapter: new Adapter() });

describe('Input Component', () => {

    it('renders', () => {
        const model = {};
        const getContentValue = <T extends string | number | boolean>(): T => null;

        const wrapper = shallow(
            <CustomInput
                flowKey="flowKey"
                id="id"
                model={model as any}
                state={null}
                outcomes={null}
                className={null}
                onChange={null}
                onEvent={null}
                getContentValue={getContentValue}
                getObjectData={null}
            />,
        );
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('registers', () => {
        expect(manywho.component.register).toHaveBeenCalledWith('custom-input', expect.any(Function));
    });

});
