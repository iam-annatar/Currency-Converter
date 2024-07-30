import { Button, Typography } from "@mui/material";

import type { NavIconsProps } from "../../interfaces";

const NavIcons: React.FC<NavIconsProps> = ({ icon, caption }) => {
  return (
    <Button
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".2rem",
        color: "#EFBF3A",
      }}
    >
      {icon}
      <Typography variant="caption" fontSize=".8rem">
        {caption}
      </Typography>
    </Button>
  );
};

export default NavIcons;
