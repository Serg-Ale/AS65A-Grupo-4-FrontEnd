import AdministrationItem from "./AdministrationItem.jsx";

const Administration = () => {
  return (
    <div id="administration" className="main-container">
      <div className="title">
        <h2>Controle de pessoal</h2>
        <p>Adicione e gerencie os usuários da plataforma.</p>
      </div>
      <div className="user-list">
        <div className="item create">
          <div className="start">
            <div className="icon">
              <i className="fi fi-rr-circle-user"></i>
            </div>
            <div className="info">
              <h3>Novo usuário...</h3>
            </div>
          </div>
          <div className="end">
            <button>
              <i className="fi fi-rr-add"></i>
            </button>
          </div>
        </div>
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
      </div>
    </div>
  );
};

export default Administration;
