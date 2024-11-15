import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import "./assets/global.css";
import MainLayout from "./layout/MainLayout";
import { Login } from "./pages/auth/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardCharts } from "./components/dashboardDesign/DashboardCharts";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            {/* ekle rutalar chat icin pls */}
            <Route path="/charts" element={<DashboardCharts />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
