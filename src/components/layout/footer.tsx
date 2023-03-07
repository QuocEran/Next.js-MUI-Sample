import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        p: 2,
        position: "fixed",
        width: "100%",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography>Vietnam Photos</Typography>
      <Box
        component="a"
        sx={{
          textDecoration: "none",
        }}
        href="https://www.unsplash.com"
      >
        <Typography>
          Photos provided by
          <Typography component="span" fontWeight={600}>
            {" "}
            Unsplash
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
