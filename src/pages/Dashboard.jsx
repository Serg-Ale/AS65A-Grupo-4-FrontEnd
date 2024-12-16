import {Outlet} from "react-router-dom";
import Aside from "../components/Aside.jsx";
import MainHeader from "../components/MainHeader.jsx";

const Dashboard = () => {

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

    </main>
  );
};

export default Dashboard;
