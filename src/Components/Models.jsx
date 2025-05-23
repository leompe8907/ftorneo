import React from 'react';
import '../Static/Style/ModalMessage.scss';

export default function ModalMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="modal-message-overlay">
      <div className="modal-message-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
