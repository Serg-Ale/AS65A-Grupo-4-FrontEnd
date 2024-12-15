import useFormHandler from '../hooks/useFormHandler.js';
import {createData} from '../api/api.js';
import ReusableForm from './ReusableForm.jsx';

const AddAdminModal = () => {
  const initialState = {
    nome: "",
    senha: "",
    tipo_acesso: "admin",
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    (data) => createData("http://localhost:3001/register",data)
  );

  const formConfig = [
    {label: "Nome",name: "nome",type: "text",placeholder: "Digite o nome do administrador",required: true},
    {label: "Senha",name: "senha",type: "password",placeholder: "Digite a senha",required: true},
  ];

  return (
    <ReusableForm
      title="Adicionar Novo Administrador"
      formConfig={formConfig}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddAdminModal;
