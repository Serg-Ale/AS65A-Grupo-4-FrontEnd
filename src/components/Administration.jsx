import AdministrationItem from './AdministrationItem.jsx';

const Administration = () => {
  return (



    <div id="administration" className="main-container">
      <div className="title">
        <h2>Controle de pessoal</h2>
        <p>Adicione e gerencie os usuários da plataforma.</p>
      </div>
      <div className="user-list">
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
        <AdministrationItem />
      </div>
    </div >
  );
};

export default Administration;