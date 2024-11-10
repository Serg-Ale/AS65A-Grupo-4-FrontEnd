const Header = () => {
  return (
    <>
      <header className="unlogged-header">
        <div className="content">
          {/*<a href="#main-nav" id="#menu">
            <i className="fi fi-rr-menu-burger" src="" alt="" />//todo: fix this
          </a>*/}
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
            <a href="#open-login" className="button alt">
              entrar <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
