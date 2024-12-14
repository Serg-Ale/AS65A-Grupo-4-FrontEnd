import {useEffect,useState} from "react";
import StorageItem from "./StorageItem.jsx";
import {fetchData} from "../api/api.js";
import PropTypes from "prop-types";
import AddProductModal from './AddProductModal.jsx';

const Storage = ({openModal}) => {
  const [,setProducts] = useState([]);
  const [storage,setStorage] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar todos os produtos
  const fetchProducts = async () => {
    const data = await fetchData("http://localhost:3001/produto");

    if (data) {
      setProducts(data);

      // Buscar o estoque para cada produto
      const storageData = await Promise.all(
        data.map(async (product) => {
          const quantityData = await fetchData(`http://localhost:3001/estoque/${product.nome}`);
          return {...product,quantidade: quantityData?.quantidade_disponivel || 0};
        })
      );
      setStorage(storageData);
    }

    setLoading(false);
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchProducts();
  },[]);

  // Função para abrir o modal com o formulário
  const handleAddProduct = () => {
    openModal(
      <AddProductModal />
    );
  };

  return (
    <div id="storage" className="main-container">
      <div className="title">
        <h2>Controle o estoque</h2>
        <p>Adicione produtos, modifique suas especificações e visualize em tempo real.</p>
      </div>
      <div className="products-list">
        <button id="modal-trigger" className="item create" onClick={handleAddProduct}>
          <div className="icon">
            <i className="fi fi-rr-add"></i>
          </div>
          <h3>Adicionar Produto</h3>
        </button>
        {loading ? (
          <p>Carregando...</p>
        ) : storage.length > 0 ? (
          storage.map((product) => (
            <StorageItem
              key={product.id_produto}
              nome={product.nome}
              categoria={product.categoria}
              quantidade={product.quantidade || 0}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

Storage.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Storage;
