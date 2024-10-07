import React from "react";
import {
  FooterComponent,
  P1Description,
  P2Links,
  P3Media,
  P4Contact,
} from "../utils/Footer/styled";

import { AR, USA } from "../utils/Footer/translation";

import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook } from "react-icons/fa";
import LinkIcon from "@mui/icons-material/Link";

// import "../Css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ checkDarkMode, checkSaudiFlag }) => {
  AOS.init();
  return (
    <FooterComponent
      checkDarkMode={checkDarkMode}
      checkSaudiFlag={checkSaudiFlag}
    >
      <Grid container className="footer">
        <Grid md={12} sm={12} className="img-container">
          <div className="img-main" data-aos="fade-up" data-aos-duration="2000">
            <div className="img" data-aos="zoom-out" data-aos-duration="2000">
              <img
                src="images/Footer.png"
                alt="decorGate"
                data-aos="fade-down"
                data-aos-duration="2000"
              />
            </div>
            <div className="rotate-img"></div>
          </div>
        </Grid>

        <Grid
          md={3}
          sm={12}
          className="details"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <P1Description checkDarkMode={checkDarkMode}>
            <Typography variant="subtitle1">
              <span>{checkSaudiFlag ? AR.des_title : USA.des_title}</span>,{" "}
              {checkSaudiFlag ? AR.des : USA.des},{" "}
              {checkSaudiFlag ? AR.des2 : USA.des2}.
            </Typography>
          </P1Description>
        </Grid>

        <Grid md={3} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <P2Links checkDarkMode={checkDarkMode}>
            <div className="pages">
              <Typography variant="h5">
                {checkSaudiFlag ? AR.title : USA.title}{" "}
                <LinkIcon className="link-icon" />
              </Typography>
              <Link to="/">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[0] : USA.links[0]}
                </Typography>
              </Link>
              <Link to="/about">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[1] : USA.links[1]}
                </Typography>
              </Link>
              <Link to="/projects">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[2] : USA.links[2]}
                </Typography>
              </Link>
              <Link to="/know">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[3] : USA.links[3]}
                </Typography>
              </Link>
              <Link to="/services">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[4] : USA.links[4]}
                </Typography>
              </Link>
              <Link to="/contact">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[5] : USA.links[5]}
                </Typography>
              </Link>
            </div>
          </P2Links>
        </Grid>

        <Grid md={3} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <P3Media checkDarkMode={checkDarkMode}>
            <div className="medias">
              <Typography variant="h5">
                {checkSaudiFlag ? AR.media : USA.media}
              </Typography>
              <Link to="https://wa.me/+201112644891">
                <WhatsAppIcon className="media whats" />
              </Link>
              <Link to="https://www.instagram.com/decorgate1?igsh=MW4xMnlqdm9rdmNxeA==">
                <img src="images/icons/instagram.ico" className="media insta" />
              </Link>
              <Link to="https://www.facebook.com/people/Decor-Gate/61565983628977/?mibextid=qi2Omg&rdid=6YlbHMdOiKox9LKj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1222LzdtXPGTAdM5%2F%3Fmibextid%3Dqi2Omg">
                <FaFacebook className="media face" />
              </Link>
            </div>
          </P3Media>
        </Grid>

        <Grid md={3} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <P4Contact checkDarkMode={checkDarkMode}>
            <div>
              <Typography variant="h5">
                {checkSaudiFlag ? AR.contact : USA.contact}
              </Typography>
              <Typography variant="subtitle2">
                {checkSaudiFlag ? AR.email : USA.email}
              </Typography>
            </div>
          </P4Contact>
        </Grid>

        <Grid md={12} sm={12} style={{border:'1px solid'}} >
          {checkSaudiFlag ? AR.copyright : USA.copyright}
        </Grid>
      </Grid>
    </FooterComponent>
  );
};

export default Footer;
