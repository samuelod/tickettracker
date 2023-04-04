import React, { useState } from 'react';


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
            <button className='counter__plus' onClick={handlePlus}>+</button>
            <h5 className='counter__tracker'>{counter}</h5>
            <button className='counter__minus' onClick={handleMinus}>-</button>
        </div>
    </div>
  );
};

export default Counter;