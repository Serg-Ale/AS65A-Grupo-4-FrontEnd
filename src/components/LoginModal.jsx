import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom"; // Hook para navegação
import {login} from "../api/auth"; // Importando a função de login

const LoginModal = ({action,setAction}) => {
  const modalRef = useRef(null);

  // Estados para gerenciar entrada de dados e erros
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

  // Função para lidar com o envio do formulário
  const handleLogin = async (e) => {
    e.preventDefault(); // Previne comportamento padrão do formulário
    setError(""); // Limpa mensagens de erro

    try {
      const {token} = await login({nome: usuario,senha}); // Requisição via API
      console.log("Token recebido:", token);
      localStorage.setItem("token", token);
      localStorage.setItem("usuario",usuario);

      // Fecha o modal após login bem-sucedido
      setAction("");

      // Redireciona para a página Dashboard
      navigate("/dashboard");
    } catch (err) {
      // Exibe mensagem de erro caso as credenciais sejam inválidas
      setError(err.response?.data?.message || "Erro ao realizar o login.");
    }
  };

  return (
    <div
      className={`login-modal ${
        action === "login-modal" ? "show-login-modal" : "hide-login-modal"
      }`}
    >
      <div className="box" ref={modalRef}>
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
          {error && <p className="error-message">{error}</p>} {/* Exibe erros */}
          <div className="submit-area">
            <button className="button submit" type="submit">
              <img src="/images/favicon-white.png" alt="Enviar" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  action: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
};

export default LoginModal;
