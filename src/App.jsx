import { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Clients from "./components/Clients.jsx";
import Experience from "./components/Experience.jsx";
import Statistics from "./components/Statistics.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Contact from "./components/Contact.jsx";
import Subscribe from "./components/Subscribe.jsx";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className={`${mobileMenu ? "max-h-screen overflow-hidden" : "relative"}`}
    >
      <Header />
      <div className="relative">
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Experience />
        <Statistics />
        <Hobbies />
        <Contact />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
