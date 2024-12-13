const OrderItem = () => {
  return (
    <div className="item">
      <div className="product">
        <h3>Absorvente com o nome surpreendemente grande</h3>
      </div>
      <div className="info">
        <div id="order-in" className="order-detail">
          <span>+</span>
          <div className="value">
            <strong>22</strong>
          </div>
        </div>
        <div className="from-to">
          <p>Remetente/Destinatário</p>
          <strong className="name">Nome Completo</strong>
          <span>RUA 00, BAIRRO, CIDADE, 00000-000</span>
          <strong className="phone"></strong>
        </div>
        <div className="holder">
          <p>Responsável</p>
          <i className="fi fi-rr-circle-user"></i>
          <strong className="user">Nome Responsável</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;