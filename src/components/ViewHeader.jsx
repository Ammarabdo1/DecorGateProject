import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import { ElementHeader } from "../utils/ViewHeader/Styled";
import { Typography } from "@mui/material";

import bgImg from "../utils/ViewHeader/images/H2.jpeg";
import bgImg2 from "../utils/ViewHeader/images/H3.jpg";
import bgImg3 from "../utils/ViewHeader/images/H4.jpeg";
import bgImg4 from "../utils/ViewHeader/images/H5.jpeg";

import mobileBgImg from "../utils/ViewHeader/images/M2.jpg";
import mBgImg2 from "../utils/ViewHeader/images/M3.jpg";
import mBgImg3 from "../utils/ViewHeader/images/M4.jpg";
import mBgImg4 from "../utils/ViewHeader/images/M5.jpg";

const slides = [bgImg, "", bgImg2, "", bgImg3, "", bgImg4, ""];

const mSlides = [mobileBgImg, "", mBgImg2, "", mBgImg3, "", mBgImg4, ""];

const ViewHeader = ({checkDarkMode, checkSaudiFlag}) => {
  const [showImgHover, setShowImgHover] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [index, set] = useState(0);

  useEffect(() => {
    const start = () => {
      setShowImgHover(true);
    };

    const stop = () => {
      setShowImgHover(false);
      setTimeout(start, 6000);
      setTimeout(stop, 12000);
    };

    const stopId = setTimeout(stop, 12000);

    return () => {
      clearTimeout(stopId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 3000, // Duration of the transition animation
    },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <>
      <ElementHeader checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} >
        <header>
          <Typography variant="h2">
            {checkSaudiFlag ? "بوابة الديكور" : "Decor Gate"}
          </Typography>
          <Typography variant="h3">
            {checkSaudiFlag ? "عالم من الفن" : "A world of art"}
          </Typography>
        </header>
        
          <div className="flex fill center">
            {transitions((style, i) => (
              <animated.div
                className="change-img"
                style={{
                  ...style,
                  backgroundImage:
                    width > 1000 ? `url(${slides[i-1]})` : `url(${mSlides[i-1]})`,
                }}
              />
            ))}
          </div>
        
      </ElementHeader>
    </>
  );
};

export default ViewHeader;
