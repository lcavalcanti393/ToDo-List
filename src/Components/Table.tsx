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
        { id: 2, content: "Comprar bolo na padaria", done: true},
        { id: 3, content: "Estudar ReactJS", done: false}
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
                            {list.map((item)=>(
                                <ListItem key={item.id} {...item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    );
}