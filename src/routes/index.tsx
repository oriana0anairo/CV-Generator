import { Route, Routes } from "react-router-dom";
import { RoutesPath } from "../enums";
import { FormPage, MainPage, PreviewPage } from "../pages";

export const RoutesProvider: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesPath.form} element={<FormPage />} />
      <Route path={RoutesPath.main} element={<MainPage />} />
      <Route path={RoutesPath.preview} element={<PreviewPage />} />
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
};
