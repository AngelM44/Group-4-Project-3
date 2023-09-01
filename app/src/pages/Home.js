import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
//////////////////////////////////////
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonnelTable from "../PersonnelTable";

const colorPalette = {
  primaryDark: "#79955a",
  primary: "light blue",
  secondary: "#ffd54f",
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

const Home = ({ setAuth }) => {
  const [personnelData, setPersonnelData] = useState([]);
  //const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/personnel/`)
      .then((res) => res.json())
      .then((data) => setPersonnelData(data))
      .catch(err => console.log(personnelData))
  });

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
              color: colorPalette.neutral,
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
        <PersonnelTable data={personnelData}/>
    </Box>
  );
};

export default Home;
