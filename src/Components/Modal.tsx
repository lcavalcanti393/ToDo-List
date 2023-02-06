import { useState } from 'react';

interface ModalContent{
    isOpen: boolean;
    setCloseModal: () => void;
}

const BACKGROUND_STYLE: object = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: '#000',
    backgroundColor: 'rgb(0,0,0,0.7)',
    zIndex: '100',
    textAlign: 'center',
}

const MODAL_STYLE: object = {
    position : 'fixed',
    width: '45rem',
    height: '20rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '9.375rem',
    borderRadius: '8px',
    backgroundColor: '#FFF',

}

export function Modal({ isOpen, setCloseModal  }: ModalContent){

    if( isOpen ){
        return(
            <div  style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <p>Testando Modal</p>
                    <button onClick={setCloseModal}>Fechar modal</button>
                </div>
            </div>
        );
    }

    return null;

}