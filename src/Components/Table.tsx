import { useState } from 'react';
import { ListItem } from './ListItem';

import styles from './Table.module.css';


export type Item = {
    id: number;
    content: string;
    done: boolean;
}


export function Table(){

    const[list, setList] = useState<Item[]>([
        { id: 1, content: "Comprar pão na padaria", done: false},
        { id: 2, content: "Comprar bolo na padaria", done: true}
    ]);

    return(
        <div className={styles.container}>
            <header className={styles.taskHeader}>
                <input type="text" placeholder="Escrever nova tarefa" />
                <button type='submit' ><strong>Cadastrar Nova Tarefa</strong></button>
            </header>

            <main>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>                   
                        <tbody>
                            {list.map((item, index)=>(
                                <ListItem   key={index} task={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    );
}