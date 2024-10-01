import Button from "../button/Button"
import styles from "../themeCard/themeCard.module.css"

export default function ThemeCard({img, text, heading, buttonText, darkMode}){

    //extra css for the button part of the theme card
    const style = {
        border: darkMode ? 'var(--main-color) 1px solid' : 'var(--accent-color-1) 1px solid',
        backgroundColor: darkMode ? 'var(--main-color)' : 'none',
        color: darkMode ? 'var(--accent-color-1)' : 'none'

    }

    return(
       <div className={styles.mainContainer}>
            <div className={styles.imageHolder}>
                <img src={img}></img>
            </div>
            
            <div className={styles.content} 
                style={
                    {   backgroundColor: darkMode ? 'var(--accent-color-1)' : 'var(--main-color)',
                        color: darkMode ? 'var(--main-color)' : 'var(--accent-color-1)',
                    }}>
                <h2>{text}</h2>
                <h1>{heading}</h1>
                <button className={styles.themeCardButton} style={style}>{buttonText}</button>
            </div>
       </div>
        
    )
}