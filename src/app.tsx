import React from "react";
import { getGreeting } from "./greeting";

export const App: React.FC = () => {
  debugger;
  return (
    <div>
      <h1>{getGreeting("Ilshat")}</h1>
    </div>
  );
};
