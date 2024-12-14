import {useEffect} from 'react';
import StorageItem from './StorageItem.jsx';
import {useState} from 'react';

const Storage = () => {
  const [products,setProducts] = useState([]);
  const [storage,setStorage] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar estoque de cada produto
  const fetchStorageByProduct = async (productName) => {
    const token = localStorage.getItem("token"); // Recupera o token do localStorage
    if (!token) {
      console.error("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/estoque/${productName}`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          console.error("Acesso negado. Verifique suas credenciais.");
        } else {
          throw new Error("Erro ao buscar estoque");
        }
        return;
      }

      const data = await response.json();
      return data.quantidade_disponivel || 0; // Retorna a quantidade, ou 0 se não houver
    } catch (error) {
      console.error(error.message);
      return 0;
    }
  };

  // Função para buscar todos os produtos
  const fetchProducts = async () => {
    const token = localStorage.getItem("token"); // Recupera o token do localStorage
    if (!token) {
      console.error("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/produto",{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          console.error("Acesso negado. Verifique suas credenciais.");
        } else {
          throw new Error("Erro ao buscar produtos");
        }
        return;
      }

      const data = await response.json();
      setProducts(data); // Define os dados no estado de produtos

      // Buscar o estoque para cada produto
      const storageData = await Promise.all(
        data.map(async (product) => {
          const quantidade = await fetchStorageByProduct(product.nome);
          return {...product,quantidade};
        })
      );
      setStorage(storageData); // Armazena as informações de produtos com quantidade
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchProducts();
  },[]);
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
        {loading ? (
          <p>Carregando...</p>
        ) : storage.length > 0 ? (
          storage.map((product) => (
            <StorageItem
              key={product.id_produto}
              nome={product.nome}
              categoria={product.categoria}
              quantidade={product.quantidade || 0} // Atribui a quantidade do estoque
            />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}

      </div>
    </div>

  );
};

export default Storage;