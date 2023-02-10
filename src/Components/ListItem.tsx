import { useState } from 'react';
import { Trash, Eye } from 'phosphor-react';
import styles from './ListItem.module.css';

import { Item } from './Table';
import { Modal } from './Modal';


type Props = {
    task: Item
}

export function ListItem({ task }: Props) {

    const [isOpen, setIsOpen] = useState(false);

    const[isChecked, setIsChecked] = useState(task.done);

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
                          
                >
                            <Eye size={26}  />
                </button>

                <button className={styles.trash}>
                    <Trash size={26}/>
                </button>

            </td>


            <Modal  isOpen={isOpen} 
                    setCloseModal={() => setIsOpen(!isOpen)} 
            />
            
        </tr>
    );

}