import {updateData} from '../api/api.js';
import PropTypes from 'prop-types';
import useFormHandler from '../hooks/useFormHandler.js';
import ReusableForm from './ReusableForm.jsx';
import Modal from './Modal.jsx';

const EditAdminModal = ({isOpen,onClose,fetchAdministrators}) => {
  const initialState = {
    senhaAtual: "Senha atual",
    novaSenha: "Nova senha"
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:",data);
      await updateData(`http://localhost:3001/change-password`,data);
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
        title="Editar Produto"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

EditAdminModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchAdministrators: PropTypes.func.isRequired,
};

export default EditAdminModal;