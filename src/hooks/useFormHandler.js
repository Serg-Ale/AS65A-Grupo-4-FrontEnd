import {useState} from "react";

const useFormHandler = (initialState,submitCallback) => {
  const [formData,setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitCallback(formData);
      setFormData(initialState); // Reseta o estado do formulário após a submissão
    } catch (error) {
      console.error("Erro ao enviar o formulário:",error);
    }
  };

  return {formData,handleInputChange,handleSubmit};
};

export default useFormHandler;
