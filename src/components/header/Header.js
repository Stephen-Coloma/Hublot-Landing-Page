import styles from '../header/header.module.css'

export default function Header() {
    return (
      <header>

        <nav className={styles.nav}>

          <div className={`${styles.imageContainer} ${styles.mobile}`}>
            <img id={styles.burger} src="../assets/burger-header.svg" alt="Logo" />
          </div>

          <div className={styles.imageContainer} id={styles.logoContainer}>
            <img src="../assets/hublot-logo-header.svg" alt="Logo" />
          </div>

          {/* watches, our world and boutiques */}
          <div className={styles.web} id={styles.textContainer}>
            <h2>WATCHES</h2>
            <h2>OUR WORLD</h2>
            <h2>BOUTIQUES</h2>
          </div>

          <div className={`${styles.imageContainer} ${styles.web}`}>
              <img src='../assets/heart-header.svg'></img>
          </div>
          <div className={`${styles.imageContainer} ${styles.web}`}>
          <img src='../assets/search-header.svg'></img>
          </div>

          <div className={styles.imageContainer}>
            <img src="../assets/bag-header.svg" alt="Logo" />
          </div>

          <div className={`${styles.imageContainer} ${styles.mobile}`}>
            <img src="../assets/profile-header.svg" alt="Logo" />
          </div>

          <div className={styles.web} id={styles.hublotista}>
            <h2>HUBLOTISTA</h2>
            <img src='../assets/profile-header.svg'></img>
          </div>
        </nav>

        <div id={styles.search}>
            <div>
              <img id={styles.searchIcon} src='../assets/search-header.svg'></img>
            </div>
            <h2>What are you looking for?</h2>
        </div>
      </header>
    );
  }