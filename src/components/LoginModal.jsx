// src/components/LoginModal.js
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import Modal from "./Modal";
import "../scss/components/Login.scss";
import "../scss/components/Modal.scss";
import { useAuth } from '../api/AuthContext.jsx';

const LoginModal = ({ isOpen, onClose }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { login: saveToken } = useAuth(); // Contexto de autenticação
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { token } = await login({ nome: usuario, senha });
      saveToken(token); // Armazena o token no contexto e localStorage
      localStorage.setItem("usuario", usuario);

      onClose(); // Fecha o modal após login bem-sucedido
      navigate("/dashboard/storage");
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao realizar o login.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
      <form onSubmit={handleLogin}>
        <h2>Entrar</h2>
        <div className="input-item">
          <label>Usuário:</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-item">
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <span>
            Para cadastrar, entre em contato com os <br />
            coordenadores do projeto <strong>Bons Fluidos</strong>.
          </span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="submit-area">
          <button className="button submit" type="submit">
            <img src="/images/favicon-white.png" alt="Enviar" />
          </button>
        </div>
      </form>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
