import {useEffect,useState} from 'react';
import AdministrationItem from './AdministrationItem.jsx';
import {fetchData} from '../api/api.js';
import PropTypes from 'prop-types';
import AddAdminModal from './AddAdminModal.jsx';

const Administration = ({openModal}) => {
  const [administrators,setAdministrators] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar administradores
  const fetchAdministrators = async () => {
    const data = await fetchData("http://localhost:3001/users");

    if (data) {
      setAdministrators(data);
    }

    setLoading(false);
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchAdministrators();
  },[]);

  // Função para abrir o modal de criação de novo administrador
  const handleAddAdministrator = () => {
    openModal(
      <AddAdminModal />
    );
  };

  return (
    <div id="administration" className="main-container">
      <div className="title">
        <h2>Controle de pessoal</h2>
        <p>Adicione e gerencie os usuários da plataforma.</p>
      </div>
      <div className="user-list">
        <div className="item create" onClick={handleAddAdministrator}>
          <div className="start">
            <div className="icon">
              <i className="fi fi-rr-circle-user"></i>
            </div>
            <div className="info">
              <h3>Novo usuário...</h3>
            </div>
          </div>
          <div className="end">
            <button>
              <i className="fi fi-rr-add"></i>
            </button>
          </div>
        </div>
        {loading ? (
          <p>Carregando...</p>
        ) : administrators.length > 0 ? (
          administrators.map((admin) => (
            <AdministrationItem
              key={admin.id_usuario}
              nome={admin.nome}
              openModal={openModal}
            />
          ))
        ) : (
          <p>Nenhum administrador encontrado.</p>
        )}
      </div>
    </div>
  );
};

Administration.propTypes = {
  openModal: PropTypes.func.isRequired, // Passando a função openModal para o componente
};

export default Administration;
