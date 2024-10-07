import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./Css/App.css";
import Main from "./Views/Main";
import MainUSA from "./Views/MainUSA";
import StartUpLoader from "./Views/StartUpLoader";
import NotFound from "./Views/NotFound";
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
            checkClickLink = {checkClickLink}
            setCheckClickLink = {setCheckClickLink}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  checkDarkMode={checkDarkMode}
                  setCheckDarkMode={setCheckDarkMode}
                  checkSaudiFlag={checkSaudiFlag}
                />
              }
            />

            <Route path="/*" element={<NotFound setCheckClickLink={setCheckClickLink} />} />
            {/* <Route
              path="/heros"
              element={
                <div>
                  <Hero checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            />

            <Route
              path="/family"
              element={
                <div>
                  <Al3rapyFamily checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            />
            <Route
              path="/Championships"
              element={
                <div>
                  <Championships checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            /> */}
          </Routes>
          {/* <Footer checkDarkMode={checkDarkMode} /> */}
        </Router>
      ) : (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
            checkClickLink = {checkClickLink}
            setCheckClickLink = {setCheckClickLink}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainUSA
                  checkDarkMode={checkDarkMode}
                  setCheckDarkMode={setCheckDarkMode}
                  checkSaudiFlag={checkSaudiFlag}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
            {/*<Route
               path="/heros"
               element={
                 <div>
                   <HeroUSA checkDarkMode={checkDarkMode} />
                   <ContactUsUSA checkDarkMode={checkDarkMode} />
                 </div>
               }
             />
             <Route
               path="/family"
               element={
                 <div>
                   <Al3rapyFamilyUSA checkDarkMode={checkDarkMode} />
                   <ContactUsUSA checkDarkMode={checkDarkMode} />
                 </div>
               }
             />*/}
          </Routes>
          {/* <FooterUSA checkDarkMode={checkDarkMode} />  */}
        </Router>
      )}
    </div>
  );
}

export default App;
