import { createData } from "../api/api.js";
import PropTypes from "prop-types";
import useFormHandler from "../hooks/useFormHandler.js";
import ReusableForm from "./ReusableForm.jsx";
import Modal from "./Modal.jsx";

const AddParticipantModal = ({ isOpen, onClose, fetchParticipants }) => {
  const initialState = {
    anonimo: false, // Checkbox boolean
    nome: "",
    endereco: "",
    contato: "",
  };

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    initialState,
    async (data) => {
      const payload = data.anonimo
        ? { anonimo: true } // Apenas o campo 'anonimo' é enviado
        : data; // Envia todos os dados se 'anonimo' for false

      console.log("Submitting participant data:", payload);
      await createData(`http://localhost:3001/participante`, payload);
      onClose(); // Fecha o modal
      fetchParticipants(); // Atualiza a lista de participantes
    }
  );

  const formConfig = [
    {
      label: "Anônimo",
      name: "anonimo",
      type: "checkbox",
      placeholder: "",
    },
    {
      label: "Nome",
      name: "nome",
      type: "text",
      placeholder: "Digite o nome da instituição",
      required: !formData.anonimo,
      disabled: formData.anonimo,
      className: formData.anonimo ? "disabled-input" : "", // Classe dinâmica
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço da instituição",
      required: !formData.anonimo,
      disabled: formData.anonimo,
      className: formData.anonimo ? "disabled-input" : "",
    },
    {
      label: "Contato",
      name: "contato",
      type: "text",
      placeholder: "Digite o contato",
      required: !formData.anonimo,
      disabled: formData.anonimo,
      className: formData.anonimo ? "disabled-input" : "",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ReusableForm
        title="Adicionar Participante"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {formData.anonimo && (
        <p className="info-message">
          Os outros campos estão bloqueados porque os dados não serão salvos ao
          marcar Anônimo.
        </p>
      )}
    </Modal>
  );
};

AddParticipantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchParticipants: PropTypes.func.isRequired,
};

export default AddParticipantModal;
