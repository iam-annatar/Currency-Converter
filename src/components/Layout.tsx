import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Bottombar from "./Bottombar";

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Bottombar />
    </>
  );
};

export default Layout;
