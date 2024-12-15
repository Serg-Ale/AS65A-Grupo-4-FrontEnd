import PropTypes from "prop-types";
import useFormHandler from '../hooks/useFormHandler.js';
import {createData} from '../api/api.js';
import ReusableForm from './ReusableForm.jsx';

const AddProductModal = ({onClose,fetchProducts}) => {
  const initialState = {
    nome: "",
    categoria: "",
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      const response = await createData("http://localhost:3001/produto",data);
      if (response) {
        await fetchProducts();
        onClose();
      }
    }
  );

  const formConfig = [
    {label: "Nome do Produto",name: "nome",type: "text",placeholder: "Digite o nome do produto",required: true},
    {label: "Categoria",name: "categoria",type: "text",placeholder: "Digite a categoria",required: true},
  ];

  return (
    <ReusableForm
      title="Adicionar Produto"
      formConfig={formConfig}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

AddProductModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default AddProductModal;
