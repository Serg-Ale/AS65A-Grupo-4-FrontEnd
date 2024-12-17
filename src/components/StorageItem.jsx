import PropTypes from 'prop-types';
import { useState } from 'react';
import EditStorageModal from './EditStorageModal.jsx';

const StorageItem = ({ id_produto, nome, categoria, quantidade, fetchProducts }) => {

  const [action, setAction] = useState("");

  return (
    <>
      <div className="item" onClick={ (e) => {
        e.preventDefault();
        setAction("edit-product-modal");
      } }>
        <div className="item-counter">
          <strong>{ quantidade }</strong>
        </div>
        <div className="image">
          <img
            src="../../public/images/placeholder.png"
            alt={ `Imagem do produto ${nome}` }
          />
        </div>
        <h3>{ nome }</h3>
        <div className="info">
          <span>Clique para modificar...</span>
          <p>{ categoria }</p>
        </div>
      </div>

      <EditStorageModal isOpen={ action === "edit-product-modal" }
        id_produto={ id_produto }
        nome={ nome }
        categoria={ categoria }
        onClose={ () => {
          console.log("Closing modal...");
          setAction("");
        } }
        fetchProducts={ fetchProducts }
      />
    </>
  );
};

StorageItem.propTypes = {
  id_produto: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default StorageItem;
