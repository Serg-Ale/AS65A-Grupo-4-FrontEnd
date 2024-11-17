const Header = ({ setAction }) => {
  return (
    <>
      <header className="unlogged-header">
        <a href="#main-nav" id="menu">
          <i className="fi fi-rr-menu-burger" src="" alt="" />
        </a>
        <div className="content">
          <img src="../../public/images/logo-white.png" alt="logo do projeto" />
          <nav>
            <a href="#about">Sobre nós</a>
            <a href="#donate">Doe</a>
            <a href="#contact">Contato</a>
          </nav>
          <div className="action">
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault(); // Previne comportamento padrão de redirecionamento
                setAction("login-modal"); // Mostra o modal
              }}
            >
              Entrar <i className="fi fi-rr-arrow-small-right"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
