import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    const handleClickCount = (value) => {
        if (count === 0 && value === -1) {
            setError('You cannot decrement 0');
        } else {
            setError(null);
            setCount(count + value);
        }
    };

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">
                The counter is currently: <span data-test="count">{count}</span>
            </h1>
            <button
                data-test="increment-button"
                onClick={() => handleClickCount(1)}
            >
                Increment Counter
            </button>
            <button
                data-test="decrement-button"
                onClick={() => handleClickCount(-1)}
            >
                Decrement Counter
            </button>
            {error ? <span data-test="error-message">{error}</span> : ''}
        </div>
    );
}

export default App;
