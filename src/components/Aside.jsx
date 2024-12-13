import PropTypes from 'prop-types';

const Aside = ({setActiveComponent}) => {
  return (
    <aside>
      <div className="list">
        <button className="item" onClick={() => setActiveComponent('Storage')}>
          <div className="title">
            <h3>Estoque</h3>
            <span>
              Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
              Donec quis consectetur nibh.
            </span>
          </div>
          <i className="fi fi-rr-box-circle-check"></i>
        </button>
        <button className="item" onClick={() => setActiveComponent('Orders')}>
          <div className="title">
            <h3>Movimentações</h3>
            <span>
              Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
              Donec quis consectetur nibh.
            </span>
          </div>
          <i className="fi fi-rr-exchange"></i>
        </button>
        <button className="item" onClick={() => setActiveComponent('Administration')}>
          <div className="title">
            <h3>Administração</h3>
            <span>
              Etiam ac volutpat nisi. Aenean vitae ullamcorper ligula.
              Donec quis consectetur nibh.
            </span>
          </div>
          <i className="fi fi-rr-user-gear"></i>
        </button>
      </div>
      <span className="copyright">© Copyright Bons Fluidos - 2024</span>
    </aside>
  );
};

Aside.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
};

export default Aside;
