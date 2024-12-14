import PropTypes from 'prop-types';
const StorageItem = ({nome,categoria,quantidade}) => {
  return (
    <button className="item">
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
  nome: PropTypes.string.isRequired,  // nome deve ser uma string e é obrigatório
  categoria: PropTypes.string.isRequired,  // categoria deve ser uma string e é obrigatório
  quantidade: PropTypes.number.isRequired,  // quantidade deve ser um número e é obrigatório
};

export default StorageItem;
