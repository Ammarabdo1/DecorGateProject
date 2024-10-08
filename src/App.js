import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./Css/App.css";
import Main from "./Views/Main";
import MainUSA from "./Views/MainUSA";
import StartUpLoader from "./Views/StartUpLoader";
import NotFound from "./Views/NotFound";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  //TODO>> make a style to home at start up the code
  const [checkClickLink, setCheckClickLink] = useState("Home");
  //TODO>> Toggle color of page
  const [checkDarkMode, setCheckDarkMode] = useState(true);
  //TODO>> check saudi flag
  const [checkSaudiFlag, setCheckSaudiFlag] = useState(true);

  //TODO>> check loader
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 4000);
  }, []);

  return (
    <div
      style={{
        direction: checkSaudiFlag ? "rtl" : "ltr",
        textAlign: checkSaudiFlag ? "right" : "left",
      }}
    >
      {loader ? (
        <StartUpLoader setLoader={setLoader} style={{ overflow: "hidden" }} />
      ) : checkSaudiFlag ? (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
            checkClickLink={checkClickLink}
            setCheckClickLink={setCheckClickLink}
          />

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Main
                    checkDarkMode={checkDarkMode}
                    setCheckDarkMode={setCheckDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/*"
              element={<NotFound setCheckClickLink={setCheckClickLink} />}
            />

            <Route
              path="/about"
              element={
                <div>
                  <AboutUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />
          </Routes>

          <Footer
            checkDarkMode={checkDarkMode}
            checkSaudiFlag={checkSaudiFlag}
          />
        </Router>
      ) : (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
            checkClickLink={checkClickLink}
            setCheckClickLink={setCheckClickLink}
          />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <MainUSA
                    checkDarkMode={checkDarkMode}
                    setCheckDarkMode={setCheckDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div>
                  <AboutUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer
            checkDarkMode={checkDarkMode}
            checkSaudiFlag={checkSaudiFlag}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
