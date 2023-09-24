// Important React Dependendcies
import React from 'react';

//Styles
import './App.css';

// Importing the router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Importing the External Components
import Pages from './Pages/Pages';
import ObjectivePages from './Pages/SubPages/ObjectivePages/ObjectivePages';
import OverviewPages from './Pages/SubPages/OverviewPages/OverviewPages';
import CurrentPage from './Pages/SubPages/Current/CurrentPage';
import PR from './Pages/SubPages/PolicyReport/PR';
import Entrepreneurship from './Pages/SubPages/Entrepreneurship/Entrepreneurship';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Use the element prop instead of the Component prop */}
          <Route path="/BioNews" element={<OverviewPages />} exact />
          <Route path="/OurMission" element={<ObjectivePages />} exact />
          <Route path="/" element={<Pages />} exact />
          <Route path="/Current" element={<CurrentPage />} exact />
          <Route path="/PolicyReport" element={<PR />} exact />
          <Route
            path="/Entrepreneurship"
            element={<Entrepreneurship />}
            exact
          />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
