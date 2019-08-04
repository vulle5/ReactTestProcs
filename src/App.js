import React, { useCallback } from 'react';

import { useCounter } from './entities';
import Post from './Post';

function App() {
  const [counter, { increment, decrement }] = useCounter();

  const handleClickIncrement = useCallback(() => increment(), [increment]);
  const handleClickDecrement = useCallback(() => decrement(), [decrement]);

  return (
    <div className="App">
      <div>{counter.value}</div>
      <button onClick={handleClickIncrement}>increment</button>
      <button onClick={handleClickDecrement}>decrement</button>
      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;
