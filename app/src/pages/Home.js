import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
//////////////////////////////////////
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Home = ({ setAuth }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home Page
        </Typography>
        <Button font="bold" size="large" variant="contained" >Training</Button>
        <Button size="large" variant="contained" >Medical</Button>
        <Button size="large" variant="contained" onClick={() => setAuth(false)}>Log out</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
};


export default Home;
