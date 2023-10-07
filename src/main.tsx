import React from "react";
import ReactDOM from "react-dom";
import { QueryClient } from "react-query";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

const container = document.getElementById("root");
// const root = createRoot(container!);
const queryClient = new QueryClient();
ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
