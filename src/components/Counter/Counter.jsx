import React, { useState } from 'react';
import "./Counter.scss";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handlePlus = () => {
        setCounter(counter + 1);
    };

    const handleMinus = () => {
    if(counter !== 0)
        setCounter(counter - 1);
    };

  return (
    <div className='counter'>
        <h3 className='counter__header'>Counter</h3>
        <div className='counter__container'>
            <button className='counter__buttons' onClick={handleMinus}>—</button> 
            <h5 className='counter__tracker'>{counter}</h5>
            <button className='counter__buttons' onClick={handlePlus}>+</button>

        </div>
    </div>
  );
};

export default Counter;