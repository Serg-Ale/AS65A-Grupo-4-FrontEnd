import {useEffect,useState} from "react";
import AdministrationItem from "./AdministrationItem.jsx";
import ParticipantItem from "./ParticipantItem.jsx";
import {fetchData} from "../api/api.js";
import PropTypes from "prop-types";
import AddAdminModal from "./AddAdminModal.jsx";

const Administration = ({openModal}) => {
  const [administrators,setAdministrators] = useState([]);
  const [loading,setLoading] = useState(true);
  const [action,setAction] = useState("");

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


  return (
    <div className="grid-separe">
      <div id="administration" className="main-container">
        <div className="title">
          <h2>Controle de pessoal</h2>
          <p>Adicione e gerencie os usuários da plataforma.</p>
        </div>
        <div className="user-list">
          <div className="item create" onClick={(e) => {
            e.preventDefault();
            setAction("add-administrator-modal");
          }}>
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
          <AddAdminModal
            isOpen={action === "add-administrator-modal"} onClose={() => {
              console.log("Closing modal....");
              setAction("");
            }}
            fetchAdministrators={fetchAdministrators}
          />
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
      <div id="participants" className="main-container">
        <div className="title">
          <h2>Controle de Instituições</h2>
          <p>Crie e controle doadores e beneficiários de doações.</p>
        </div>
        <div className="participants-list">
          <div className="item create">
            <div className="start">
              <div className="icon">
                <i className="fi fi-rr-map-marker-home"></i>
              </div>
              <div className="info">
                <h3>Novo participante/instituição...</h3>
              </div>
            </div>
            <div className="end">
              <button>
                <i className="fi fi-rr-add"></i>
              </button>
            </div>
          </div>
          <ParticipantItem />
          <ParticipantItem />
          <ParticipantItem />
        </div>
      </div>
    </div>
  );
};

Administration.propTypes = {
  openModal: PropTypes.func.isRequired, // Passando a função openModal para o componente
};

export default Administration;
