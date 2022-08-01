import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('renders component w/o error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setUp({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setUp({ success: true });
    const message = findByTestAttr(wrapper, 'component-congrats');
    expect(message.text().length).not.toBe(0);
});
