import type { JSX } from "react";
import { Outlet } from "react-router";
import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";

export default function Layout(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
