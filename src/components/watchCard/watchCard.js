import styles from '../watchCard/watchCard.module.css'

export default function WatchCardDisplay({img, category, name, isNew, price}){

    // this will be used to determine wheter to display the new label or not
    const propStyle = {
        display: (isNew) ? 'block' : 'none',
    }
   
    return(
        <>
            <div className={styles.watchCardContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.shoppingCartContainer}>
                        <img src="/assets/bag-header.svg"></img>
                    </div>
                    <h2 style={propStyle} id={styles.new}>NEW</h2>
                </div>

                <img src={img} className={styles.watchImage} alt={`${name} + .jpg`}></img>

                <div className={styles.bottomContainer}>
                    <h4>{category}</h4>
                    <h2>{name}</h2>
                    <div></div>
                    <h4 id={styles.priceLabel}>{price}</h4>
                </div>

                <div className={styles.heartContainer}>
                    <button></button>
                </div> 
            </div>
        </>
    )
}