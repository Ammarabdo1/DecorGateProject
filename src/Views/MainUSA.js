import About from "../components/About";
import Projects from '../components/Projects'
import Services from "../components/Services";
import ViewHeader from "../components/ViewHeader";
const MainUSA = (props) => {
  return (
    <>
      <ViewHeader checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <About checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Projects checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Services checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      </>
  );
};
export default MainUSA;
