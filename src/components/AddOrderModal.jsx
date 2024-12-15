import {useEffect,useState} from "react";
import PropTypes from "prop-types";
import {createData,fetchData} from "../api/api.js";
import useFormHandler from '../hooks/useFormHandler.js';
import ReusableSelectForm from './ReusableSelectForm.jsx';

const AddOrderModal = ({onClose,fetchOrders}) => {
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [loading,setLoading] = useState(true);

  const initialState = {
    produto: "",
    categoria: "",
    quantidade: 0,
  };

  const {formData,handleInputChange,handleSubmit} = useFormHandler(
    initialState,
    async (data) => {
      const response = await createData("http://localhost:3001/movimentacoes",data);
      if (response) {
        await fetchOrders();
        onClose();
      }
    }
  );

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const data = await fetchData("http://localhost:3001/produto");
      if (data) {
        setProducts(data.map((product) => product.nome));
        setCategories([...new Set(data.map((product) => product.categoria))]);
      }
      setLoading(false);
    };

    fetchProductsAndCategories();
  },[]);

  const formConfig = [
    {
      label: "Produto",
      name: "produto",
      type: "select",
      options: products,
      placeholder: "Selecione um produto",
      required: true,
    },
    {
      label: "Categoria",
      name: "categoria",
      type: "select",
      options: categories,
      placeholder: "Selecione uma categoria",
      required: true,
    },
    {
      label: "Quantidade",
      name: "quantidade",
      type: "number",
      placeholder: "Digite a quantidade",
      required: true,
    },
  ];

  if (loading) {
    return <p>Carregando opções...</p>;
  }

  return (
    <ReusableSelectForm
      title="Adicionar Movimentação"
      formConfig={formConfig}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

AddOrderModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  fetchOrders: PropTypes.func.isRequired,
};

export default AddOrderModal;
