import styles from '@/components/boutiqueCard/boutiqueCard.module.css'

export default function BoutiqueCard({img, city, address,  utc}){
    // calculate the real utc based ont the 
    const date = new Date();
    const hours = date.getUTCHours() + (utc);
    const cityHours = (hours < 10) ? `0${hours}` : hours;
    const minutes = date.getMinutes()
    const cityMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <img src={img} alt='store'></img>
            </div>

            <div className={styles.content}>
                <h2 id={styles.city}>{city}</h2>
                <h4 id={styles.address}>{address}</h4>
            </div>
            
            <div className={styles.timeContainer}>
                    <h4 id={styles.time}>{`${cityHours}:${cityMinutes}`}</h4>
                    <div></div>
            </div>
        </div>
    )
}