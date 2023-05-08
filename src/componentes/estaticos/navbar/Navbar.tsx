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
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";

function Navbar() {

  const history = useNavigate();

  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  function goLogout(){
    dispatch(addToken(''));
    toast.error('Usuário deslogado!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    history('/login')
  }

  return (
    <>
      <AppBar position="static" className="menu">
        <Box
          sx={{ flexGrow: 1 }}
          style={{ backgroundColor: "#1FE291", padding: "1%" }}
          display={"flex"}
        >
          <Box display={'flex'} flex={1}>
            <img
              className="logo"
              src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LOGO_NAVBAR.png?updatedAt=1681506741817"
              alt="logo EnerGen"
            />
          </Box>
          <Box className ='alinhamento'display={"flex"} justifyContent={'space-around'} alignItems={'center'} width={'70%'} flex={2}>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="login" to='/home'>
              <Typography variant="h6">Home</Typography>
              </Link>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="login" to='/sobre'>
              <Typography variant="h6" color={"inherit"}>Sobre</Typography>
              </Link>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
            <Link className="login" to='/produtos'>
            <Typography variant="h6" color={"inherit"}>Produtos</Typography>
            </Link>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={3}>
            <ShoppingCartIcon />
          </Box>

          </Box>

          <Box display={'flex'} alignItems={'center'} paddingLeft={2}>
            <PersonIcon></PersonIcon>
          </Box>
            
          <Box display={'flex'} alignItems={'center'} paddingLeft={2} onClick={goLogout}>
            <Link className="login" to='/login'>Logout</Link>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
