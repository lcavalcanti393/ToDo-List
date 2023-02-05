import styles from './Table.module.css';

export function Table(){
    return(
        <div className={styles.container}>
            <header className={styles.taskHeader}> 
                {/*<form action="#" className={styles.taskForm}>*/}
                <button type="submit"><strong>Cadastrar Nova Tarefa</strong></button>
                {/*</form>*/}
            </header>

            <main>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Status</th>
                            <th>Opções</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Descrição Tarefa 1</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 2</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 3</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 4</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 5</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 6</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 7</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 8</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Descrição Tarefa 9</td>
                            <td>Pendente</td>
                            <td className={styles.buttons}>
                                <button disabled>Visualizar</button>
                                <button disabled>Editar</button>
                                <button disabled>Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </main>

            <footer>

            </footer>

        </div>
    );
}