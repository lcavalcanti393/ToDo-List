import styles from './Modal.module.css';

interface ModalContent{
    isOpen: boolean;
    setCloseModal: () => void;
}

type Props = {
    id: number;
    content: string;
    done: boolean;
}

/*

    AINDA FALTA ENVIAR DADOS PARA O MODAL

*/

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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0',
    padding: '0',
    borderRadius: '8px',
    backgroundColor: '#FFF',

}

export function Modal({ isOpen, setCloseModal  }: ModalContent, props: Props){

    if( isOpen ){
        return(
            <div  style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>

                    <header className={styles.headerModal}>
                        <h1>Informações da tarefa</h1>
                    </header>

                    <main className={styles.mainModal}>
                        <table>
                            <thead>
                                <td className={styles.tableFirst}>Situação</td>
                                <td className={styles.tableSecond}>Descrição</td>
                                <td className={styles.tableThird}>Horário</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.tableFirst}> <span> {props.done ? 'Feito' : 'Pendente'} </span> </td>
                                    <td className={styles.tableSecond}>{props.content}</td>
                                    <td className={styles.tableThird}> <span> 2 horas atrás </span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>                    

                    <footer className={styles.footerModal}>
                        <button className={styles.footerButton} 
                                onClick={setCloseModal}
                                type='submit'
                        >
                                <strong>Fechar modal</strong>
                        </button>
                    </footer>
                </div>
            </div>
        );
    }

    return null;

}