import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useEffect, useRef } from "react";

function App() {

  const scrollRef = useRef(window.scrollY);

  useEffect(() => {

    const handleScroll = (e) => {      
      var transformUpdate="";
      (window.scrollY - scrollRef.current) <= 0 ? transformUpdate="translateY(0px)": transformUpdate="translateY(-200px)";

      document.getElementById("navbox").style.transform=transformUpdate;
      scrollRef.current = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header  />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
