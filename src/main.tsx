import { PrimeReactProvider } from "primereact/api";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>,
);
