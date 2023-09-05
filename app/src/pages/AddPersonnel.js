import { Button, Typography, Box } from "@mui/material";
import * as React from "react";
import TextField from '@mui/material/TextField';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Name from "faker/lib/name";


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

            medicalStatus: (formData.get('medicalStatus') === "green" ? "green" : "red"),
            checkup_due_by: (new Date(formData.get('checkup_due_by')) === undefined ? new Date("12/31/1999") : 
                            new Date(formData.get('checkup_due_by')) === null ? new Date("12/31/1999") : 
                            new Date(formData.get('checkup_due_by')).toLocaleString() === "Invalid Date" ? 
                            new Date("12/31/1999") : new Date(formData.get('checkup_due_by'))),
            immunization_due: (formData.get('immunization_due') === true ? true : false),
            trainingStatus: (formData.get('trainingStatus') === "green" ? "green" : "red"),
            training_type_id: (isNaN(Number(formData.get('training_type_id'))) ? Math.floor(Math.random() * 21) :
            Number(formData.get('training_type_id')) < 1 ? Math.floor(Math.random() * 21) :
            Number(formData.get('training_type_id')) > 20 ? Math.floor(Math.random() * 21) :
            formData.get('training_type_id').toString().length === 0 ? Math.floor(Math.random() * 21) : Number(formData.get('training_type_id'))),
            date_completed: (new Date(formData.get('date_completed')) === undefined ? new Date("12/31/1999") : 
                            new Date(formData.get('date_completed')) === null ? new Date("12/31/1999") : 
                            new Date(formData.get('date_completed')).toLocaleString() === "Invalid Date" ? 
                            new Date("12/31/1999") : new Date(formData.get('date_completed')))
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
            .then(response => {
                navigate("/");
            })
            .catch((error) => console.log(error));

    };
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
                            color: colorPalette.tertiary,
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
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        '& .MuiTextField-root': { width: '25ch' },
                        color: colorPalette.secondary,
                    }}
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: 50
                                    }}>
                                    <center>
                                        <h2>Personnel Information</h2>
                                    </center>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& .MuiTextField-root': { width: '25ch' },
                                    }}>
                                    <TextField name="name" label={'Name'} id="AddFormName" color="success" margin="normal" focused />
                                    <TextField name="DOD_number" label={'DOD Number'} id="AddFormDOD_number" color="success" margin="normal" focused />
                                    <TextField name="deployable" label={'Deployable'} id="AddFormDeployable" color="success" margin="normal" focused />
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: 50
                                    }}>
                                    <center>
                                        <h2>Medical Information</h2>
                                    </center>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& .MuiTextField-root': { width: '25ch' },
                                    }}>
                                    <TextField name="medicalStatus" label={'Status'} id="AddFormMedicalStatus" color="success" margin="normal" focused />
                                    <TextField name="checkup_due_by" label={'Checkup Due'} id="AddFormCheckup" color="success" margin="normal" focused />
                                    <TextField name="immunization_due" label={'Immunization'} id="AddFormImmunization" color="success" margin="normal" focused />
                                    <Box
                                        sx={{
                                            padding: '25px'
                                        }}>
                                        <Button
                                            variant="contained"
                                            margin="normal"
                                            type="submit"
                                            color="success"
                                        >Add Personnel</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: 50
                                    }}>
                                    <center>
                                        <h2>Training Information</h2>
                                    </center>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& .MuiTextField-root': { width: '25ch' },
                                    }}>
                                    <TextField name="trainingStatus" label={'Status'} id="AddFormTrainingStatus" color="success" margin="normal" focused />
                                    <TextField name="training_type_id" label={'Training Type'} id="AddFormTrainingType" color="success" margin="normal" focused />
                                    <TextField name="date_completed" label={'Date Completed'} id="AddFormDateCompleted" color="success" margin="normal" focused />
                                </Box>
                            </Grid>
                        </Grid>
                </Box>
            </div>
        </Box>
    );
};