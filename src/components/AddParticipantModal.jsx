import {createData} from "../api/api.js";
import PropTypes from "prop-types";
import useFormHandler from "../hooks/useFormHandler.js";
import ReusableForm from "./ReusableForm.jsx";
import Modal from "./Modal.jsx";

const AddParticipantModal = ({isOpen,onClose,fetchParticipants}) => {
  // Estado inicial refletindo o objeto esperado
  const initialState = {
    anonimo: false, // Checkbox boolean
    nome: "",
    endereco: "",
    contato: "",
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting participant data:",data);
      await createData(`http://localhost:3001/participante`,data);
      onClose(); // Fecha o modal
      fetchParticipants(); // Atualiza a lista de participantes
    }
  );

  // Configuração do formulário
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
      required: true,
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço da instituição",
      required: true,
    },
    {
      label: "Contato",
      name: "contato",
      type: "text",
      placeholder: "Digite o contato",
      required: true,
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
    </Modal>
  );
};

AddParticipantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchParticipants: PropTypes.func.isRequired,
};

export default AddParticipantModal;
