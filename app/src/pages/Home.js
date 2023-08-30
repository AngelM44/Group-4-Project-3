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

=======
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ mb: 5, mt: -10 }}>
        <Logo />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "-4rem",
          fontSize: "5rem",
          fontWeight: 700,
          letterSpacing: "-0.5rem",
          display: "inline-block",
          whiteSpace: "nowrap",
          [theme.breakpoints.down("sm")]: {
            fontSize: "4rem",
            letterSpacing: "-0.4rem",
          },
        }}
        gutterBottom
      >
        Are You Ready?
      </Typography>

      <Button size="small" variant="contained" onClick={() => setAuth(false)}>
        Log out
      </Button>
      <Button size="large" variant="contained" onClick={() => setAuth(false)}>
        Training
      </Button>
      <Button size="large" variant="contained" onClick={() => setAuth(false)}>
        Medical
      </Button>
    </Container>
  );
};

export default Home;
