import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ButtonAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Leads from "./components/Leads";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Insights from "./components/Insights";
import IftarForm from "./components/IftarForm";
import EventPage from "./components/EventPage";
import NotFound from "./components/NotFound";
import Admin from "./components/admin-panel/Admin";
import CareersFormPage from "./components/CareersFormPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CompanyProfile from "./components/CompanyProfile";
import CompaniesList from "./components/CompaniesList";

//Scroll to top when navigating a new page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Function to determine if we're in the Admin section
  const isInAdminSection = () => {
    const currentPath = window.location.pathname;
    return currentPath.startsWith("/admin");
  };

  return (
    <Router>
      <div className="App">
        {!isInAdminSection() && <ButtonAppBar />}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iftar" element={<IftarForm />} />
          <Route path="/event/:eventId" element={<EventPage />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route
            path="/admin/dashboard/companies-list"
            element={<CompaniesList />}
          />

          <Route
            path="/careers-form/:positionTitle"
            element={<CareersFormPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {!isInAdminSection() && <Leads />} */}
        {!isInAdminSection() && <Footer />}
      </div>
    </Router>
  );
}

export default App;
