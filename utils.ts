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
import axios from "axios";// Added useFetchData hook to improve API logic reuse.

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

