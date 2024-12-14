import {useEffect,useState} from 'react';
import OrderItem from './OrderItem.jsx';

const Order = () => {

  const [orders,setOrders] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar movimentações
  const fetchOrders = async () => {
    const token = localStorage.getItem("token"); // Recupera o token do localStorage
    if (!token) {
      console.error("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/movimentacoes",{
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
          throw new Error("Erro ao buscar movimentações");
        }
        return;
      }

      const data = await response.json();
      setOrders(data); // Define os dados no estado
      console.log(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchOrders();
  },[]);
  return (
    <div id="orders" className="main-container">
      <div className="title">
        <h2>Controle de Movimentaçao</h2>
        <p>Acompanhe e crie saídas ou entradas do estoque.</p>
      </div>
      <div className="order-list">
        <div className="item create">
          <h3>Adicionar Movimentação</h3>
          <i className="fi fi-rr-add"></i>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            < OrderItem
              key={order.id_movimentacaoProduto}
              nomeProduto={order.Produto.nome}
              tipoMovimentacao={order.tipo_movimentacao}
              quantidade={order.quantidade}
              participante={order.Participante}
              usuarioResponsavel={order.Usuario.nome}
            />
          ))
        ) : (
          <p>Nenhuma movimentação encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
