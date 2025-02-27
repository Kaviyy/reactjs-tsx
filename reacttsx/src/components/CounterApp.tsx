import React, { useState } from "react";

const CounterApp = () => {
    const [age, setAge] = useState(42); 
    const [count, setCount] = useState(0);

    function handleClick() {
        setAge(18);
    }

    function handleIncrease() {
        setCount((prevCounter) => prevCounter + 1);
        setCount((prevCounter) => prevCounter + 1);
        setCount((prevCounter) => prevCounter + 1);
    }

    function handleDecrease() {
        setCount((prevCounter) => prevCounter - 1);
        setCount((prevCounter) => prevCounter - 1);
        setCount((prevCounter) => prevCounter - 1);
    }

    return (
        <div>
            <h1>Counter App - {count} - Age: {age}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleClick}>Set Age</button>
        </div>
    );
};

export default CounterApp;
