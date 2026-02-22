import { Outlet, Link } from "react-router-dom";

import Header from "@/components/Layout/Header";

export default function Layout() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      
    </>
  );
}
