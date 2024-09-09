import styles from '../header/header.module.css'

export default function Header() {
    return (
      <header>

        <nav className={styles.nav}>
          <div className={styles.imageContainer}>
            <img id={styles.burger} src="../assets/burger-header.svg" alt="Logo" />
          </div>
          <div className={styles.imageContainer} id={styles.logo}>
            <img src="../assets/hublot-logo-header.svg" alt="Logo" />
          </div>
          <div className={styles.imageContainer}>
            <img src="../assets/bag-header.svg" alt="Logo" />
          </div>
          <div className={styles.imageContainer}>
            <img src="../assets/profile-header.svg" alt="Logo" />
          </div>

        </nav>

        <div className={styles.search}>
            <div>
              <img id={styles.searchIcon} src='../assets/search-header.svg'></img>
            </div>
            <h2>What are you looking for?</h2>
        </div>
      </header>
    );
  }