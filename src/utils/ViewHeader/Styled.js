import styled from "styled-components";
import bgImg from "./images/mainM.jpg";
import bgImgM from "./images/mainM.jpg";

export const HeaderComponent = styled.div`
  position: relative;
  overflow: hidden;
  height: 80vh;
`;

export const ElementHeader = styled.div`
  position: relative;
  @keyframes scale {
    0% {
      opacity(1);
    }

    50% {
      opacity(.5);
    }

    100% {
      opacity(1);
    }
  }

  animation: scale 12s ease infinite alternate;
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
  transition: font-weight .001s ease;
  ${(props) => (props.checkDarkMode && "font-weight: 900" )};
    font-size: 10rem;
    width: fit-content;
    color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
    background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
    backdrop-filter: blur(
      ${(props) => (props.checkDarkMode ? "0px" : "100px")}
    );
    padding: ${(props) => (props.checkDarkMode ? "35px 0" : "35px 10px")};
    border-bottom: 3px solid
      ${(props) => (props.checkDarkMode ? "#eece95" : "")};
    line-height: 80px;
  }

  h3 {
    font-size: 3rem;
    width: fit-content;
    color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
    background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
    backdrop-filter: blur(
      ${(props) => (props.checkDarkMode ? "0px" : "100px")}
    );
    padding: ${(props) => (props.checkDarkMode ? "10px 0" : "0 10px")};
  }

  @media (max-width: 1000px) {
    height: 88vh;
    background: url(${bgImgM});
    background-size: cover;
    background-position: center;

    h2 {
      font-size: 4.5rem;
      line-height: 65px;
      ${(props) => !props.checkSaudiFlag && `font-size: 3rem`}
    }

    h3 {
      font-size: 1.3rem;
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
