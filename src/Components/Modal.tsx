import { Item } from './Table';

import styles from './Modal.module.css';

interface ModalContent{
    isOpen: boolean;
    setCloseModal: () => void;
    task: Item,
}

type Props = {
    id: number,
    content: string,
    done: boolean
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
    display: 'flex',
    justyfyContent: 'center',
    alignItens: 'center',
    flexDirection: 'column',
    position : 'fixed',
    width: '60rem',
    height: '20rem',
    top: '34%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0',
    padding: '0',
    borderRadius: '8px',
    backgroundColor: '#FFF',

}

export function Modal({ isOpen, setCloseModal  }: ModalContent){

    function handleCloseModal() {
        setCloseModal();
    }

    if( isOpen ){
        return(
            <div  style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>

                    <header className={styles.headerModal}>
                        <h1>Informações da tarefa</h1>
                    </header>

                    <main className={styles.mainModal}>

                        <table className={styles.tableModal}>
                            <tbody>
                                    <tr>
                                        <td>Tarefa ainda não concluída! Conclua-a para excluir.</td>
                                    </tr>
                            </tbody>
                        </table>
                        
                    </main>                    

                    <footer className={styles.footerModal}>
                        <button className={styles.footerButton} 
                                onClick={()=>handleCloseModal()}
                                type='submit'
                        >
                            <strong>Fechar</strong>
                        </button>
                    </footer>
                </div>
            </div>
        );
    }

    return null;

}