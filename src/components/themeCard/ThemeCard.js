import Button from "../button/Button"
import styles from "../themeCard/themeCard.module.css"

export default function ThemeCard({img, text, heading, buttonText}){
    return(
       <div className={styles.mainContainer}>
            <div className={styles.imageHolder}>
                <img src={img}></img>
            </div>
            
            <div className={styles.content}>
                <h2>{text}</h2>
                <h1>{heading}</h1>
                <button className={styles.themeCardButton}>{buttonText}</button>
            </div>
       </div>
        
    )
}