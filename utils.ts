import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { Web3Provider } from "./contexts/Web3Context";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      </Web3Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}
