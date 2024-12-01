import type { Theme } from "@mui/material";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import CustomAnimation from "../../components/Custom-animation";
import Logo from "../../components/navigation/Logo";
import PATH from "./routes/path";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery((t: Theme) => t.breakpoints.down("sm"));
  return (
    <main>
      {matches ? (
        <div style={{ marginTop: "2rem" }}>
          <Logo />
        </div>
      ) : null}
      <header
        style={
          matches
            ? { marginTop: "2rem", textAlign: "center" }
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
          </div>
          <Link to={PATH.SWAP}>
            <Button
              size="large"
              sx={{
                maxWidth: "10rem",
                borderRadius: "1rem",
                mt: "2rem",
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
              <Typography sx={{ textTransform: "none" }} variant="body1">
                Start Swapping
              </Typography>
            </Button>
          </Link>
        </CustomAnimation>
      </header>
    </main>
  );
};

export default Home;
