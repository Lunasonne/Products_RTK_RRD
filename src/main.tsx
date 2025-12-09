
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");

 if (container) {
  const root = createRoot(container);

  root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document."
  );
}