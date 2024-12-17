import { useState } from "react";
import Header from "../components/Header.jsx";
import LoginModal from "../components/LoginModal.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  const [action, setAction] = useState("");

  return (
    <>
      <Header setAction={ setAction } />
      <LoginModal isOpen={ action === "login-modal" } onClose={ () => setAction("") } />
      <Hero />
    </>
  );
};

export default Home;
