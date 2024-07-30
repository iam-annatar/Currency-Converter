import { Box, Typography } from "@mui/material";

import MainLogo from "../assets/icons/currency-icon.svg?react";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".5rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainLogo />
      <Typography fontSize="1.5rem" fontWeight="bold" color="#EFBF3A">
        AM Swap
      </Typography>
    </Box>
  );
};

export default Logo;
