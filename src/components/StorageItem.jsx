import PropTypes from 'prop-types';

const StorageItem = ({nome,categoria,quantidade,openModal}) => {
  const handleEditClick = () => {
    openModal(
      <div>
        <h3>Editar Produto: {nome}</h3>
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        <form>
          <label>
            Nova Quantidade:
            <input type="number" name="quantidade" defaultValue={quantidade} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  };

  return (
    <button className="item" onClick={handleEditClick}>
      <div className="item-counter">
        <strong>{quantidade}</strong>
      </div>
      <div className="image">
        <img
          src="../../public/images/placeholder.png"
          alt={`Imagem do produto ${nome}`}
        />
      </div>
      <h3>{nome}</h3>
      <div className="info">
        <span>Clique para modificar...</span>
        <p>{categoria}</p>
      </div>
    </button>
  );
};

StorageItem.propTypes = {
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default StorageItem;
