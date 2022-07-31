import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders non-empty component without crashing', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setUp();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
    const wrapper = setUp();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
});

test('clicking button increments counter display', () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
    //find button
    // click button
    // find display and test that number incremented
});
