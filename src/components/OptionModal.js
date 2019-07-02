import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Você deve fazer isto:"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Você deve fazer isto:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>OK</button>
  </Modal>
);

export default OptionModal;
