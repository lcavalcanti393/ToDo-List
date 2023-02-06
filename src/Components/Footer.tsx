import styles from './Footer.module.css';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <span>Feito por </span><strong><a href="https://github.com/lcavalcanti393" target="_blank">&copy;Lucas Cavalcanti</a></strong>
            </footer>
        </>
    );
}