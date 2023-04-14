import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#1FE291", padding: "1%" }} display={'flex'} justifyContent={'space-between'}>
          <Box>
            <img
              className="logo"
              src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LOGO_NAVBAR.png?updatedAt=1681506741817"
              alt="logo EnerGen"
            />
          </Box>
          <Box display={'flex'}>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6">Home</Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color={"inherit"}>Sobre</Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color={"inherit"}>Produtos</Typography>
            </Box>
          </Box>
          <Box>
            <PersonIcon></PersonIcon>
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
