import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import GuessWords from './GuessWords';
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
    guessWords: [{ guessWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWords {...setupProps} />);
};

test('GuessWords renders without error', () => {
    const wrapper = setup();
    const guessWordsComponent = findByTestAttr(
        wrapper,
        'component-guess-words'
    );
    expect(guessWordsComponent.length).toBe(0);
});

// describe('if there are no words guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper = setup({ guessWord: [] });
//     });

//     test('renders w/o error', () => {});

//     test('renders instructions to guess a word', () => {});
// });

// describe('if thre are words guessed,', () => {});
