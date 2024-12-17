import PropTypes from "prop-types";
import {useEffect,useRef,useCallback} from "react";
import "../scss/components/Modal.scss";

const Modal = ({
  isOpen = false,
  onClose = () => {},
  children = null,
  className = "",
}) => {
  const modalRef = useRef(null);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown",handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown",handleOutsideClick);
    };
  },[handleOutsideClick,isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal-box" ref={modalRef}>
        <div className="styled-container">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Controla a visibilidade do modal
  onClose: PropTypes.func.isRequired, // Função chamada ao fechar o modal
  children: PropTypes.node, // Conteúdo do modal
  className: PropTypes.string, // Classes adicionais para personalização
};

export default Modal;
