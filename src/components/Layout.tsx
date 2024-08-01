import { CircularProgress, Container, useTheme } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Bottombar from "./navigation/Bottombar";
import Navbar from "./navigation/Navbar";

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Container>
        <Suspense
          fallback={
            <CircularProgress
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                color: theme.palette.secondary.main,
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
      <Bottombar />
    </>
  );
};

export default Layout;
