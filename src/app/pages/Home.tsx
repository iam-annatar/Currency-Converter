import type { Theme } from "@mui/material";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

import CustomAnimation from "../../components/Custom-animation";
import PATH from "./routes/path";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery((t: Theme) => t.breakpoints.down("sm"));
  return (
    <main>
      <header
        style={
          matches
            ? { marginTop: "8rem", textAlign: "center" }
            : { marginTop: "8rem" }
        }
      >
        <CustomAnimation>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Exchange Rates <br /> at Your Fingertips
            </Typography>
            <Typography fontSize="1.3rem" color="darkgray">
              Get the latest and most accurate exchange rates for over <br />{" "}
              100 currencies and easly convert between them.
            </Typography>{" "}
            <NavLink to={PATH.SWAP}>
              <Button
                sx={{
                  maxWidth: "fit-content",
                  padding: ".5rem 1rem",
                  borderRadius: "2rem",
                  textTransform: "none",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  bgcolor: theme.palette.secondary.main,
                  ":active": {
                    bgcolor: theme.palette.secondary.dark,
                  },
                  ":hover": {
                    bgcolor: theme.palette.secondary.dark,
                  },
                }}
                variant="contained"
              >
                Start Swapping
              </Button>
            </NavLink>
          </div>
        </CustomAnimation>
      </header>
    </main>
  );
};

export default Home;
