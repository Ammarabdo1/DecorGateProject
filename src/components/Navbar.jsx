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
                  onClick={() => props.setCheckClickLink("Home")}
                  className={props.checkClickLink == "Home" ? "link1" : "link"}
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
                  to="/about"
                  onClick={() => props.setCheckClickLink("heros")}
                  exact
                  className={props.checkClickLink == "heros" ? "link1" : "link"}
                >
                 {props.checkSaudiFlag ? ' من نحن' : 'About Us'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => props.setCheckClickLink("family")}
                  exact
                  className={props.checkClickLink == "family" ? "link1" : "link"}
                >
                  {props.checkSaudiFlag ? 'البعض من مشاريعنا' : 'Some of our projects'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/more"
                  onClick={() => props.setCheckClickLink("championships")}
                  exact
                  className={
                    props.checkClickLink == "championships" ? "link1" : "link"
                  }
                >
                  {" "}
                  {props.checkSaudiFlag ? 'اعرف اكثر' : 'Know More'} 
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  onClick={() => props.setCheckClickLink("AboutUs")}
                  exact
                  className={props.checkClickLink == "AboutUs" ? "link1" : "link"}
                >
                  {" "}
                  {props.checkSaudiFlag ? 'خدماتنا' : 'Services'} 
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => props.setCheckClickLink("Send")}
                  exact
                  className={props.checkClickLink == "Send" ? "link1" : "link"}
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
