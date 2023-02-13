import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './ListItem.module.css';

import { Item } from './Table';

type Props = {
    task: Item,
    onDeleteItem: Function;
}

export function ListItem({ task,onDeleteItem }: Props) {

    const [isChecked, setIsChecked] = useState(task.done);

    function handleDeleteItem() {
        onDeleteItem(task);
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

                <button className={styles.trash} onClick={handleDeleteItem}>
                    <Trash  size={26} alt="Apagar tarefa"/>
                </button>

            </td>

        </tr>
    );

}