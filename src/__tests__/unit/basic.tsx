declare var manywho: any;

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import CustomBasic from '../../basic';

configure({ adapter: new Adapter() });

describe('Basic Component', () => {

    it('renders', () => {
        const wrapper = shallow(<CustomBasic />);
        expect(wrapper.find('div.custom-basic')).toHaveLength(1);
    });

    it('registers', () => {
        expect(manywho.component.register).toHaveBeenCalledWith('custom-basic', CustomBasic);
    });

});
