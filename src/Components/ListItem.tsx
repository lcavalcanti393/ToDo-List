import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './ListItem.module.css';

import { Item } from './Table';
import { Modal } from './Modal';

type Props = {
    task: Item,
    onDeleteItem: Function;
}

export function ListItem({ task,onDeleteItem }: Props) {

    const [isOpen, setIsOpen] = useState(false);

    const [isChecked, setIsChecked] = useState(task.done);

    function handleDeleteItem() {
        if(isChecked === true){
            return onDeleteItem(task);
        }
        handleOpenModal();
    }

    function handleOpenModal() {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <table className={styles.tableLine}>
                <tbody>
                    <tr>
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
                                <Trash  size={28} alt="Apagar tarefa"/>
                            </button>

                        </td>

                    </tr>
                </tbody>
            </table>

            <Modal  isOpen={isOpen}
                    setCloseModal={handleOpenModal}
                    task={task}
            />
        </>     
    );

}
