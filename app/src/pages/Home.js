import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
//////////////////////////////////////
//import ButtonAppBar from './NavBar.js';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Home = ({ setAuth }) => {
  const theme = useTheme();

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

  );
};

// const comp = () => (
//   <motion.span
//     variants={stagger}
//     initial="initial"
//     animate="animate"
//     style={{
//       textAlign: "center",
//       marginTop: 4,
//       padding: 4,
//       fontSize: "8rem",
//       fontWeight: 500,
//       position: "relative",
//       letterSpacing: "-0.8rem",
//       display: "inline-block",
//       whiteSpace: "nowrap",
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "4rem",
//         letterSpacing: "-0.4rem",
//         paddin: 0,
//       },
//     }}
//   >
//     {[..."Welcome Back"].map((l, i) => (
//       <motion.span variants={animation} key={i}>
//         {l}
//       </motion.span>
//     ))}
//   </motion.span>
// );
export default Home;
