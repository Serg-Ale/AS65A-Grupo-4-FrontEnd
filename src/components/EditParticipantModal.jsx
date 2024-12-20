import { updateData } from "../api/api.js";
import PropTypes from 'prop-types';
import useFormHandler from "../hooks/useFormHandler.js";
import Modal from "./Modal.jsx";
import ReusableForm from "./ReusableForm.jsx";


const EditParticipantModal = ({ isOpen, onClose, fetchParticipants, nome, endereco, contato }) => {


  const initialState = {
    anonimo: false, // Adiciona o estado inicial do checkbox
    nome,
    endereco,
    contato,
  };

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:", data);
      await updateData(`http://localhost:3001/participante/${nome}`, data);
      onClose();
      fetchParticipants();
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
      label: "Endereço",
      name: "endereco",
      type: "text",
      placeholder: endereco,
      required: true,
    },
    {
      label: "Contato",
      name: "contato",
      type: "text",
      placeholder: contato,
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
  nome: PropTypes.string,
  contato: PropTypes.string,
  endereco: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchParticipants: PropTypes.func.isRequired,
};

export default EditParticipantModal;
