import { useEffect, useState } from "react";
import { fetchData } from "../api/api.js";
import StorageItem from "./StorageItem.jsx";
import AddProductModal from "./AddProductModal.jsx";
const Storage = () => {
  const [, setProducts] = useState([]);
  const [storage, setStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState("");

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
          return { ...product, quantidade: quantityData?.quantidade_disponivel || 0 };
        })
      );
      setStorage(storageData);
    }

    setLoading(false);
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div id="storage" className="main-container">
      <div className="title">
        <h2>Controle o estoque</h2>
        <p>Adicione produtos, modifique suas especificações e visualize em tempo real.</p>
      </div>
      <div className="products-list">
        <button id="modal-trigger" className="item create" onClick={ (e) => {
          e.preventDefault();
          setAction("add-product-modal");
        } }>
          <div className="icon">
            <i className="fi fi-rr-add"></i>
          </div>
          <h3>Adicionar Produto</h3>
        </button>
        <AddProductModal
          isOpen={ action === "add-product-modal" }
          onClose={ () => {
            console.log("Closing modal...");
            setAction("");
          } }
          fetchProducts={ fetchProducts }
        />
        { loading ? (
          <p>Carregando...</p>
        ) : storage.length > 0 ? (
          storage.map((product) => (
            <StorageItem
              key={ product.id_produto }
              id_produto={ product.id_produto }
              nome={ product.nome }
              categoria={ product.categoria }
              quantidade={ product.quantidade || 0 }
              fetchProducts={ fetchProducts }
            />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        ) }
      </div>
    </div>
  );
};


export default Storage;
