import PropTypes from "prop-types";
import useFormHandler from "../hooks/useFormHandler.js";
import { createData } from "../api/api.js";
import ReusableForm from "./ReusableForm.jsx";
import Modal from "./Modal.jsx";

const AddAdminModal = ({ isOpen, onClose, fetchAdministrators }) => {
  const initialState = {
    nome: "",
    senha: "",
    tipo_acesso: "admin",
  };

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:", data);
      await createData("http://localhost:3001/register", data);
      onClose();
      fetchAdministrators();
    }
  );

  const formConfig = [
    {
      label: "Nome",
      name: "nome",
      type: "text",
      placeholder: "Digite o nome do administrador",
      required: true,
    },
    {
      label: "Senha",
      name: "senha",
      type: "password",
      placeholder: "Digite a senha",
      required: true,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ReusableForm
          title="Adicionar Novo Administrador"
          formConfig={formConfig}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

AddAdminModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchAdministrators: PropTypes.func.isRequired,
};

export default AddAdminModal;
