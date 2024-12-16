import MainHeader from "../components/MainHeader.jsx";
import Aside from "../components/Aside.jsx";
import Modal from "../components/Modal.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const Dashboard = () => {
  const [isModalOpen,setIsModalOpen] = useState(false); // Controle do modal
  const [modalContent,setModalContent] = useState(null); // Conteúdo dinâmico do modal

  // Função para abrir o modal
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <main className="dashboard">
      <MainHeader />
      <div className="board">
        <div className="content">
          <Aside />
          <div className="content-area">
            {/* Exibe o conteúdo conforme a rota */}
            <Outlet />
          </div>
        </div>
      </div>

      {/* Renderiza o Modal Genérico */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </main>
  );
};

export default Dashboard;
