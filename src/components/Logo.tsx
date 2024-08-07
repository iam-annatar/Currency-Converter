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
        justifyContent: "center",
        gap: ".5rem",
        alignItems: "center",
      }}
      to={PATH.HOME}
    >
      <Typography variant="h5" color={theme.palette.text.primary}>
        <span
          style={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
          }}
        >
          Am
        </span>{" "}
        Swap
      </Typography>
      <MainLogo />
    </Link>
  );
};

export default Logo;
