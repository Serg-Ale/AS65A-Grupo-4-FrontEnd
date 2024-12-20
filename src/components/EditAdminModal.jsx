import { fetchData, updateData } from '../api/api.js';
import PropTypes, { string } from 'prop-types';
import useFormHandler from '../hooks/useFormHandler.js';
import ReusableForm from './ReusableForm.jsx';
import Modal from './Modal.jsx';

const EditAdminModal = ({ isOpen, onClose, nome, fetchAdministrators }) => {

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    { senhaAtual: "", novaSenha: "" },
    async (data) => {
      const { id_usuario } = await fetchData(`http://localhost:3001/users/${nome}`);
      const payload = { ...data, id_usuario };

      console.log("Submitting form data:", payload);
      await updateData("http://localhost:3001/change-password", payload);
      onClose();
      fetchAdministrators();
    }
  );


  const formConfig = [
    {
      label: "Senha atual",
      name: "senhaAtual",
      type: "text",
      placeholder: "Digite a senha atual....",
    },
    {
      label: "Nova senha",
      name: "novaSenha",
      type: "text",
      placeholder: "Digite a nova senha....",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ReusableForm
        title="Editar Admin"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

EditAdminModal.propTypes = {
  nome: string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchAdministrators: PropTypes.func.isRequired,
};

export default EditAdminModal;