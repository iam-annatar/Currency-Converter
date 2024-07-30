import { Box, Button, Container, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import PATH from "../../app/pages/routes/path";
import Lan from "../../assets/icons/lan.svg?react";
import Logo from "../Logo";

const Navbar = () => {
  // make Navbar only appear on above medium screen size
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  if (!matches) return;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "2rem",
      }}
    >
      <Logo />
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to={PATH.SWAP}>Swap</NavLink>
            </li>
            <li>
              <NavLink to={PATH.CHARTS}>Charts</NavLink>
            </li>
            <li>
              <NavLink to={PATH.SEARCH}>Search</NavLink>
            </li>
          </ul>
        </nav>
        <Button>
          <Lan />
        </Button>
      </Box>
    </Container>
  );
};

export default Navbar;
