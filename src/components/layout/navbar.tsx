import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import colors from "styles/colors";
const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          className="Bahiana"
          variant="h3"
          component="p"
          sx={{
            position: "absolute",
            left: "16px",
          }}
        >
          NextJS + MUI
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            position: "absolute",
            right: "16px",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            sx={{
              bgcolor: colors.dark,
              color: "white",
            }}
            variant="contained"
            disableFocusRipple
            disableTouchRipple
          >
            <Box
              component="a"
              href="https://github.com/QuocEran/Next.js-MUI-Sample"
              sx={{
                textDecoration: "none",
                color: colors.dark,
              }}
            >
              GitHub
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
