import PropTypes from 'prop-types';
import EditStorageModal from './EditStorageModal.jsx';

const StorageItem = ({id,nome,categoria,quantidade,openModal}) => {
  const handleEditClick = () => {
    openModal(
      <EditStorageModal
        id={id}
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
  id: PropTypes.int,
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default StorageItem;
