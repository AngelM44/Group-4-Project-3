import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
//////////////////////////////////////
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const colorPalette = {
  primaryDark: "#2C3531",
  primary: "#116466",
  secondary: "#D9B08C",
  tertiary: "#FFCB9A",
  neutral: "#D1E8E2",
};
const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: colorPalette.neutral,
  marginLeft: '1rem',
  '&:hover': {
      color: colorPalette.secondary
  }
});
const StyledAppBar = styled(AppBar)({
  backgroundColor: colorPalette.primary,
});

const Home = ({ setAuth }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <StyledAppBar position="static">
        <Toolbar>
        < img src="the-mandalorian-helmet-png-image-free-transparent-download-high-quality-images-768x1126.png" alt="logo" style={{height: 45, marginRight: 10 }} />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: colorPalette.secondary }}
            >
                Deployment Readiness Tracker
            </Typography>
            {/* Navigation Links */}
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/training">Training</StyledLink>
            <StyledLink to="/medical">Medical</StyledLink>
        </Toolbar>
    </StyledAppBar>
  </Box>
  )
};


export default Home;
