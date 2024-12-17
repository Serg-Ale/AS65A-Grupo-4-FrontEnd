import { updateData } from "../api/api.js";
import PropTypes from 'prop-types';
import useFormHandler from "../hooks/useFormHandler.js";
import Modal from "./Modal.jsx";
import ReusableForm from "./ReusableForm.jsx";


const EditParticipantModal = ({ isOpen, onClose, fetchParticipants }) => {


  const initialState = {
    anonimo: false, // Adiciona o estado inicial do checkbox
    senhaAtual: "Senha atual",
    novaSenha: "Nova senha",
  };

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:", data);
      await updateData(`http://localhost:3001/participant/`, data);
      onClose();
      fetchParticipants();
    }
  );

  // Função para retornar a classe dinamicamente
  // const getDynamicClass = () => {
  //   return formData.anonimo ? "block-input" : ""; // Aplica 'block-input' apenas se anonimo estiver true
  // };

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
      placeholder: "Digite o nome...",
      required: true,
    },
    {
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: "Digite o endereço...",
      required: true,
    },
    {
      label: "Contato",
      name: "contato",
      type: "text",
      placeholder: "Digite o número de contato...",
      required: true,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ReusableForm
        title="Editar Intuição"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        className={formData.anonimo ? "block-input" : ""}
      />
    </Modal>
  );
};

EditParticipantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchParticipants: PropTypes.func.isRequired,
};

export default EditParticipantModal;
