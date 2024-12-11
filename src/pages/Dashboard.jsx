const Dashboard = () => {
  return (
    <main className="dashboard">
      <header>
        <div className="content">
          <div className="logo">
            <img src="./public/images/logo-white.png" alt="" />
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
                      Suporte <i className="fi fi-rr-phone-flip"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Sair <i className="fi fi-rr-exit"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="board">
        <div className="content">
          <aside>
            <div className="list">
              <button className="item">
                <div className="title">
                  <h3>Estoque</h3>
                  <span>
                    Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
                    Donec quis consectetur nibh.
                  </span>
                </div>
                <i className="fi fi-rr-box-circle-check"></i>
              </button>
              <button className="item">
                <div className="title">
                  <h3>Movimentações</h3>
                  <span>
                    Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
                    Donec quis consectetur nibh.
                  </span>
                </div>
                <i className="fi fi-rr-exchange"></i>
              </button>
              <button className="item">
                <div className="title">
                  <h3>Administração</h3>
                  <span>
                    Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
                    Donec quis consectetur nibh.
                  </span>
                </div>
                <i className="fi fi-rr-user-gear"></i>
              </button>
            </div>
            <span className="copyright">© Copyright Bons Fluidos - 2024</span>
          </aside>
          {/* <div id="storage" className="main-container">
            <div className="title">
              <h2>Controle o estoque</h2>
              <p>
                Adicione produtos, modifique suas especificações e vizualize em
                tempo real.
              </p>
            </div>
            <div className="products-list">
              <button className="item create">
                <div className="icon">
                  <i className="fi fi-rr-add"></i>
                </div>
                <h3>Adicionar Produto</h3>
              </button>
              <button className="item">
                <div className="item-counter">
                  <strong>45</strong>
                </div>
                <div className="image">
                  <img
                    src="../../public/images/placeholder.png"
                    alt="bla bla bla"
                  />
                </div>
                <h3>nome do produto</h3>
                <div className="info">
                  <span>Clique para modificar...</span>
                  <p>categoria</p>
                </div>
              </button>
              <button className="item">
                <div className="item-counter">
                  <strong>45</strong>
                </div>
                <div className="image">
                  <img
                    src="../../public/images/placeholder.png"
                    alt="bla bla bla"
                  />
                </div>
                <h3>nome do produto</h3>
                <div className="info">
                  <span>Clique para modificar...</span>
                  <p>categoria</p>
                </div>
              </button>
              <button className="item">
                <div className="item-counter">
                  <strong>45</strong>
                </div>
                <div className="image">
                  <img
                    src="../../public/images/placeholder.png"
                    alt="bla bla bla"
                  />
                </div>
                <h3>nome do produto</h3>
                <div className="info">
                  <span>Clique para modificar...</span>
                  <p>categoria</p>
                </div>
              </button>
              <button className="item">
                <div className="item-counter">
                  <strong>45</strong>
                </div>
                <div className="image">
                  <img
                    src="../../public/images/placeholder.png"
                    alt="bla bla bla"
                  />
                </div>
                <h3>nome do produto</h3>
                <div className="info">
                  <span>Clique para modificar...</span>
                  <p>categoria</p>
                </div>
              </button>
              <button className="item">
                <div className="item-counter">
                  <strong>45</strong>
                </div>
                <div className="image">
                  <img
                    src="../../public/images/placeholder.png"
                    alt="bla bla bla"
                  />
                </div>
                <h3>nome do produto</h3>
                <div className="info">
                  <span>Clique para modificar...</span>
                  <p>categoria</p>
                </div>
              </button>
            </div>
          </div> */}

          <div id="administration" className="main-container">
            <div className="title">
              <h2>Controle de pessoal</h2>
              <p>Adicione e gerencie os usuários da plataforma.</p>
            </div>
            <div className="user-list">
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="start">
                  <div className="icon">
                    <i className="fi fi-rr-circle-user"></i>
                  </div>
                  <div className="info">
                    <h3>Padra Marcela Corsa</h3>
                    <div className="password">
                      <span>*********</span>
                      <button>
                        <i id="eye-opened" className="fi fi-rr-eye"></i>
                        {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="end">
                  <button>
                    <i className="fi fi-rr-pen-field"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
