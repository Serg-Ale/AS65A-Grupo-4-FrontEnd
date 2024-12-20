import { useEffect, useState } from "react";
import { fetchData } from "../api/api.js";
import AddOrderModal from './AddOrderModal.jsx';
import OrderItem from "./OrderItem.jsx";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(true);

  // Função para buscar movimentações
  const fetchOrders = async () => {
    const data = await fetchData("http://localhost:3001/movimentacoes");

    data.map((order) => {
      (order.Participante.nome === null) ? order.Participante.nome = "Anônimo" : order.nome;
    });

    if (data) {
      setOrders(data);
    }

    setLoading(false);
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchOrders();
  }, []);


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
          onClick={(e) => {
            e.preventDefault();
            setAction("add-order-modal");
          }}
        >
          <h3>Adicionar Movimentação</h3>
          <i className="fi fi-rr-add"></i>
        </div>
        <AddOrderModal
          isOpen={action === "add-order-modal"}
          onClose={() => {
            console.log("Closing modal...");
            setAction("");
          }}
          fetchOrders={fetchOrders}
        />

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


export default Order;
