import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { Web3Provider } from "./contexts/Web3Context";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import { AuthProvider } from "./contexts/AuthContext"; // Added AuthContext for user authentication

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

const DynamicHome = lazy(() => import("./pages/Home"));
const DynamicAbout = lazy(() => import("./pages/About"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <QueryClientProvider client={queryClient}>
        <Web3Provider>
          <Provider store={store}>
            <AuthProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </AuthProvider>
          </Provider>
        </Web3Provider>
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}
