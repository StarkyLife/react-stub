import React, { useState } from 'react';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid="greeting">Yo, Ilshat!</h1>
      <h2 data-testid="count">{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};
