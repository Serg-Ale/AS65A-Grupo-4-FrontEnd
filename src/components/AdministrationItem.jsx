import PropTypes from 'prop-types';
import EditAdminModal from './EditAdminModal.jsx';
import { useState } from 'react';

const AdministrationItem = ({ nome, fetchAdministrators }) => {
  const [action, setAction] = useState("");

  return (
    <>
      <div className="item">
        <div className="start">
          <div className="icon">
            <i className="fi fi-rr-circle-user"></i>
          </div>
          <div className="info">
            <h3>{ nome }</h3>
            <div className="password">
              <span>*********</span>
              <button >
                <i id="eye-opened" className="fi fi-rr-eye"></i>
                {/* <i id="eye-closed" className="fi fi-rr-eye-crossed"></i> */ }
              </button>
            </div>
          </div>
        </div>
        <div className="end">
          <button onClick={ (e) => {
            e.preventDefault();
            setAction("edit-admin-modal");
          } }>
            <i className="fi fi-rr-pen-field"></i>
          </button>
        </div>
        <EditAdminModal
          isOpen={ action === "edit-admin-modal" }
          nome={ nome }
          onClose={ () => {
            console.log("Closing modal...");
            setAction("");
          } }
          fetchAdministrators={ fetchAdministrators }
        />
      </div>
    </>
  );
};

AdministrationItem.propTypes = {
  nome: PropTypes.string.isRequired,
  fetchAdministrators: PropTypes.func.isRequired,
};



export default AdministrationItem;
