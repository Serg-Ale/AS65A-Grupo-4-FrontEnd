import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ action, setAction }) => {
  const modalRef = useRef(null);

  // Lógica para fechar o modal ao clicar fora
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setAction(""); // Esconde o modal
    }
  };

  useEffect(() => {
    if (action === "login-modal") {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [action]);

  return (
    <div
      className={`login-modal ${
        action === "login-modal" ? "show-login-modal" : "hide-login-modal"
      }`}
    >
      <div className="box" ref={modalRef}>
        <form>
          <h2>Entrar</h2>
          <div className="input-item">
            <label>Usuário:</label>
            <input type="text" placeholder="Digite seu nome..." />
          </div>
          <div className="input-item">
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha..." />
            <span>
              Para cadastrar, entre em contato com os <br />
              coordenadores do projeto <strong>Bons Fluidos</strong>.
            </span>
          </div>
          <div className="submit-area">
            <button className="button submit" type="button">
              <img src="/images/favicon-white.png" alt="Enviar" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  action: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
};

export default Modal;
