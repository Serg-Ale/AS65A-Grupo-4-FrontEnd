import OrderItem from './OrderItem.jsx';

const Order = () => {
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
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
};

export default Order;
