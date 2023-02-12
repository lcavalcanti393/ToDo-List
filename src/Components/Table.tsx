import { useState } from 'react';
import { ListItem } from './ListItem';
import { Modal } from './Modal';

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

    const [isOpen, setIsOpen] = useState(false);

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

    function onDeleteItem(listItens: Item): void {
        
        const newListWithDeletedItem = list.filter(lists => {
            return lists !== listItens;
        });

        setList(newListWithDeletedItem);
    }

    return(
        <div className={styles.container}>
            <header className={styles.taskHeader}>

                <input  type="text" 
                        value={inputItem} 
                        placeholder="Escrever nova tarefa"
                        onChange={e=>setInputItem(e.target.value)}
                />
                <button type='submit' 
                        onClick={handleAddItem} 
                >
                    <strong>Cadastrar Nova Tarefa</strong>
                </button>
                
            </header>

            <main>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>                   
                        <tbody>
                            {list.map((item)=>(
                                <ListItem   key={item.id} 
                                            task={item} 
                                            onDeleteItem={onDeleteItem}
                                            isOpen={isOpen}
                                            setIsOpen={()=> setIsOpen(!isOpen)}
                                />
                                            
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <Modal  isOpen={isOpen} 
                    setCloseModal={() => setIsOpen(!isOpen)}
            />

        </div>
    );
}