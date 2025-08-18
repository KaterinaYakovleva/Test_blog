import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";


import MainPage from "../../pages/MainPage/MainPage";
import { CLIENT_ROUTES } from "../../shared/enums/clientRoutes";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../layout/layout";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
        </Route>
        <Route path={CLIENT_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
