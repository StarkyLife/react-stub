import React, { useState } from "react";
import { getGreeting } from "./greeting";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{getGreeting("Ilshat")}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};
