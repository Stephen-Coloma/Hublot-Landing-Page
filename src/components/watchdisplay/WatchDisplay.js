import styles from "../watchdisplay/watchDisplay.module.css"

export default function WatchDisplay({img, text}){
    return(
        <div className={styles.watchDisplayCard}>
            <img src={img} alt="watch"></img>
            <div></div>
            <h5>{text}</h5>
        </div>
    )
}