import type { Theme } from "@mui/material";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import PATH from "../../app/pages/routes/path";
import ChartsIcon from "../../assets/icons/charts.svg?react";
import HomeIcon from "../../assets/icons/home.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import SwapIcon from "../../assets/icons/swap.svg?react";
import NavIcons from "./NavIcons";

const Bottombar = () => {
  const theme = useTheme();
  // make bottomBar only appear on mobile screen size
  const matches = useMediaQuery((t: Theme) => t.breakpoints.down("sm"));

  if (!matches) return;

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        boxShadow: "4px -10px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "1rem 1rem 0 0",
        p: "1rem 0",
      }}
    >
      <NavIcons icon={<HomeIcon />} caption="Home" path={PATH.HOME} />
      <NavIcons icon={<ChartsIcon />} caption="Charts" path={PATH.CHARTS} />
      <NavIcons icon={<SwapIcon />} caption="Swap" path={PATH.SWAP} />
      <NavIcons icon={<SearchIcon />} caption="Search" path={PATH.SEARCH} />
    </Box>
  );
};

export default Bottombar;
