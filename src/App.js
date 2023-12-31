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
import TR from './Pages/SubPages/TreatmentReport/TR';
import Entrepreneurship from './Pages/SubPages/Entrepreneurship/Entrepreneurship';
import IHR from './Pages/SubPages/IHR/IHR';
import Engineering from './Pages/SubPages/Engineering/Engineering';
import PartsNotebook from './Pages/SubPages/PartsNotebook/PartsNotebook';
import ResultsPage from './Pages/SubPages/Results/ResultsPage';
import NormModel from './Pages/SubPages/NormModel/NormModel';
import WR from './Pages/SubPages/WR/WR';
import Safety from './Pages/SubPages/Safety/Safety';
import Attributions from './Pages/SubPages/Attributions/Attributions';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Use the element prop instead of the Component prop */}
          <Route path="/human-practices" element={<IHR />} exact />
          <Route path="/description" element={<ObjectivePages />} exact />
          <Route path="/contribution" element={<PartsNotebook />} exact />
          <Route path="/" element={<Pages />} exact />
          <Route path="/womensreport" element={<WR />} exact />
          <Route path="/engineering" element={<Engineering />} exact />
          <Route path="/kineticmodel" element={<CurrentPage />} exact />
          <Route path="/normalizationmodel" element={<NormModel />} exact />
          <Route path="/results" element={<ResultsPage />} exact />
          <Route path="/treatment-report" element={<TR />} exact />
          <Route path="/safety" element={<Safety />} exact />
          <Route path="/attributions" element={<Attributions />} exact />
          <Route
            path="/Entrepreneurship"
            element={<Entrepreneurship />}
            exact
          />
          <Route path="/overview" element={<OverviewPages />} exact />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
