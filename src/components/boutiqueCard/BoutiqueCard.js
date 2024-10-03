import styles from '@/components/boutiqueCard/boutiqueCard.module.css'

export default function BoutiqueCard({img, city, address,  utc}){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <img src={img} alt='store'></img>
            </div>

            <div className={styles.content}>
                <h2 id={styles.city}>{city}</h2>
                <h4 id={styles.address}>{address}</h4>

                <div className={styles.timeContainer}>
                    <h4 id={styles.utc}>{utc}</h4>
                    <div></div>
                </div>
            </div>
        </div>
    )
}