import type { Theme } from "@mui/material";
import {
  Box,
  CircularProgress,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import PATH from "../app/pages/routes/path";
import background from "../assets/background.png";
import backgrounMobile from "../assets/background-mobile.png";
import Bottombar from "./navigation/Bottombar";
import Navbar from "./navigation/Navbar";

const Layout = () => {
  const theme = useTheme();
  // use media query to differ layout appearance on desktop and mobile screen sizes
  const matches = useMediaQuery((t: Theme) => t.breakpoints.up("md"));
  const isHomePage = useLocation().pathname === PATH.HOME;

  return (
    <Box
      sx={
        isHomePage
          ? matches
            ? {
                width: "100dvw",
                height: "100dvh",
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : {
                width: "100dvw",
                height: "100dvh",
                backgroundImage: `url(${backgrounMobile})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center ",
                backgroundSize: "cover",
              }
          : null
      }
    >
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
    </Box>
  );
};

export default Layout;
