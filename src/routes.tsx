import { Route, Routes as RouterRoutes } from "react-router-dom";
import { TransactionsList } from "./features/TransactionsList";
import { TransactionDetails } from "./features/TransactionDetails";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<TransactionsList />} />
      <Route path="/transaction/:id" element={<TransactionDetails />} />
    </RouterRoutes>
  );
};
