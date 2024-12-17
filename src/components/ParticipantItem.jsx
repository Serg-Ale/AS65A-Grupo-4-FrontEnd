import PropTypes from "prop-types";
import { useState } from "react";
import EditParticipantModal from "./EditParticipantModal.jsx";

const ParticipantItem = ({ id_participante, anonimo = false, nome, endereco, contato, fetchParticipants }) => {

  const [action, setAction] = useState("");
  return (
    <div className="item" key={id_participante}>
      <div className="start">
        <div className="icon">
          <i className="fi fi-rr-map-marker-home"></i>
        </div>
        <div className="info">
          <h3>{anonimo ? "Anônimo" : nome}</h3>
          <div className="separe">
            <strong>{contato}</strong>
            <p>{endereco}</p>
          </div>
        </div>
      </div>
      <div className="end">
        <button onClick={(e) => {
          e.preventDefault();
          setAction("edit-participant-modal");
        }}>
          <i className="fi fi-rr-pen-field"></i>
        </button>
        <EditParticipantModal
          isOpen={action === "edit-participant-modal"}
          nome={nome}
          onClose={() => {
            console.log("Closing modal...");
            setAction("");
          }}
          fetchParticipants={fetchParticipants}
        />
      </div>

    </div>
  );
};

ParticipantItem.propTypes = {
  id_participante: PropTypes.number.isRequired, // ID do participante (único)
  anonimo: PropTypes.bool.isRequired, // ID do participante (único)
  nome: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  contato: PropTypes.string.isRequired,
  fetchParticipants: PropTypes.func.isRequired, // Função para recarregar os dados após edição
};

export default ParticipantItem;
