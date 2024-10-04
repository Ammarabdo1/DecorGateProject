import About from "../components/About";
// import Media from "../components/Media";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ViewHeader from "../components/ViewHeader";
const Main = (props) => {
  return (
    <>
      <ViewHeader checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      {/* <Media/> */}
      <About checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Projects checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Services checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
    </>
  );
};
export default Main;
