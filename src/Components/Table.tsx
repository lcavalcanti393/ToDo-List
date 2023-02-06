import { useState } from 'react';
import { Trash, PencilLine, Eye } from 'phosphor-react';
import { Modal } from './Modal';

import styles from './Table.module.css';

export function Table(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={styles.container}>
            <header className={styles.taskHeader}> 
                <button type='submit' onClick={ () => setIsOpen(!isOpen) }><strong>Cadastrar Nova Tarefa</strong></button>
            </header>

            <main>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Status</th>
                                <th>Opções</th>
                                <th>Criação</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Descrição Tarefa 1</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>
                                    <time>2 dias atrás</time>
                                </td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 2</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 3</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 4</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 5</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 6</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 7</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 8</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                            <tr>
                                <td>Descrição Tarefa 9</td>
                                <td>Pendente</td>
                                <td className={styles.buttons}>
                                    <button className={styles.eye}><Eye size={24} /></button>
                                    <button className={styles.pencil}><PencilLine size={24} /></button>
                                    <button className={styles.trash}><Trash size={24}/></button>
                                </td>
                                <td>2 dias atrás</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>

            <footer>

                <Modal isOpen={isOpen} setCloseModal={() => setIsOpen(!isOpen)} />
            </footer>

        </div>
    );
}