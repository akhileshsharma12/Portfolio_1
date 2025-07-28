
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import ToolsUsed from "./components/ToolsUsed";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Achievement from "./components/Achievement";
import Conference from "./components/Conference";
import Patents from "./components/Patents";
import Articles from "./components/Articles";
import ResearchPaper from "./components/ResearchPaper";


export default function Home() {
  return (
   <>
    <Navbar />
    <Header />
    <ScrollToTopButton />
    <About />
    <ToolsUsed />
    <Achievement />
    <Patents />
    <Conference />
    <Articles />
    <ResearchPaper />
    <Contact />
    <Footer />
   </>
  );
}
