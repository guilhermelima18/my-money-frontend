import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BillingCycle from "../pages/BillingCycle";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ciclos-pagamentos" element={<BillingCycle />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
