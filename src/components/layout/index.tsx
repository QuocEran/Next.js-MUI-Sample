import { Box, ThemeProvider } from "@mui/material";
import Navbar from "components/layout/navbar";
import React from "react";
import Theme from "styles/theme";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#F5F8F8 !important",
      }}
    >
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Box sx={{ maxWidth: 1440, marginX: "auto", marginBottom: "80px" }}>{children}</Box>
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
