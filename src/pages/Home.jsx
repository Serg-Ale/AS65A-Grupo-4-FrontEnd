import { useState } from "react";
import Header from "../components/Header.jsx";
import LoginModal from "../components/LoginModal.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";

const Home = () => {
  const [action, setAction] = useState("");

  return (
    <>
      <Header setAction={ setAction } />
      <LoginModal isOpen={ action === "login-modal" } onClose={ () => setAction("") } />
      <Hero />
      <About />
    </>
  );
};

export default Home;
