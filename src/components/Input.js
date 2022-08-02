import React from 'react';

export default function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState('');
    return (
        <div data-test="component-input">
            <form>
                <input
                    data-test="input-box"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                ></input>
                <button
                    data-test="submit-button"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentGuess('');
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
