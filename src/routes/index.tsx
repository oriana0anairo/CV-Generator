import { Route, Routes } from "react-router-dom";

export const RoutesProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
};
