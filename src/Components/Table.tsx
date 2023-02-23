import { ClipboardText, PlusCircle } from 'phosphor-react';
import {  useState } from 'react';

import { ListItem } from './ListItem';

import styles from './Table.module.css';


export type Item = {
    id: number;
    content: string;
    done: boolean;
}


export function Table(){

    const[list, setList] = useState<Item[]>([
        { id: 0, content: "Item aleatório para testes 1", done: false},
        { id: 1, content: "Item aleatório para testes 2", done: true},
        { id: 2, content: "Estudar ReactJS", done: false},
        { id: 3, content: "Estudar NodeJS", done: false},
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

    function onDeleteItem(listItens: Item) {

            
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
                    
                    <strong>Criar Tarefa</strong>
                </button>
                
            </header>

            <main>
                <div className={styles.tableContainer}>

                    <div className={styles.tableCount}>
                        <span>Tarefas cadastradas: {list.length}</span>
                    </div>

                    <div className={styles.table}>                                        

                            {list.length <= 0 && (
                                <div className={styles.empty}>
                                        <ClipboardText size={32} />
                                        <p>Sem tarefas cadastradas</p>
                                </div>
                            )}
                                
                            {list.map((item)=>(
                                <ListItem   key={item.id}
                                task={item}
                                onDeleteItem={onDeleteItem}
                                />                                           
                            ))}
                       
                    </div>
                    
                </div>
            </main>            

        </div>
    );
}
