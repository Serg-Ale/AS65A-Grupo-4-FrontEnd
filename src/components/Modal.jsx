import PropTypes from "prop-types";
import {useEffect,useRef} from "react";
import "../scss/components/Modal.scss";

const Modal = ({isOpen,onClose,children,className}) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown",handleOutsideClick);
    } else {
      document.removeEventListener("mousedown",handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown",handleOutsideClick);
    };
  },[isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal-box" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Controla a visibilidade do modal
  onClose: PropTypes.func.isRequired, // Função chamada ao fechar o modal
  children: PropTypes.node.isRequired, // Conteúdo do modal
  className: PropTypes.string, // Classes adicionais para personalização
};

Modal.defaultProps = {
  className: "",
};

export default Modal;
