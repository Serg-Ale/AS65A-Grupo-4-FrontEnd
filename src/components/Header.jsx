const Header = () => {
  return (
    <header className="unlogged-header">
      <div className="content">
        <i className="fi fi-rr-menu-burger" id="menu" src="" alt="" />
        <img src="../../public/images/logo-white.png" alt="logo do projeto" />
        <nav>
          <a href="">Sobre nós</a>
          <a href="">Doe</a>
          <a href="">Contato</a>
        </nav>
        <div className="action">
          <a href="" className="button">
            entrar <i className="fi fi-rr-arrow-small-right"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
