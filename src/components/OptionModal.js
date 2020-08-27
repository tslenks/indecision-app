import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Optiondazdazdz"
        onRequestClose={props.clearSelectedOption}
        closeTimeoutMS={200} // we se a time in milliseconds to wait before closing the modal
        className="modal"
    >
        <h3 className="modal__title"> Selected Option </h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
