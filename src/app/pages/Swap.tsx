import {
  Button,
  Card,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import SwapIcon from "../../assets/icons/swap.svg?react";
import Currency from "../../components/swap/Currency-card";

const Swap = () => {
  const [showCurrent, setShowCurrent] = useState<boolean>(true);
  const theme = useTheme();

  const handleSwapCurrency = () => {
    setShowCurrent(!showCurrent);
  };

  return (
    <Container>
      <Card
        sx={{
          padding: "1rem",
          mt: "5rem",
          bgcolor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {showCurrent ? (
          <Currency
            imageUrl="src/assets/united-states.png"
            name="USD - United States Dollar"
            label="From"
          />
        ) : (
          <Currency
            imageUrl="src/assets/united-kingdom.png"
            name="EUR - Euro"
            label="From"
          />
        )}
        <TextField
          placeholder="00.00"
          sx={{
            paddingBlock: "1rem",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          type="number"
        />
        <div className="swap-currency">
          <Button
            variant="contained"
            className="swap-currency-btn"
            sx={{
              bgcolor: theme.palette.secondary.main,
              borderRadius: "50%",
              minWidth: "1rem",
              padding: "clamp(.2rem,2vw,1rem)",
              ":hover": {
                bgcolor: theme.palette.secondary.main,
              },
            }}
            onClick={handleSwapCurrency}
          >
            <SwapIcon />
          </Button>
        </div>
        {showCurrent ? (
          <Currency
            imageUrl="src/assets/united-kingdom.png"
            name="EUR - Euro"
            label="To"
          />
        ) : (
          <Currency
            imageUrl="src/assets/united-states.png"
            name="USD - United States Dollar"
            label="To"
          />
        )}
        <TextField
          placeholder="00.00"
          sx={{
            paddingBlock: "1rem",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          type="number"
        />
        <Button
          sx={{
            alignSelf: "center",
            bgcolor: theme.palette.secondary.main,
            borderRadius: "1rem",
            minWidth: "10rem",
            textTransform: "none",
            ":active": {
              bgcolor: theme.palette.secondary.dark,
            },
            ":hover": {
              bgcolor: theme.palette.secondary.dark,
            },
          }}
          variant="contained"
        >
          <Typography fontWeight="bold" variant="body1">
            Convert
          </Typography>
        </Button>
      </Card>
    </Container>
  );
};

export default Swap;
