import { Button, Typography, Box } from "@mui/material";
import * as React from "react";
import TextField from '@mui/material/TextField';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const colorPalette = {
    primaryDark: "light blue",
    primary: "light blue",
    secondary: "white",
    tertiary: "white",
    neutral: "white",
};
const StyledLink = styled(Link)({
    textDecoration: "none",
    color: colorPalette.neutral,
    marginLeft: "1rem",
    "&:hover": {
        color: colorPalette.secondary,
    },
});
const StyledAppBar = styled(AppBar)({
    backgroundColor: colorPalette.primary,
});
export default function AddPersonnel() {

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
            <div>
                <Box
                    sx={{
                        height: 50
                    }}>
                    <center>
                        <h2>Add New Personnel</h2>
                    </center>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& .MuiTextField-root': { width: '25ch' },
                    }}
                >
                    <TextField label={'Name'} id="AddFormName" color="primary" margin="normal" focused />
                    <TextField label={'DOD Number'} id="AddFormDOD_number" color="primary" margin="normal" focused />
                    <TextField label={'Medical ID'} id="AddFormMedical" color="primary" margin="normal" focused />
                    <TextField label={'Training ID'} id="AddFormTraining" color="primary" margin="normal" focused />
                    <TextField label={'Deployable'} id="AddFormDeployable" color="primary" margin="normal" focused />
                    <Link to="/">
                        <div>
                            <Box
                                sx={{
                                    padding: '25px'
                                }}>
                                <Button variant="contained" margin="normal">Add Personnel</Button>
                            </Box>
                        </div>
                    </Link>
                </Box>
            </div>
        </Box>
    );
};