import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import PATH from "../app/pages/routes/path";
import MainLogo from "../assets/icons/currency-icon.svg?react";

const Logo = () => {
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
      <Typography fontSize="1.5rem" fontWeight="bold" color="#EFBF3A">
        AM Swap
      </Typography>
    </Link>
  );
};

export default Logo;
