import styled from "styled-components";
import bgImg from "./images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png";

export const ContactUsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  overflow: hidden;
  .contact-component {
  }
`;

export const ContactUsElement = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );
  .animation {
    opacity: 0.1;
    inset: -200%;
    width: 400%;
    height: 400%;
    position: absolute;
    background-size: 256px 256px;
    background-repeat: repeat;
    background: url("${bgImg}");
  }

  @media (max-width: 1000px) {
    min-height: 1200px;
  }
`;

export const TextComponent = styled.div`
  margin-bottom: 50px;
  .text {
    h6 {
      color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      margin-bottom: 20px;
      font-family: "Cairo", sans-serif;
      border-left: 5px solid
        ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      border-right: 5px solid
        ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      border-top: 1px solid
        ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      border-bottom: 1px solid
        ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      box-shadow: 0 0 10px 2px
        ${(props) => (props.checkDarkMode ? "#EECE95" : "#585858")};
      border-radius: 10px;
      outline: 1px solid
        ${(props) => (props.checkDarkMode ? "white" : "#585858")};
      outline-offset: 5px;
      width: fit-content;
      padding: 0 5px;
    }

    h3 {
      color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
      span {
        color: ${(props) => (props.checkDarkMode ? "#ebc481" : "#254367")};
      }
    }

    h5 {
      width: 300px;
      color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      font-family: "Cairo", sans-serif;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 30px;
    margin-right: 300px;

    h6 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.8rem;
      width: 50%;
    }

    h5 {
      width: 100px;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
`;

export const FromComponent = styled.div`
  .FormValidate {
    background-size: cover;
    display: flex;
    justify-content: center;

    .success {
      display: flex;
      color: green;
    }

    .flex {
      display: flex;
    }

    transition: all 1s ease;

    .form {
      position: relative;

      width: 600px;
      height: 480px;

      @keyframes freeRotate {
        0% {
          padding: 10px;
          transform: rotate(35deg);
          width: 10px;
          height: 10px;
          box-shadow: 0 0 10px 3px
            ${(props) => (props.checkDarkMode ? "#EECE95" : "#585858")};
        }
        50% {
          padding: 10px;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          transform: rotate(55deg);
          box-shadow: 0 0 10px 3px
            ${(props) => (props.checkDarkMode ? "#585858" : "#ebc481")};
        }
        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(35deg);
          box-shadow: 0 0 10px 3px
            ${(props) => (props.checkDarkMode ? "#EECE95" : "#585858")};
        }
      }

      @keyframes middleTransition {
        0% {
          padding: 10px;
          transform: rotate(0deg);
          width: 600px;
          height: 480px;
        }

        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(35deg);
        }
      }

      @keyframes onceRotate {
        0% {
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }
        100% {
          width: 600px;
          height: 480px;
          transform: rotate(0deg);
        }
      }

      ${(props) =>
        props.startPositionForm
          ? `animation: middleTransition 2s ease-in-out 1 alternate;`
          : props.selectField
          ? `animation: onceRotate 2s ease-in-out 1 alternate`
          : props.noneSelectField &&
            `animation: freeRotate 4s ease-in-out infinite alternate`};

      border-radius: 15px;
      background-color: #ffffff1b;
      box-shadow: 0 0 10px 3px
        ${(props) => (props.checkDarkMode ? "#EECE95" : "#585858")};
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      .mainStackInForm {
        position: absolute;
        width: 600px;
        height: 480px;
        border-radius: 15px;
        // background-color: #ffffff1b;
        box-shadow: 0 0 10px 1px
          ${(props) => (props.checkDarkMode ? "#EECE95" : "#585858")};
        padding: 20px;
        // -webkit-backdrop-filter: blur(20px);
        // backdrop-filter: blur(20px);

        .name-phone-fields {
          display: flex !important;
          flex-direction: row;

          .name-filed {
            width: 45%;
            margin-right: auto;
          }

          .phone-filed {
            width: 45%;
          }
        }

        .card {
          input {
            display: none;
          }

          label {
            display: flex;
          }
        }

        .loader {
          display: flex;
          justify-content: center;
        }
      }
    }

    @media (max-width: 1000px) {
      .form {
        width: 290px;
        height: 500px;

        .mainStackInForm {
          width: 290px;
        height: 500px;
          .name-phone-fields {
          display: flex !important;
          flex-direction: column;

          .name-filed {
            width: 100%;
            margin-right: auto;
          }

          .phone-filed {
            width: 100%;
          }
        }
      }
    }
  }
`;
