import PropTypes from "prop-types";
import {createData} from '../api/api.js';
import useFormHandler from '../hooks/useFormHandler.js';
import Modal from "./Modal.jsx";
import ReusableForm from './ReusableForm.jsx';

const AddProductModal = ({isOpen,onClose,fetchProducts}) => {
  const initialState = {
    nome: "",
    categoria: "",
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      console.log("Submitting form data:",data);
      await createData("http://localhost:3001/produto",data);
      onClose(); // Fecha o modal
      fetchProducts();
    }
  );

  const formConfig = [
    {
      label: "Nome do Produto",
      name: "nome",
      type: "text",
      placeholder: "Digite o nome do produto",
      required: true,
    },
    {
      label: "Categoria",
      name: "categoria",
      type: "text",
      placeholder: "Digite a categoria",
      required: true,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ReusableForm
        title="Adicionar Produto"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

AddProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default AddProductModal;
