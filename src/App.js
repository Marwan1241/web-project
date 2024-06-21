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
import Login from "./components/SignUp";
const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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
          <Route path="/sign-up" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />

          <Route
            path="/careers-form/:positionTitle"
            element={<CareersFormPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isInAdminSection() && <Leads />}
        {!isInAdminSection() && <Footer />}
      </div>
    </Router>
  );
}
app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})


export default App;
