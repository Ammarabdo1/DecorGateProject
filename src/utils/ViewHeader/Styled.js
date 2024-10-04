import styled from "styled-components";
import bgImg from "./images/main.png";
import bgImgM from "./images/mobile.jpeg";

export const ElementHeader = styled.div`
  position: relative;
  
  height: 80vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &::after {
    content: "";
    transition: all 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(props) =>
      props.checkDarkMode &&
      `background-color: #00000058;
    z-index: -1;`}
  }
  h2 {
    width: fit-content;
    color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
    background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
    backdrop-filter: blur(
      ${(props) => (props.checkDarkMode ? "0px" : "100px")}
    );
    padding: ${(props) => (props.checkDarkMode ? "0" : "0 10px")};
      border-bottom: 3px solid ${(props) => (props.checkDarkMode ? "#eece95" : "")};
    line-height: 80px;
  }

  h3 {
    width: fit-content;
    color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
    background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
    backdrop-filter: blur(
      ${(props) => (props.checkDarkMode ? "0px" : "100px")}
    );
    padding: ${(props) => (props.checkDarkMode ? "0" : "0 10px")};
  }

  @media (max-width: 1000px) {
    margin-top: 12vh;
    height: 88vh;
    background: url(${bgImgM});
    background-size: cover;
    background-position: center;

    h2 {
      font-size: 3.5rem;
      line-height: 65px;
      ${(props) => !props.checkSaudiFlag && `font-size: 3rem`}
    }

    h3 {
      font-size: 2.8rem;
      ${(props) => !props.checkSaudiFlag && `font-size: 2rem`}
    }
  }

  .change-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    will-change: opacity;
    z-index: -1;
  }
`;
