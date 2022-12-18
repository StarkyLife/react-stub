import React, { useState } from "react";
import { getGreeting } from "./greeting";

const DynamicText = React.lazy(() => import("./dynamic"));

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid="greeting">{getGreeting("Ilshat")}</h1>
      <h2 data-testid="count">{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count > 5 && (
        <React.Suspense>
          <DynamicText />
        </React.Suspense>
      )}
    </div>
  );
};
