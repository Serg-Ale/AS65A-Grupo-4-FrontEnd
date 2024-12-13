import {useState} from 'react';
import Administration from '../components/Administration.jsx';
import Aside from '../components/Aside.jsx';
import MainHeader from '../components/MainHeader.jsx';
import Orders from '../components/Orders.jsx';
import Storage from '../components/Storage.jsx';

const Dashboard = () => {
  const [activeComponent,setActiveComponent] = useState('Storage'); // Componente padrão

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Storage':
        return <Storage />;
      case 'Orders':
        return <Orders />;
      case 'Administration':
      default:
        return <Administration />;
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
    </main>
  );
};

export default Dashboard;
