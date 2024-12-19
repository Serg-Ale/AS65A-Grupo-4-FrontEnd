import { useNavigate } from "react-router-dom";
import { useAuth } from '../api/AuthContext.jsx';

const MainHeader = () => {
  const { logout } = useAuth(); // Função de logout do contexto de autenticação
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Limpa o token e outros dados
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <header>
      <div className="content">
        <div className="logo">
          <img src="/images/logo-white.png" alt="Logo" />
        </div>
        <div className="title">
          <h1>Dashboard</h1>
        </div>
        <div className="action">
          <div className="button">
            <span>Usuário</span>
            <div className="user-icon">
              <i className="fi fi-rr-user"></i>
            </div>
            <i id="arrow-animate" className="fi fi-rr-angle-small-up"></i>
            <div className="user-nav">
              <ul>
                <li>
                  <a
                    href="https://api.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Suporte</span> <i className="fi fi-rr-phone-flip"></i>
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <span>Sair</span> <i className="fi fi-rr-exit"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
