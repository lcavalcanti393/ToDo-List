import styles from './Header.module.css';

export function Header(){
    return(
        <div className={styles.titleBox}>
            <h1 className={styles.title}>To Do List</h1>   
        </div>
    );
}