import React, { useState, useEffect } from "react";
import SwitchModeColor from "./MaterialUISwitch";

//! styled components
import styled from "styled-components";

//! mui components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//! mui Icons
import HomeIcon from "@mui/icons-material/Home";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoIcon from "@mui/icons-material/Info";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SpeedIcon from '@mui/icons-material/Speed';

// Media icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaFacebook } from "react-icons/fa";
// list Icon
import ReorderIcon from "@mui/icons-material/Reorder";
import ClearAllIcon from "@mui/icons-material/ClearAll";

//! react-router
import { Link } from "react-router-dom";

//! aos animation scroll
import AOS from "aos";
import "aos/dist/aos.css";

export default function TemporaryDrawer(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  //!stats
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //! function show responsive navbar
  const DrawerList = (
    <Box
      sx={{ width: "250px", background: "#585858", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* //TODO>> logo img */}
      <div style={{ margin: "10px", direction: props.checkSaudiFlag && "ltr" }}>
        <img src="images/icons/ResponsiveLogo.png" width="200" />
      </div>
      <Divider />

      {/* //TODO>> pages list */}
      <List style={{ color: "#EECE95" }}>
        {/* Home */}
        <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "الرئيسية" : "Home"}
            />
          </ListItemButton>
        </ListItem>

        {/* about */}
        <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "من نحن" : "About Us"}
            />
          </ListItemButton>
        </ListItem>

        {/* works */}
        <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          {" "}
          <ListItemButton component={Link} to="/projects">
            <ListItemIcon>
              <AutoFixHighIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? " أعمالنا" : "Projects"}
            />
          </ListItemButton>
        </ListItem>

        {/* more */}
        <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          <ListItemButton component={Link} to="/more">
            <ListItemIcon>
              <MoreTimeIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "اعرف اكثر" : "Know More"}
            />
          </ListItemButton>
        </ListItem>

        {/* services */}
        <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          <ListItemButton component={Link} to="/more">
            <ListItemIcon>
              <SpeedIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "خدماتنا " : "Services"}
            />
          </ListItemButton>
        </ListItem>

        {/* contact */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <ListItemIcon>
              <ContactMailIcon style={{ color: "#E5E5E5" }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "تواصل معنا" : "Contact Us"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div >
      <NavbarContainer checkDarkMode={props.checkDarkMode}  style={{width:'100%', overflow:'hidden', }}>
        <img
          className="navbar-img"
          src="images/icons/NavbarLogo.png"
          alt="Logo"
          width="45"
          style={{ borderRadius: "50%" }}
        />

        <div>
          <Button
            onClick={() => props.setCheckSaudiFlag(!props.checkSaudiFlag)}
            style={{ height: "100%" }}
          >
            <img
              style={{ width: "30px" }}
              src={
                props.checkSaudiFlag
                  ? "images/USAFlag.png"
                  : "images/saudiFlag.png"
              }
              alt="flag"
            />
          </Button>

          <SwitchModeColor
            checkDarkMode={props.checkDarkMode}
            setCheckDarkMode={props.setCheckDarkMode}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button onClick={toggleDrawer(true)}>
            {!open && (
              <ReorderIcon
                data-aos="flip-left"
                data-aos-duration="400"
                className="list-icon"
              />
            )}
            {open && (
              <ClearAllIcon
                data-aos="flip-left"
                data-aos-duration="400"
                className="list-icon"
              />
            )}
          </Button>
        </div>

        <Drawer
        anchor={props.checkSaudiFlag ? "right" : "left"}
        open={open}
        onClose={toggleDrawer(false)}
        style={{ direction: props.checkSaudiFlag && "rtl", width:'100px', }}
      >
        {DrawerList}
        <WhatsContainer>
          <Link target="_blank" to="https://wa.me/+201112644891">
            <WhatsAppIcon className="whats-icon" />
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/people/Decor-Gate/61565983628977/?mibextid=qi2Omg&rdid=6YlbHMdOiKox9LKj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1222LzdtXPGTAdM5%2F%3Fmibextid%3Dqi2Omg"
          >
            <FaFacebook className="face-icon" />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/decorgate1?igsh=MW4xMnlqdm9rdmNxeA=="
          >
            <img src="images/icons/instagram.ico" className="instagram-icon" />
          </Link>
        </WhatsContainer>
      </Drawer>
      </NavbarContainer>

      {/* //TODO>> list links */}
      
    </div>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #5858585f;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  z-index: 1000;
  min-height: 12vh;
  box-shadow: 0px 0px 18px 7px ${props => props.checkDarkMode ? '#E5E5E5' : '#000000de'};

  padding-right: 20px;

  .list-icon {
    color: #eece95;
    font-size: 2rem;
    outline-offset: 3px;
    outline: 1px solid white;
    transition: all 1s ease;
  }

`;

const WhatsContainer = styled.div`
  .whats-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #5fffa2;
    transition: all 0.7s ease;
    position: absolute;
    bottom: 20px;
    left: 20px;
    &:hover {
        transform: rotateY(180deg) scale(1.2);
        box-shadow: 0 0 8px 2px ; 
        border-radius: 50%;
    }
  }

  .face-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #4fa4ff;
    transition: all 0.7s ease;
    position: absolute;
    bottom: 20px;
    left: 40%;
    &:hover {
        transform: rotateY(180deg) scale(1.2);
        box-shadow: 0 0 8px 2px ; 
        border-radius: 50%;
    }
  }

  .instagram-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #fcaf45;
    transition: all 0.7s ease;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 43px;
    &:hover {
        transform: rotateY(180deg) scale(1.2);
        box-shadow: 0 0 8px 2px ; 
        border-radius: 50%;
    }
  }
`;
