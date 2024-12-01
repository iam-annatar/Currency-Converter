import { Box, Button, Typography, useTheme } from "@mui/material";

interface CurrencyProps {
  name: string;
  label: string;
  imageUrl: string;
}

const Currency: React.FC<CurrencyProps> = ({ label, imageUrl, name }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            width={30}
            height={30}
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={imageUrl}
            alt="first-country"
            loading="lazy"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              {label}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            textTransform: "none",
            color: theme.palette.secondary.main,
          }}
        >
          Change
        </Button>
      </Box>
      {/* <Typography variant="caption">1.00 USD = 0.88 EUR</Typography> */}
    </>
  );
};

export default Currency;
