import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Input from './Input';
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {};

const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
};

test('input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
        wrapper = setup();
    });

    afterEach(() => {
        React.useState = originalUseState;
    });

    test('state updates with value ofinput box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is cleared upon submit button click', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        const mockEvent = { preventDefault() {} };
        submitButton.simulate('click', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});

// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => {
//     return {
//         ...jest.requireActual('react'),
//         useState: (initialState) => [initialState, mockSetCurrentGuess],
//     };
// });

// describe('state controlled input field', () => {
//     test('state updates with value ofinput box upon change', () => {
//         const wrapper = setup();
//         const inputBox = findByTestAttr(wrapper, 'input-box');

//         const mockEvent = { target: { value: 'train' } };
//         inputBox.simulate('change', mockEvent);

//         expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
//     });
// });
