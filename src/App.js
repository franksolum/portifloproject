import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AboutMe from "./components/AboutMe";
//import Particles from "react-particles-js";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
function App() {
  return (
    <>
     {/** <Particles
       params={{
         particles: {
           number:{
             value:30,
             density:{
               enable: true,
               value_area:900
             }
           }
           
         }
       }}
      
      
      />**/}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;