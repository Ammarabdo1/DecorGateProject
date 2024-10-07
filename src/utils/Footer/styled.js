import styled from "styled-components";

export const FooterComponent = styled.div`
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  .footer {
    padding-bottom: 180px;
    padding-right: 100px;
    position: relative;
    min-height: 70vh;
    background-image: radial-gradient(
      ${(props) =>
        props.checkDarkMode
          ? "circle at center, #bcbcbc, #585858"
          : "circle at center, white, #eecd95ae"}
    );

    .img-container {
      margin-top: 100px;
      height: fit-content;
      @keyframes changeBgMain {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes changeBg {
        0% {
          background: #172f49;
        }

        50% {
          background: #e5e5e526;
          transform: scale(1.1);
        }

        100% {
          background: #172f49;
        }
      }

      .img-main {
        position: relative;
        width: 120px;
        height: 120px;
        margin-right: 30px;

        .rotate-img {
          background: conic-gradient(
            #172f49,
            #254367,
            #172f49,
            #254367,
            #172f49,
            #254367,
            #172f49,
            #254367
          );
          z-index: -1;
          border-right: 5px solid silver;
          border-left: 5px solid silver;
          border-top: 5px solid gray;
          border-bottom: 5px solid gray;
          width: 120px;
          height: 120px;
          animation: changeBgMain 20s linear infinite;
          border-radius: 50%;
        }

        .img {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          margin-top: -45px; /* Half of element's height */
          margin-left: -45px;
          display: flex;
          justify-content: center;
          padding: 5px;
          transition: all 1s ease;
          width: 90px;
          height: 90px;
          box-shadow: 0 0 10px 3px #172f498e;
          border-radius: 50%;
          animation: changeBg 7s ease-in-out infinite;
          img {
            width: 100px;
          }
        }
      }
    }
  }
`;

export const P1Description = styled.div`
  width: 70%;
  h6 {
    margin-right: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    span {
      color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
      font-weight: 800;
    }
  }
`;
export const P2Links = styled.div`
  h5 {
    display: flex;
    align-items: center;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 20px;
    .link-icon {
      font-size: 1.8rem;
    }
  }

  a {
    text-decoration: none;
    h6 {
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
      margin-bottom: 10px;
      font-weight: 800;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }
`;
export const P3Media = styled.div`
  h5 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 20px;
  }

  .media {
    font-size: 2.1rem;
    margin-left: 25px;
    margin-top: 10px;
    transition: all 0.7s ease;
    &:hover {
      transform: rotateY(180deg) scale(1.2);
      box-shadow: 0 0 8px 2px;
      border-radius: 50%;
    }
  }

  .media.insta {
    width: 30px;
  }

  .media.whats {
    color: #5fffa2;
  }

  .media.face {
    color: #4fa4ff;
  }
`;
export const P4Contact = styled.div`
  h5 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 20px;
  }

  h6 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
  }
`;
