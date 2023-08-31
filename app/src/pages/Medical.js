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
import { Link, useParams } from "react-router-dom";
import MedicalTable from "./MedicalTable";
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

const Medical = ({ setAuth }) => {
  const [medicalData, setMedicalData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = id
      ? `http://localhost:8080/medical/${id}`
      : "http://localhost:8080/medical/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMedicalData(data))
      .catch((err) => console.log(medicalData));
  }, [id]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <img
            src="https://pnghq.com/wp-content/uploads/the-mandalorian-helmet-png-image-free-transparent-download-high-quality-images-768x1126.png"
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
      <center>
        <MedicalTable data={medicalData} />
      </center>
    </Box>
  );
};

export default Medical;
