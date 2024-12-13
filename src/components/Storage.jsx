import StorageItem from './StorageItem.jsx';

const Storage = () => {
  return (

    <div id="storage" className="main-container">
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

        <StorageItem />
        <StorageItem />
        <StorageItem />
        <StorageItem />
        <StorageItem />
      </div>
    </div>

  );
};

export default Storage;