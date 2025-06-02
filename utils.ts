// Clean up unnecessary imports and optimize the structure of the file.
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Web3Provider } from "./contexts/Web3Context";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext"; 
import axios from "axios"; // Removed unused imports

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const DynamicHome = lazy(() => import("./pages/Home"));
const DynamicAbout = lazy(() => import("./pages/About"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
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
    </ErrorBoundary>
  </React.StrictMode>
);


const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

// Using the custom hook in the code
const { data, error } = useFetchData("/api/data");


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

const DynamicHome = lazy(() => import("./pages/Home"));
const DynamicAbout = lazy(() => import("./pages/About"));

const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Please try again.");
  }
};

// Enhanced ErrorBoundary to send errors to an external service for tracking.
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
    // Send error to an external logging service
    axios.post("/api/log-error", { error: error.message, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. We're working on it!</h1>;
    }
    return this.props.children;
  }
}

 
.// Refactor dynamic imports and Suspense for improved performance.
const DynamicContact = lazy(() => import("./pages/Contact"));
const DynamicServices = lazy(() => import("./pages/Services"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <QueryClientProvider client={queryClient}>
          <Web3Provider>
            <Provider store={store}>
              <AuthProvider>
                <ThemeProvider>
                  <DynamicHome />
                  <DynamicAbout />
                  <DynamicContact />
                  <DynamicServices />
                </ThemeProvider>
              </AuthProvider>
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

// Update to improve error handling and logging in fetchData function.
const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);  // Improved logging
    alert("Failed to fetch data. Please try again.");
    // Log the error to an external service (mocked for example)
    axios.post("/api/log-error", { error: error.message });
  }
};

// Added LanguageContext for handling internationalization and user language preferences.
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext({ language: "en", setLanguage: (lang: string) => {} });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Wrapping the App with LanguageProvider
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </LanguageProvider>
  </React.StrictMode>
);
