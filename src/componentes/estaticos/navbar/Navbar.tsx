import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";

function Navbar() {
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
  return (
    <>
      <AppBar position="static">
        <Box
          sx={{ flexGrow: 1 }}
          style={{ backgroundColor: "#1FE291", padding: "1%" }}
          display={"flex"}
        >
          <Box>
            <img
              className="logo"
              src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LOGO_NAVBAR.png?updatedAt=1681506741817"
              alt="logo EnerGen"
            />
          </Box>
          <Box display={"flex"}>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="home" to='/home'>
              <Typography variant="h6">Home</Typography>
              </Link>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="sobre" to='/sobre'>
              <Typography variant="h6" color={"inherit"}>Sobre</Typography>
              </Link>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="produtos" to='/produtos'>
            <Typography variant="h6" color={"inherit"}>Produtos</Typography>
            </Link>
            </Box>
            <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Busca em EnerGen"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} paddingLeft={2}>
            <PersonIcon></PersonIcon>
            <Link className="login" to='/login'>Login</Link>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
