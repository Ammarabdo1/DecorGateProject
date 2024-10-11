import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { useEffect } from "react";

import {
  BackGroundColorContainer,
  ProjectsComponent,
  TextContainer,
  BottomProjects,
} from "../utils/styled";
import { AR, USA } from "../utils/translation";

//! mui component
import { Typography, Grid, Button } from "@mui/material";

//! mui icons
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

//! react-router
import { Link } from "react-router-dom";

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ProjectsImages({ checkSaudiFlag, checkDarkMode }) {
  const parallax = useRef(null);
  return (
    <ProjectsComponent checkDarkMode={checkDarkMode}>
      <div className="all-projects">
        <Parallax ref={parallax} pages={6}>
          <TextContainer
            checkSaudiFlag={checkSaudiFlag}
            checkDarkMode={checkDarkMode}
          >
            <ParallaxLayer
              offset={.05}
              speed={-0.3}
              style={{
                pointerEvents: "none",

              }}
            >
              <Grid container>
                <Grid
                  md={7}
                  sm={12}
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Typography variant="h2">
                    {checkSaudiFlag ? AR.TITLE : USA.TITLE}{" "}
                    <TipsAndUpdatesIcon className="lamp-icon" />
                  </Typography>
                  <Typography variant="subtitle1">
                    {checkSaudiFlag ? AR.DIS : USA.DIS}
                  </Typography>
                </Grid>
              </Grid>
            </ParallaxLayer>
          </TextContainer>

          <BackGroundColorContainer checkDarkMode={checkDarkMode}>
            <ParallaxLayer offset={1} speed={1} className="bg-p1" />
            <ParallaxLayer offset={2} speed={1} className="bg-p2" />
          </BackGroundColorContainer>

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />

            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />

            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />

            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <BottomProjects>
            <ParallaxLayer
              offset={3}
              speed={-0.4}
              className='bottom-images'
            >
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
            </ParallaxLayer>

            <ParallaxLayer
              offset={3.3}
              speed={-0.4}
              className='bottom-images'
            >
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
            </ParallaxLayer>

            <ParallaxLayer
              offset={3.6}
              speed={-0.4}
              className='bottom-images'
            >
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
            </ParallaxLayer>

            <ParallaxLayer
              offset={3.9}
              speed={-0.4}
              className='bottom-images'
            >
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
              <img src='images/real-projects/2.jpg'/>
            </ParallaxLayer>
          </BottomProjects>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("server")} style={{ width: "15%" }} />
            <img src={url("server")} style={{ width: "15%" }} />
            <img src={url("server")} style={{ width: "15%" }} />
            <img src={url("server")} style={{ width: "15%" }} />
            <img src={url("server")} style={{ width: "15%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("bash")} style={{ width: "40%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("clients-main")} style={{ width: "40%" }} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </ProjectsComponent>
  );
}
