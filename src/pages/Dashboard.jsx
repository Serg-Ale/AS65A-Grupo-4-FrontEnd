const Dashboard = () => {
  return (
    <>
      <header>
        <div className="content">
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
                    <a href="https://api.whatsapp.com">Suporte <i className="fi fi-rr-phone-flip"></i></a>
                  </li>
                  <li>
                    <a href="">Sair <i className="fi fi-rr-exit"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside>
        <div className="aside-box">
          <div className="logo">
            <img src="../../public/images/logo.png" alt="" />
          </div>
          <nav>
            <div>
              <strong>Início</strong>{" "}
              <i className="fi fi-rr-angle-small-up"></i>
              <ul>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
              </ul>
            </div>
            <siv>
              <strong>Estoque</strong>{" "}
              <i className="fi fi-rr-angle-small-up"></i>
              <ul>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
              </ul>
            </siv>
            <div>
              <strong>Movimentações</strong>{" "}
              <i className="fi fi-rr-angle-small-up"></i>
              <ul>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
              </ul>
            </div>
            <div>
              <strong>Administração</strong>{" "}
              <i className="fi fi-rr-angle-small-up"></i>
              <ul>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
                <li>Sub grupo</li>
              </ul>
            </div>
          </nav>
        </div>
        <span>© Copyright Bons Fluidos - 2024</span>
      </aside>
      <main></main>
    </>
  );
};

export default Dashboard;
