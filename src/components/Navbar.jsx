import React, { useState, useEffect } from "react";

//! responsive navbar
import TemporaryDrawer from "../utils/Navbar/ResposiveNavbar";

//! mui components
import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

//! mode color
import SwitchModeColor from "../utils/Navbar/MaterialUISwitch";

//! whats app Icon
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = (props) => {
  //TODO>> make a style to home at start up the code
  const [checkClickLink, setCheckClickLink] = useState("Home");

  //TODO>> check scroll
  const [checkScroll, setCheckScroll] = useState(false);

  //TODO>> fetch widow width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //! check scroll to add background if scroll to navbar
  useEffect(() => {
    window.addEventListener("scroll", () => setCheckScroll(window.scrollY > 0));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <>
      {windowWidth < 1000 ? (
        <TemporaryDrawer
          checkSaudiFlag={props.checkSaudiFlag}
          setCheckSaudiFlag={props.setCheckSaudiFlag}
          checkDarkMode={props.checkDarkMode}
          setCheckDarkMode={props.setCheckDarkMode}
        />
      ) : (
        <Box
          component="navbar"
          className={`navbar ${
            checkScroll
              ? props.checkDarkMode
                ? "navbar-scroll"
                : "navbar-scroll-white-mode"
              : ""
          } `}
        >
          <ol style={{ listStyleType: "none" }}>
            <li>
              <img
                className="navbar-img"
                src="images/icons/NavbarLogo.png"
                alt="Logo"
                style={{ borderRadius: "50%" }}
              />
            </li>
            <Stack direction="row" spacing={4}>
              <li>
                {/* //! Home Link */}
                <Link
                  to="/"
                  onClick={() => setCheckClickLink("Home")}
                  className={checkClickLink == "Home" ? "link1" : "link"}
                >
                  {props.checkSaudiFlag ? 'الرئيسية' : 'Home'} 
                </Link>
              </li>
              <li>
                <Link className="link"></Link>
              </li>
              {/* //! About Link */}
              <li>
                <Link
                  to="/heros"
                  onClick={() => setCheckClickLink("heros")}
                  exact
                  className={checkClickLink == "heros" ? "link1" : "link"}
                >
                 {props.checkSaudiFlag ? ' من نحن' : 'About Us'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/family"
                  onClick={() => setCheckClickLink("family")}
                  exact
                  className={checkClickLink == "family" ? "link1" : "link"}
                >
                  {props.checkSaudiFlag ? 'البعض من مشاريعنا' : 'Some of our projects'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/Championships"
                  onClick={() => setCheckClickLink("championships")}
                  exact
                  className={
                    checkClickLink == "championships" ? "link1" : "link"
                  }
                >
                  {" "}
                  {props.checkSaudiFlag ? 'اعرف اكثر' : 'Know More'} 
                </Link>
              </li>

              <li>
                <Link
                  to="/heros"
                  onClick={() => setCheckClickLink("AboutUs")}
                  exact
                  className={checkClickLink == "AboutUs" ? "link1" : "link"}
                >
                  {" "}
                  {props.checkSaudiFlag ? 'خدماتنا' : 'Services'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/heros"
                  onClick={() => setCheckClickLink("Send")}
                  exact
                  className={checkClickLink == "Send" ? "link1" : "link"}
                >
                 {props.checkSaudiFlag ? ' تواصل معنا' : 'Contact Us'} 
                </Link>
              </li>
            </Stack>
            <Stack direction="row" spacing={4}>
              <li>
                <Link target="_blank" to="https://wa.me/+201112644891">
                  <Button
                    color="warning"
                    variant="outlined"
                    className="btn-hover"
                  >
                    <WhatsAppIcon
                      style={{ color: "#5fffa2", marginLeft: "3px" }}
                    />
                    Contact Us
                  </Button>
                </Link>
              </li>
              <li>
                <Link className="link"></Link>
              </li>

              <li>
                {/*//! switch mode color  */}
                <SwitchModeColor
                  checkDarkMode={props.checkDarkMode}
                  setCheckDarkMode={props.setCheckDarkMode}
                />
              </li>

              {/*//! Language change Button  */}
              <li>
                <Button
                  onClick={() => {
                    props.setCheckSaudiFlag(!props.checkSaudiFlag)
                  }}
                  style={{ height: "100%" }}
                >
                  <img
                    style={{ width: "30px" }}
                    src={props.checkSaudiFlag ? "images/USAFlag.png" : "images/saudiFlag.png" }
                    alt="flag"
                  />
                </Button>
              </li>
            </Stack>
          </ol>
        </Box>
      )}
    </>
  );
};

export default Navbar;
