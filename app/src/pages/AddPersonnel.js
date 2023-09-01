import { Button, Typography, Box } from "@mui/material";
import * as React from "react";
import TextField from '@mui/material/TextField';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Name from "faker/lib/name";

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
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData(event.currentTarget) // Use formData.get('name') to get the value from the "Name" text field.
        let newPersonnel = {
            name: (formData.get('name') === null ? "Christopher Hesser" :
            formData.get('name').toString().length === 0 ? "Christopher Hesser" : formData.get('name')),
            DOD_number: formData.get('DOD_number') === null ? 1234567890 : 
                        formData.get('DOD_number') > 2000000000 ? 1234567890 : 
                        isNaN(formData.get('DOD_number')) ? 1234567890 : 
                        formData.get('DOD_number') instanceof String ? 1234567890 :
                        formData.get('DOD_number') === undefined ? 1234567890 :
                        formData.get('DOD_number').toString().length === 0 ? 1234567890 : formData.get('DOD_number'),
            deployable: (formData.get('deployable') === "Yes" ? "Yes" : "No"),
            medical_id: formData.get('medical_id') || "0",
            training_id: formData.get('training_id') || "0"
          };
          fetch("http://localhost:8080/personnel/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPersonnel)
          })
            .then((rawResponse) => {
              if (!rawResponse.ok) {
                throw new Error(
                  `code: ${rawResponse.status}, status text: ${rawResponse.statusText}`
                );
              }
              return rawResponse.json();
            })
            .then((jsonifiedResponse) =>
              console.log("Jsonified data: ", jsonifiedResponse)
            )
            .catch((error) => console.log(error));
        navigate("/");
    };
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
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& .MuiTextField-root': { width: '25ch' },
                    }}
                    onSubmit={handleSubmit}
                >
                    <TextField name="name" label={'Name'} id="AddFormName" color="primary" margin="normal" focused />
                    <TextField name="DOD_number" label={'DOD Number'} id="AddFormDOD_number" color="primary" margin="normal" focused />
                    <TextField name="medical_id" label={'Medical ID'} id="AddFormMedical" color="primary" margin="normal" focused />
                    <TextField name="training_id" label={'Training ID'} id="AddFormTraining" color="primary" margin="normal" focused />
                    <TextField name="deployable" label={'Deployable'} id="AddFormDeployable" color="primary" margin="normal" focused />
                        <Box
                            sx={{
                                padding: '25px'
                            }}>
                            <Button
                                variant="contained"
                                margin="normal"
                                type="submit"
                            >Add Personnel</Button>
                        </Box>
                </Box>
            </div>
        </Box>
    );
};