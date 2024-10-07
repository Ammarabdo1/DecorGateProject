import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
// import Media from "../components/Media";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ViewHeader from "../components/ViewHeader";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Main = (props) => {
  AOS.init()
  return (
    <div data-aos='fade-down' data-aos-duration='2000'>
      <ViewHeader checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      {/* <Media/> */}
      <About checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Projects checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Services checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <ContactUs checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Footer checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
    </div>
  );
};
export default Main;
