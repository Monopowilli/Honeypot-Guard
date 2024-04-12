import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query"; 
import { Web3Provider } from "./contexts/Web3Context"; 
import { Provider } from "react-redux"; 
import { store } from "./store"; // Redux store imported

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

const DynamicHome = lazy(() => import("./pages/Home"));
const DynamicAbout = lazy(() => import("./pages/About"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <QueryClientProvider client={queryClient}>
          <Web3Provider>
            <Provider store={store}>
              <App />
            </Provider>
          </Web3Provider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}
