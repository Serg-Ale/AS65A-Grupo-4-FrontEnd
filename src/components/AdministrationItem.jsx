import PropTypes from 'prop-types';

const AdministrationItem = ({nome,openModal}) => {

  const handleEditClick = () => {
    openModal(
      <div>
        <h3>Editar Produto: {nome}</h3>
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
          <i className="fi fi-rr-circle-user"></i>
        </div>
        <div className="info">
          <h3>{nome}</h3>
          <div className="password">
            <span>*********</span>
            <button >
              <i id="eye-opened" className="fi fi-rr-eye"></i>
              {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */}
            </button>
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

AdministrationItem.propTypes = {
  nome: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default AdministrationItem;
