import About from "../components/About";
import Projects from '../components/Projects'
import Services from "../components/Services";
import ViewHeader from "../components/ViewHeader";
import AOS from 'aos'
import 'aos/dist/aos.css'
const MainUSA = (props) => {
  AOS.init()
  return (
    <div data-aos='fade-down' data-aos-duration='2000'>
      <ViewHeader checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <About checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Projects checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Services checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      </div>
  );
};
export default MainUSA;
