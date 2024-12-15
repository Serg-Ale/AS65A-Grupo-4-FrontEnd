import PropTypes from "prop-types";
import {useEffect,useState} from "react";
import {fetchData} from "../api/api.js";
import AddProductModal from './AddProductModal.jsx';
import StorageItem from "./StorageItem.jsx";
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
          const quantityData = await fetchData(
            `http://localhost:3001/estoque/${product.nome}`
          );
          // TODO: implementar alguma forma do usuário entender que esta N/A pq produto ainda não existe no estoque
          return {...product,quantidade: quantityData?.quantidade_disponivel || "N/A"};
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


  const handleAddProduct = () => {
    openModal(
      <AddProductModal
        onClose={() => {
          openModal(null); // Fecha o modal
          fetchProducts(); // Recarrega a lista de produtos
        }}
        fetchProducts={fetchProducts}
      />
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
              id_produto={product.id_produto}
              nome={product.nome}
              categoria={product.categoria}
              quantidade={product.quantidade || 0}
              openModal={openModal}
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
