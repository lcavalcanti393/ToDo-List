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
        { id: 1, content: "Item aleatóride para testes 1", done: false},
        { id: 2, content: "Item aleatóride para testes 2", done: true},
        { id: 3, content: "Estudar ReactJS", done: false},
    ]);

    const [inputItem, setInputItem] = useState('');

    function handleAddItem() {
        if(inputItem !== ''){        
            const newList = [...list];
            
            newList.push({
                id: list.length+1,
                content: inputItem,
                done: false
            });
            
            setList(newList);
            setInputItem('');
    }
        return null
    }

    function handleDeleteListItem(listItens: Item): void{

        const newListWithoutDeleted = list.filter(lists => {
            return lists !== listItens;
        });

        setList(newListWithoutDeleted);

    }

    return(
        <div className={styles.container}>
            <header className={styles.taskHeader}>
                <input  type="text" 
                        value={inputItem} 
                        placeholder="Escrever nova tarefa"
                        onChange={e=>setInputItem(e.target.value)}
                />
                <button type='submit' onClick={handleAddItem} ><strong>Cadastrar Nova Tarefa</strong></button>
            </header>

            <main>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>                   
                        <tbody>
                            {list.map((item)=>(
                                <ListItem key={item.id} task={item}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    );
}