import type { Theme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/material";

import ChartsIcon from "../../assets/icons/charts.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import SwapIcon from "../../assets/icons/swap.svg?react";
import NavIcons from "./NavIcons";

const Bottombar = () => {
  // make bottomBar only appear on mobile screen size
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  if (!matches) return;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderTop: "1px solid #EFBF3A",
        boxShadow: "4px -10px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "1rem",
        p: "1rem 0",
      }}
    >
      <NavIcons icon={<ChartsIcon />} caption="Charts" />
      <NavIcons icon={<SwapIcon />} caption="Swap" />
      <NavIcons icon={<SearchIcon />} caption="Search" />
    </Box>
  );
};

export default Bottombar;
