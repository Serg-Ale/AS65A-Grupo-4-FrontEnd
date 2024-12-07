import { useState } from "react";
import Header from "../components/Header.jsx";
import Modal from "../components/Modal.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  const [action, setAction] = useState("");

  return (
    <>
      <Header setAction={setAction} />
      <Modal action={action} setAction={setAction} />
      <Hero />
    </>
  );
};

export default Home;
