import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ContextProvider } from "./Context/ContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
