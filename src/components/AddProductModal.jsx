import {useState} from "react";
import {createData} from "../api/api"; // Função para criar produtos na API
import PropTypes from "prop-types";

const AddProductModal = ({onClose,fetchProducts}) => {
  const [formData,setFormData] = useState({
    nome: "",
    categoria: "",
  });

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {

    try {
      const response = await createData("http://localhost:3001/produto",formData);
      if (response) {
        console.log("Produto criado com sucesso:",response);
        await fetchProducts(); // Atualiza a lista de produtos no componente pai
        onClose(); // Fecha o modal
      }
    } catch (error) {
      console.error("Erro ao criar o produto:",error);
    }
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome do produto"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            placeholder="Digite a categoria"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

AddProductModal.propTypes = {
  onClose: PropTypes.func.isRequired, // Fecha o modal
  fetchProducts: PropTypes.func.isRequired, // Atualiza os produtos no componente pai
};

export default AddProductModal;
