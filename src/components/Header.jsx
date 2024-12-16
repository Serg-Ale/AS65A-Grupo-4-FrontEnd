import PropTypes from "prop-types";

const Header = ({setAction}) => {
  return (
    <>
      <header>
        <div className="content">
          <a href="#main-nav" id="menu">
            <i className="fi fi-rr-menu-burger" src="" alt="" />
          </a>
          <img src="../../public/images/logo-white.png" alt="logo do projeto" />
          <nav>
            <a href="#about">Sobre nós</a>
            <a href="#donate">Doe</a>
            <a href="#contact">Contato</a>
          </nav>
          <div className="action">
            <a
              className="button"
              onClick={(e) => {
                e.preventDefault(); // Previne comportamento padrão de redirecionamento
                setAction("login-modal"); // Mostra o modal
              }}
            >
              Entrar <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </header>
      <div id="main-nav">
        <div className="inset">
          <a href="#close" className="close">
            <i className="fi fi-rr-circle-xmark"></i>
          </a>
          <a href="/" className="logo">
            <img src="../../public/images/favicon-white.png" alt="" />
          </a>
          <nav>
            <a href="./">Sobre nós</a>
            <a href="#quem-somos">Doe</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="action">
            <a
              href="#open-login"
              className="button alt"
              onClick={(e) => {
                e.preventDefault(); // Previne comportamento padrão de redirecionamento
                setAction("login-modal"); // Mostra o modal
              }}
            >
              entrar <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  setAction: PropTypes.func.isRequired, // Valida que `setAction` é uma função e é obrigatório
};

export default Header;
