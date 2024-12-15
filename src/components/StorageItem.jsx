import PropTypes from 'prop-types';
import EditStorageModal from './EditStorageModal.jsx';

const StorageItem = ({id_produto,nome,categoria,quantidade,openModal}) => {
  const handleEditClick = () => {
    openModal(
      <EditStorageModal
        id_produto={id_produto}
        nome={nome}
        categoria={categoria}
        quantidade={quantidade}
      />
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
  id_produto: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default StorageItem;
