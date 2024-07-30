import { Container } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Bottombar from "./navigation/Bottombar";
import Navbar from "./navigation/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Bottombar />
    </>
  );
};

export default Layout;
