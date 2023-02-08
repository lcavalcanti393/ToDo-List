import styles from './Header.module.css';

export function Header(){
    return(
        <div className={styles.titleBox}>
            <h1 className={styles.title}>Lista de Tarefas</h1>   
        </div>
    );
}