import styled from "styled-components";
import bgImg from "../Images/ProjectsBg.jpg";

export const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
`;

export const HeaderElement = styled.div`
  height: 50vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: left 0 bottom -200px;
  z-index: 2;
  position: relative;

  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      width: fit-content;
      color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
      background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
      backdrop-filter: blur(
        ${(props) => (props.checkDarkMode ? "0px" : "100px")}
      );
      padding: ${(props) => (props.checkDarkMode ? "0" : "0 10px")};

      ${(props) =>
        props.checkDarkMode && props.checkSaudiFlag
          ? "padding-right: 10px"
          : "padding-left: 10px"};

      ${(props) =>
        props.checkDarkMode && props.checkSaudiFlag
          ? "border-right: 3px solid #eece95"
          : "border-left: 3px solid #eece95"};

      ${(props) =>
        props.checkDarkMode ? "border-bottom: 3px solid #eece95" : "none"};
    }
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

  @media (max-width: 1000px) {
    margin-top: 12vh;
    background-size: cover;
    background-position: center;

    h2 {
      ${(props) =>
        props.checkSaudiFlag
          ? `${props.checkDarkMode && "border-right: 2px solid"}`
          : `${props.checkDarkMode && "border-left: 2px solid"}`};
      font-size: 2rem;
      ${(props) =>
        props.checkSaudiFlag
          ? `padding: ${
              props.checkDarkMode ? "0 10px 1px 0 !important" : "0 3px"
            }`
          : `padding: ${
              props.checkDarkMode ? "0 0 1px 10px !important" : "0 3px"
            }`};
      ${(props) => !props.checkSaudiFlag && `font-size: 1.8rem`};
    }
  }
`;

export const ProjectsComponent = styled.div`
  .all-projects {
    width: 100%;
    min-height: 100vh;
    background: ${(props) => (props.checkDarkMode ? "#253237" : "#5858585f")};
  }
`;

export const TextContainer = styled.div`
  .text {
    ${(props) =>
      props.checkSaudiFlag ? "padding-right: 50px" : "padding-left: 50px"};
  }

  h2 {
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  .lamp-icon {
    font-size: 2rem;
  }

  h6 {
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    width: 80%;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  @media (max-width: 1000px) {
    min-height: ${(props) => (props.checkSaudiFlag ? "150vh" : "130vh")};
    padding: 0px;
    width: 100%;
    margin: 0;

    .text {
      margin-top: 350px;
      padding: 0;
    }

    h2 {
      padding-bottom: 4px;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 30px;
      box-shadow: 0 0 10px 1px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: 1.8rem;
        margin-bottom: 20px;
        `}
    }

    .lamp-icon {
      font-size: 1.7rem;
    }

    h6 {
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      width: 90%;
      margin: auto;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: .8rem;
        margin-bottom: 20px;
        `}
    }
  }
`;

export const BackGroundColorContainer = styled.div`
  .bg-p1 {
    background: ${(props) => (props.checkDarkMode ? "#172f498e" : "#EECE95")};
  }

  .bg-p2 {
    background: ${(props) => (props.checkDarkMode ? "#172f498e" : "#EECE95")};
  }
`;

export const BottomProjects = styled.div`
  .bottom-images {
        display: flex;
        justify-content: space-around;
        align-items: center;
        pointer-events: none;

  }

  img {
    width: 25%;
  }
`;
