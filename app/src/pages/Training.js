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
import TrainingTable from "./TrainingTable";
import { useEffect, useState } from "react";

const colorPalette = {
    primaryDark: "olive",
    primary: "light blue",
    secondary: "orange",
    tertiary: "white",
    neutral: "white",
  };
  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: colorPalette.tertiary,
    marginLeft: "1rem",
    "&:hover": {
      color: colorPalette.secondary,
    },
  });
  const StyledAppBar = styled(AppBar)({
    backgroundColor: colorPalette.primaryDark,
  });

const Training = ({ setAuth }) => {
  const [trainingData, setTrainingData] = useState([]);
  //const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/training/`)
      .then((res) => res.json())
      .then((data) => setTrainingData(data))
      .catch(err => console.log(trainingData))
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <img
            src="the-mandalorian-helmet-png-image-free-transparent-download-high-quality-images-768x1126.png"
            alt="logo"
            style={{ height: 45, marginRight: 10 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: colorPalette.secondary,
            }}
          >
            Deployment Readiness Tracker
          </Typography>
          {/* Navigation Links */}
          <StyledLink variant="h6" component="div" to="/">
            Home
          </StyledLink>
          <StyledLink variant="h6" component="div" to="/Training">
            Training
          </StyledLink>
          <StyledLink variant="h6" component="div" to="/Medical">
            Medical
          </StyledLink>
          <StyledLink variant="h6" component="div" to="/login">
            Logout
          </StyledLink>
        </Toolbar>
      </StyledAppBar>
      {/* {personnelData.map((personnel) => (
        <div key={personnel.id}>
          <h1>{personnel.name}</h1>
          <h2>{personnel.DOD_number}</h2>
          <h2>{personnel.deployable}</h2>
        </div>
      ))}*/}
      <center>
        <TrainingTable data={trainingData}/>
      </center>
    </Box>
  );
};



export default Training;