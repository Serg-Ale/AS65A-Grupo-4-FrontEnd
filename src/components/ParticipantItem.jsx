import PropTypes from "prop-types";

const ParticipantItem = ({ nome, openModal }) => {
  const handleEditClick = () => {
    openModal(
      <div>
        <h3>Editar Participante: {nome}</h3>
        <form>
          <label>
            Novo nome:
            <input type="text" name="nome" defaultValue={nome} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  };
  return (
    <div className="item">
      <div className="start">
        <div className="icon">
          <i className="fi fi-rr-map-marker-home"></i>
        </div>
        <div className="info">
          <h3>Colegio Estadual Exemplo</h3>
          <div className="separe">
            <strong>41 9 9999-9999</strong>
            <p>Rua numero 00, Bairro X, Cornélio Procópio...</p>
          </div>
        </div>
      </div>
      <div className="end">
        <button onClick={handleEditClick}>
          <i className="fi fi-rr-pen-field"></i>
        </button>
      </div>
    </div>
  );
};

ParticipantItem.propTypes = {
  nome: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ParticipantItem;
