import { Typography, useTheme } from "@mui/material";
import type { NavLinkRenderProps } from "react-router-dom";
import { NavLink } from "react-router-dom";

import type { NavIconsProps } from "../../interfaces";

const NavIcons: React.FC<NavIconsProps> = ({ icon, caption, path }) => {
  const theme = useTheme();
  return (
    <NavLink
      to={path}
      style={({ isActive }: NavLinkRenderProps) => {
        return {
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".2rem",
          color: isActive ? theme.palette.secondary.main : "inherit",
        };
      }}
    >
      {icon}
      <Typography variant="caption" fontSize=".8rem">
        {caption}
      </Typography>
    </NavLink>
  );
};

export default NavIcons;
