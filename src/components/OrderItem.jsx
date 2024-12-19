import PropTypes from 'prop-types';

const OrderItem = ({ nomeProduto, tipoMovimentacao, quantidade, participante, usuarioResponsavel, openModal }) => {
  const handleEditClick = () => {
    openModal(
      <div>
        <h3>Editar Movimentação: { nomeProduto }</h3>
        <p>Tipo de movimentação: { tipoMovimentacao }</p>
        <p>Admin responsável: { usuarioResponsavel }</p>
        <p>Quantidade: { quantidade }</p>
        <form>
          <label>
            Nova Quantidade:
            <input type="number" name="quantidade" defaultValue={ quantidade } />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  };
  // Todo: implemente class changing based on tipoMovimentacao
  return (
    <div className="item" onClick={ handleEditClick }>
      <div className="product">
        <h3>{ nomeProduto }</h3>
        <div id={tipoMovimentacao === "entrada" ? "order-in" : "order-out"} className="item-counter">
          <div className="value">
            <strong>{ quantidade }</strong>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="from-to">
          <strong className="name">{ participante.nome }</strong>
          <strong className="phone">{ participante.contato }</strong>
          <span>{ participante.endereco }</span>
        </div>
        <div className="holder">
          <div className="label">
            <i className="fi fi-rr-circle-user"></i>
            <strong>Intermediário:</strong>
          </div>
          <strong className="name">{ usuarioResponsavel }</strong>
        </div>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  nomeProduto: PropTypes.string.isRequired,
  tipoMovimentacao: PropTypes.string,
  quantidade: PropTypes.number.isRequired,
  participante: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    contato: PropTypes.string,
    endereco: PropTypes.string,
  }).isRequired,
  usuarioResponsavel: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default OrderItem;
