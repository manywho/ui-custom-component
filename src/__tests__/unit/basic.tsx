import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import CustomBasic from '../../basic';
import { IManywho } from '../../interfaces';

declare const manywho: IManywho;

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
