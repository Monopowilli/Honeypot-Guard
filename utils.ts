// Final cleanup for production readiness, removing unnecessary comments.
import { AuthProvider } from "./contexts/AuthContext"; 
const DynamicContact = lazy(() => import("./pages/Contact"));
const DynamicServices = lazy(() => import("./pages/Services"));
import { Web3Provider } from "./contexts/Web3Context"; 
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

const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Please try again.");
    axios.post("/api/log-error", { error: error.message });
  }
};


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




componentDidCatch(error, errorInfo) {
  console.error("Error caught by boundary:", error, errorInfo);
  axios.post("/api/log-error", { error: error.message, errorInfo });
}

const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Please try again.");
    axios.post("/api/log-error", { error: error.message });
  }
};


