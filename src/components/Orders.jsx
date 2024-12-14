import {useEffect,useState} from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem.jsx";
import {fetchData} from "../api/api.js";
import AddOrderModal from './AddOrderModal.jsx';

const Order = ({openModal}) => {
  const [orders,setOrders] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar movimentações
  const fetchOrders = async () => {
    const data = await fetchData("http://localhost:3001/movimentacoes");

    if (data) {
      setOrders(data);
    }

    setLoading(false);
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchOrders();
  },[]);

  const handleAddOrder = () => {
    openModal(
      <AddOrderModal />
    );
  };

  return (
    <div id="orders" className="main-container">
      <div className="title">
        <h2>Controle de Movimentação</h2>
        <p>Acompanhe e crie saídas ou entradas do estoque.</p>
      </div>
      <div className="order-list">
        <div
          id="modal-trigger"
          className="item create"
          onClick={handleAddOrder}
        >
          <h3>Adicionar Movimentação</h3>
          <i className="fi fi-rr-add"></i>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <OrderItem
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

Order.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Order;
