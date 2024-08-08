import { Typography } from "@mui/material";
import type { NavLinkRenderProps } from "react-router-dom";
import { NavLink } from "react-router-dom";

import type { NavIconsProps } from "../../interfaces";

const NavIcons: React.FC<NavIconsProps> = ({ icon, caption, path }) => {
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
          color: isActive ? "#118A44" : "inherit",
        };
      }}
    >
      {icon}
      <Typography fontWeight="bold" variant="caption" fontSize=".9rem">
        {caption}
      </Typography>
    </NavLink>
  );
};

export default NavIcons;
