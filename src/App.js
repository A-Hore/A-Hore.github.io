import "./App.css";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Github from "./components/github/Github";
import Gitstats from "./components/github/Gitstats";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Github />
      <Gitstats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
