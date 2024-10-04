import styled from "styled-components";
import bgImg from "./images/main.png";
import bgImgM from "./images/mobile.jpeg";

export const ElementHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(props) =>
      props.checkDarkMode &&
      `background: repeating-linear-gradient(45deg, #00000061, #e5e5e518 400px);
    z-index: -1;`}
  }
  h2 {
    color: #eece95;
    line-height: 80px;
  }

  h3 {
    color: #eece95;
  }

  @media (max-width: 1000px) {
    margin-top: 12vh;
    height: 88vh;
    background: url(${bgImgM});
    background-size: cover;
    background-position: center;

    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(props) =>
      props.checkDarkMode &&
      `background: repeating-linear-gradient(50deg, #00000061, #e5e5e518 140px);
    z-index: -1;`}
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
