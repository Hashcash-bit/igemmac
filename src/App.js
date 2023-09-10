// Important React Dependendcies
import React from "react";

//Styles
import "./App.css";

// Importing the router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importing the External Components
import Pages from "./Pages/Pages";
import ObjectivePages from "./Pages/SubPages/ObjectivePages/ObjectivePages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Use the element prop instead of the Component prop */}
          <Route path="/OurMission" element={<ObjectivePages />} exact />
          <Route path="/" element={<Pages />} exact />
          {/* <Route path="/Login" element={<Login />} exact /> */}
          {/* <Route path="/Signup" element={<SignUp />} exact /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
