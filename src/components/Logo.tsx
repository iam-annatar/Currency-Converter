import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import PATH from "../app/pages/routes/path";
import MainLogo from "../assets/icons/currency-icon.svg?react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Link
      style={{
        textDecoration: "none",
        display: "flex",
        gap: ".5rem",
        flexDirection: "column",
        alignItems: "center",
      }}
      to={PATH.HOME}
    >
      <MainLogo />
      <Typography
        fontSize="1.5rem"
        fontWeight="bold"
        color={theme.palette.secondary.main}
      >
        AM Swap
      </Typography>
    </Link>
  );
};

export default Logo;
