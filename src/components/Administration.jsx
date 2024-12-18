import { useEffect, useState } from "react";
import AdministrationItem from "./AdministrationItem.jsx";
import ParticipantItem from "./ParticipantItem.jsx";
import { fetchData } from "../api/api.js";
import AddAdminModal from "./AddAdminModal.jsx";
import AddParticipantModal from "./AddParticipantModal.jsx";


const Administration = () => {
  const [administrators, setAdministrators] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminAction, setAdminAction] = useState("");
  const [participantAction, setParticipantAction] = useState("");

  // Função para buscar administradores
  const fetchAdministrators = async () => {
    const data = await fetchData("http://localhost:3001/users");

    if (data) {
      setAdministrators(data);
    }

    setLoading(false);
  };

  // Função para buscar participantes
  const fetchParticipants = async () => {
    const data = await fetchData("http://localhost:3001/participante");
    console.log(data);

    if (data) {
      setParticipants(data);
    }

    setLoading(false);
  };

  // Hook para executar as buscas quando o componente for montado
  useEffect(() => {
    fetchAdministrators();
    fetchParticipants();
  }, []);


  participants.map((participant) => (console.log(participant)));

  return (
    <div className="grid-separe">
      <div id="administration" className="main-container">
        <div className="title">
          <h2>Controle de pessoal</h2>
          <p>Adicione e gerencie os usuários da plataforma.</p>
        </div>
        <div className="user-list">
          <div className="item create" onClick={() => setAdminAction("add-administrator-modal")}>
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
            isOpen={adminAction === "add-administrator-modal"}
            onClose={() => setAdminAction("")}
            fetchAdministrators={fetchAdministrators}
          />
          {loading ? (
            <p>Carregando...</p>
          ) : administrators.length > 0 ? (
            administrators.map((admin) => (
              <AdministrationItem
                key={admin.id_usuario}
                nome={admin.nome}
                fetchAdministrators={fetchAdministrators}
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
          <div className="item create" onClick={() => setParticipantAction("add-participant-modal")}>
            <div className="start">
              <div className="icon">
                <i className="fi fi-rr-map-marker-home"></i>
              </div>
              <div className="info">
                <h3>Novo participante ou instituição...</h3>
              </div>
            </div>
            <div className="end">
              <button>
                <i className="fi fi-rr-add"></i>
              </button>
            </div>
          </div>
          <AddParticipantModal
            isOpen={participantAction === "add-participant-modal"}
            onClose={() => setParticipantAction("")}
            fetchParticipants={fetchParticipants}
          />

          {loading ? (
            <p>Carregando...</p>
          ) : participants.length > 0 ? (
              participants.map((participant) =>
                !participant.anonimo && ( // Verifica se não é anônimo
                  <ParticipantItem
                  key={participant.id_participante}
                  anonimo={participant.anonimo}
                  nome={participant.nome}
                  endereco={participant.endereco}
                  contato={participant.contato}
                  fetchParticipants={fetchParticipants}
                />
              )
            )
          ) : (
            <p>Nenhum participante encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Administration;
