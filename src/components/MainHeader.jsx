const MainHeader = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <img src="/public/images/logo-white.png" alt="" />
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
                  <a href="https://api.whatsapp.com">
                    <span>Suporte</span> <i className="fi fi-rr-phone-flip"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Sair</span> <i className="fi fi-rr-exit"></i>
                  </a>
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