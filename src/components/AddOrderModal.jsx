import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createData, fetchData } from "../api/api.js";
import useFormHandler from "../hooks/useFormHandler.js";
import ReusableSelectForm from "./ReusableSelectForm.jsx";
import Modal from "./Modal.jsx";

const AddOrderModal = ({ isOpen, onClose, fetchOrders }) => {
  const [products, setProducts] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [loading, setLoading] = useState(true);

  const responsavel = localStorage.getItem("usuario");

  const initialState = {
    produto: "",
    categoria: "",
    responsavel,
    quantidade: 0,
  };

  const { formData, handleInputChange, handleSubmit } = useFormHandler(
    initialState,
    async (data) => {
      // Ajustando os campos antes de enviar a requisição
      const payload = {
        tipo_movimentacao: data.tipo_movimentacao,
        quantidade: parseInt(data.quantidade, 10), // Garante que a quantidade seja um número inteiro
        nome_responsavel: data.nome_responsavel,
        nome_produto: data.produto, // Renomeando 'produto' para 'nome_produto'
        nome_participante: data.nome_participante,
      };

      console.log("Submitting form data:", payload);

      try {
        await createData("http://localhost:3001/movimentacoes", payload);
        onClose();
        fetchOrders();
      } catch (error) {
        console.error("Erro ao criar movimentação:", error);
      }
    }
  );




  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData("http://localhost:3001/produto");
      if (data) {
        setProducts(data.map((product) => product.nome));
      }
      setLoading(false);
    };


    const fetchParticipantes = async () => {
      const data = await fetchData("http://localhost:3001/participante");
      if (data) {
        setParticipantes(data.map((participante) => participante.nome));
      }
      setLoading(false);
    };



    fetchProducts();
    fetchParticipantes();
  }, []);

  const formConfig = [

    {
      label: "Tipo de Movimentação",
      name: "tipo_movimentacao",
      type: "select",
      options: ["entrada", "saida"],
      placeholder: "Selecione um tipo de movimentação",
      required: true,
    },
    {
      label: "Produto",
      name: "produto",
      type: "select",
      options: products,
      placeholder: "Selecione um produto",
      required: true,
    },
    {
      label: "Instituição",
      name: "nome_participante",
      type: "select",
      options: participantes,
      placeholder: "Selecione uma instituição",
      required: true,
    },
    {
      label: "Responsável",
      name: "nome_responsavel",
      type: "select",
      options: [responsavel],
      placeholder: responsavel,
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ReusableSelectForm
        title="Adicionar Movimentação"
        formConfig={formConfig}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

AddOrderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchOrders: PropTypes.func.isRequired,
};

export default AddOrderModal;
