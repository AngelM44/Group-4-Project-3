import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Medical from "./pages/Medical";
import Training from "./pages/Training";
import PersonnelDetails from "./pages/PersonnelDetails";
import TrainingType from "./pages/TrainingType";
import AddPersonnel from "./pages/AddPersonnel";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path='/personnel/new' element={<AddPersonnel setAuth={setAuth} />} />
        <Route
          path="/personnel/:id"
          element={<PersonnelDetails setAuth={setAuth} />}
        />
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
        <Route path="/medical" element={<Medical setAuth={setAuth} />} />
        <Route path="/medical/:id" element={<Medical setAuth={setAuth} />} />

        <Route path="/training" element={<Training setAuth={setAuth} />} />
        <Route path="/training/:id" element={<Training setAuth={setAuth} />} />
        <Route
          path="/training_type/:id"
          element={<TrainingType setAuth={setAuth} />}
        />
      </Routes>
    </>
  );
}

export default App;
