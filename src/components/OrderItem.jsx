const OrderItem = () => {
  return (
    <div className="item">
      <div className="product">
        <h3>Absorvente com o nome surpreendemente grande</h3>
        <div id="order-in" className="item-counter">
          <div className="value">
            <strong>22</strong>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="from-to">
          <strong className="name">Nome Completo</strong>
          <strong className="phone">(43) 9 9999-9999</strong>
          <span>RUA 00, BAIRRO, CIDADE, 00000-000</span>
        </div>
        <div className="holder">
          <div className="label">
            <i className="fi fi-rr-circle-user"></i>
            <strong>Intermediário:</strong>
          </div>
          <strong className="name">Nome de Usuário</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
