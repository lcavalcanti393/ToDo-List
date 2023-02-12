import { useState } from 'react';
import { Trash, Eye } from 'phosphor-react';

import styles from './ListItem.module.css';

import { Item } from './Table';

type Props = {
    task: Item,
    isOpen: boolean,
    setIsOpen: Function,
    onDeleteItem: Function;
}

export function ListItem({ task, isOpen, setIsOpen, onDeleteItem }: Props) {

    //const [isOpen, setIsOpen] = useState(false);

    const [isChecked, setIsChecked] = useState(task.done);

    function handleDeleteItem() {
        onDeleteItem(task)
    }

    return (
        <tr key={task.id}>
            <td>  
                <input    
                    type="checkbox" 
                    onChange={e => setIsChecked(e.target.checked)}
                    checked={isChecked}
                /> 
            </td>

            <td className={isChecked ? styles.secondDataFalse : styles.secondData}> 
                {task.content} 
            </td>

            <td className={styles.buttons}>
                <button onClick={() => setIsOpen(!isOpen)} 
                        className={styles.eye} 
                        key={task.id}
                >
                            <Eye size={26} alt="Visualizar tarefa"/>
                </button>

                <button className={styles.trash} onClick={handleDeleteItem}>
                    <Trash  size={26} alt="Apagar tarefa"/>
                </button>

            </td>


            
            
        </tr>
    );

}