import {updateData} from '../api/api.js';
import PropTypes from 'prop-types';
import useFormHandler from '../hooks/useFormHandler.js';
import ReusableForm from './ReusableForm.jsx';

const EditStorageModal = ({id_produto,nome,categoria}) => {
  const initialState = {
    nome,
    categoria
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    (data) => updateData(`http://localhost:3001/produto/${id_produto}`,data)
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
    <div>

      <ReusableForm
        title="Adicionar Novo Administrador"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

EditStorageModal.propTypes = {
  id_produto: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};

export default EditStorageModal;