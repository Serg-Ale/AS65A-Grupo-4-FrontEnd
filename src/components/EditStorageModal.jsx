import {updateData} from '../api/api.js';
import PropTypes from 'prop-types';
import useFormHandler from '../hooks/useFormHandler.js';
import ReusableForm from './ReusableForm.jsx';
import Modal from './Modal.jsx';

const EditStorageModal = ({id_produto,nome,categoria,isOpen,onClose,fetchProducts}) => {
  const initialState = {
    nome,
    categoria
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:",data);
      await updateData(`http://localhost:3001/produto/${id_produto}`,data);
      onClose();
      fetchProducts();
    }
  );

  const formConfig = [
    {
      label: "Nome",
      name: "nome",
      type: "text",
      placeholder: nome,
    },
    {
      label: "Categoria",
      name: "categoria",
      type: "text",
      placeholder: categoria,
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

EditStorageModal.propTypes = {
  id_produto: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default EditStorageModal;