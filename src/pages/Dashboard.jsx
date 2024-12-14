import {useState} from "react";
import Administration from "../components/Administration.jsx";
import Aside from "../components/Aside.jsx";
import MainHeader from "../components/MainHeader.jsx";
import Orders from "../components/Orders.jsx";
import Storage from "../components/Storage.jsx";
import Modal from "../components/Modal.jsx";

const Dashboard = () => {
  const [activeComponent,setActiveComponent] = useState("Storage"); // Componente padrão
  const [isModalOpen,setIsModalOpen] = useState(false); // Controle do modal
  const [modalContent,setModalContent] = useState(null); // Conteúdo dinâmico do modal

  // Função para abrir o modal
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Storage":
        return <Storage openModal={openModal} />;
      case "Orders":
        return <Orders openModal={openModal} />;
      case "Administration":
      default:
        return <Administration openModal={openModal} />;
    }
  };

  return (
    <main className="dashboard">
      <MainHeader />
      <div className="board">
        <div className="content">
          <Aside setActiveComponent={setActiveComponent} />
          {renderComponent()}
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
