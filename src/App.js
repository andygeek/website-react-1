import React from "react";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { HeroSection } from "./components/hero-section/HeroSection.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Switch>
               <Route path="/" exact>
                  <HeroSection />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
