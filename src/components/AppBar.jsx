import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "#E31837" }}>
          <Container maxWidth="xxl">
            <Toolbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Box
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignSelf: "center",
                }}
              >
                <a href="http://localhost:3000/">
                  <img
                    src="https://previews.dropbox.com/p/thumb/ABtzt009nnTYQcdrK8_PJFOGyX_TFIdTWzeTi98osEO1ZLn4N8MAgeEnS5r9b9oInp5rybOmNb9yImeE2NIHWS16tTYReP2PT7MgSAv_gMH0XkHSGoGNwpJPgv_8IKWajrALlFjyeoGh6oDKJDPPXu5O7zEY-Bc9NKeDuzPVgXrTguM8gJwl4pein2I0c8vtsoyhwkqBC0ZBRYANiWMmZW8gykEls4SKMGfw-2jJwypFJ-Cqk1TKkHD-dXahhtloO2wIYPRXcvrPVuE_IZ1mydWGX0q-m9-VXZlHrAsmGd1BxO8ibmxug3qr1J2SzDXCBiKmZNQjpaWqqO0Z0TrGHcQwMhaKhIRGkLJGCv-ySpGD-9FX6gcwh1xO9FNBeGss4Y0/p.png"
                    width={249}
                    height={80}
                    alt="FUNACTIVE Logo"
                  />
                </a>
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "inherit",
                    backgroundColor: "#E31837",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ color: "inherit", backgroundColor: "#E31837" }}
                >
                  Register
                </Button>
              </ButtonGroup>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Before time was time, there was a Great Hill. 

And on the Great Hill there lived the Yolks.

The Yolks spent their entire lives climbing the Great Hill, trying to reach the top.

Some Yolks climbed fast.

Some Yolks climbed slowly.

One Yolk in particular was a very slow climber. He was different than the rest of the Yolks.

When he climbed, all the other Yolks passed him. 

It was hard for him to watch them pass by.

He felt like the worst climber in the world.

Some Yolks made fun of him as they passed.

Others didn’t.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}
