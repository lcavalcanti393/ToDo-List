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
    flex: 1,
    position : 'fixed',
    width: '45rem',
    height: '20rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    /*padding: '9.375rem',*/
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

                    <main>
                        <table>
                            <thead>
                                <td>Situação</td>
                                <td>Descrição</td>
                                <td>Horário</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{props.done ? 'Feito' : 'Pendente'}</td>
                                    <td>{props.content}</td>
                                    <td>2 horas atrás</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                    

                    <p>Testando Modal</p>

                    <footer>
                        <button className={styles.footerButton} onClick={setCloseModal}>Fechar modal</button>
                    </footer>
                </div>
            </div>
        );
    }

    return null;

}