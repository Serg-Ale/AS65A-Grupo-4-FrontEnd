import { useState, useRef, useEffect } from "react";
import Header from "../components/Header.jsx";

const Home = () => {
  const [action, setAction] = useState(""); // Estado para gerenciar o modal
  const modalRef = useRef(null); // Referência ao modal

  // Lógica para fechar o modal ao clicar fora
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setAction(""); // Esconde o modal
    }
  };

  useEffect(() => {
    if (action === "login-modal") {
      document.addEventListener("mousedown", handleOutsideClick); // Adiciona o evento
    } else {
      document.removeEventListener("mousedown", handleOutsideClick); // Remove o evento
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Cleanup
    };
  }, [action]);

  return (
    <>
      <Header setAction={setAction} />
      <div
        className={`login-modal ${
          action === "login-modal" ? "show-login-modal" : "hide-login-modal"
        }`}
        id="get-modal"
      >
        <div className="box" ref={modalRef}>
          <form action="">
            <h2>Entrar</h2>
            <div className="input-item">
              <label>Usuário:</label>
              <input type="text" placeholder="Digite seu nome..." />
            </div>
            <div className="input-item">
              <label>Senha:</label>
              <input type="password" placeholder="Digite sua senha..." />
              <span>
                Para cadastrar, entre em contato com os <br /> coordenadores do
                projeto <strong>Bons Fluidos</strong>.
              </span>
            </div>
            <div className="submit-area">
              <button className="button submit" type="button">
                <img src="../../public/images/favicon-white.png" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hero">

        <img
          className="absolute-border"
          src="../../public/images/banner-border.png"
          alt=""
        />
        <div className="background"></div>
        <div className="content">
          <div className="heading">
            <h1>
              Lorem ipsum <br />
              dolor sit amet
            </h1>
            <p>
              Consectetur adipiscing elit. Etiam quam augue, scelerisque eu leo
              id, lobortis laoreet turpis. Nam ac semper nulla. Aenean vitae
              eros volutpat, maximus purus in, tristique elit. Cras elit quam,
              tempus id nisl a.
            </p>
            <a href="" className="button alt">
              Ver mais <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
          <div className="image">
            <img src="../../public/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
