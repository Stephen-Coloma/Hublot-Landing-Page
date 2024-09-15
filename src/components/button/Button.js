import styles from '../button/button.module.css'

export default function Button({isSelected, text, onClick}) {

    // This style is only used for clicking the button
    const propStyle = {
        backgroundColor: isSelected ? "var(--main-color)" : "rgba(0, 0, 0, 0)",
        color: isSelected ? "var(--accent-color-1)" : "var(--main-color)"
    }

    return(
        <button className={styles.button} style={propStyle} onClick={onClick}>{text}</button>
    );
}