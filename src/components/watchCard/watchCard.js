import styles from '../watchCard/watchCard.module.css';

export default function WatchCard({ id, img, category, name, isNew, price }) {
    // this will be used to determine whether to display the new label or not
    const propStyle = {
        display: isNew ? 'block' : 'none',
    };

    return (
        <div className={styles.watchCardContainer}>
            <div className={styles.topContainer}>
                <div className={styles.shoppingCartContainer}>
                    <img src="/assets/bag-header.svg" alt="Shopping Bag Icon" />
                </div>
                <h2 style={propStyle} id={styles.new}>NEW</h2>
            </div>

            <img src={img} className={styles.watchImage} alt={`${name} image`} />

            <div className={styles.bottomContainer}>
                <h4>{category}</h4>
                <h2>{name}</h2>
                <div></div>
                <h4 id={styles.priceLabel}>{price}</h4>
            </div>

            <div className={styles.heartContainer}>
                <input type="checkbox" id={`heart-checkbox-${id}`} />
                <label htmlFor={`heart-checkbox-${id}`}></label>
            </div>
        </div>
    );
}
