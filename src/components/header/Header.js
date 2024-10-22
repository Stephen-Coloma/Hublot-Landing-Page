import { useRef,useEffect } from 'react';
import styles from '../header/header.module.css'
import Link from 'next/link';

export default function Header({pageSelected}) {
    //style for selected page

    const scrollToTop = (event) => {
      event.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'})
    }

    // use ref for changing menu logo
    const menuRef = useRef(null);
    const hiddenNavRef = useRef(null);

    const handleCheckboxChange = (event) => {
      if(event.target.checked){
        menuRef.current.src = "/assets/close.svg";
        hiddenNavRef.current.classList.add(styles.visible);
        document.body.classList.add(styles.noScroll)
      }else{
        menuRef.current.src = "/assets/menu-header.svg";
        hiddenNavRef.current.classList.remove(styles.visible);
        document.body.classList.remove(styles.noScroll)
      }
    }
    return (  
      <header className={styles.header}>
        <nav className={styles.nav}>

          <div className={`${styles.imageContainer} ${styles.mobile}`}>
              <input
                type="checkbox"
                id={styles.checkbox}
                onChange={handleCheckboxChange}
              ></input>
              <label htmlFor={styles.checkbox} id={styles.labelForCheckbox}>
                <img id={styles.menu} ref={menuRef} src="/assets/menu-header.svg" alt="Logo" />
              </label>  
          </div>

          <div className={styles.imageContainer} id={styles.logoContainer}>
            <Link href="/"><img src="/assets/hublot-logo-header.svg" alt="Logo" onClick={handleCheckboxChange}/></Link>
          </div>

          {/* watches, our world and boutiques */}
          <div className={styles.web} id={styles.textContainer}>
            <Link href="/watches" className={styles.defaultLink}>
              <h2 className={`${(pageSelected === 'watchesPage') ? styles.selectedPage : styles.notSelectedPage}`}>WATCHES</h2>
            </Link>
            <Link href="/our-world" className={styles.defaultLink}>
              <h2 className={`${(pageSelected === 'ourWorldPage') ? styles.selectedPage : styles.notSelectedPage}`}>OUR WORLD</h2>
            </Link>
            <Link href="/boutiques" className={styles.defaultLink}>
              <h2 className={`${(pageSelected === 'boutiquesPage') ? styles.selectedPage : styles.notSelectedPage}`}>BOUTIQUES</h2>
            </Link>
          </div>


          <div className={`${styles.imageContainer} ${styles.web}`}>
              <img src='/assets/heart-header.svg'></img>
          </div>
          <div className={`${styles.imageContainer} ${styles.web}`}>
          <img src='/assets/search-header.svg'></img>
          </div>

          <div className={styles.imageContainer}>
            <img src="/assets/bag-header.svg" alt="Logo" />
          </div>

          <div className={`${styles.imageContainer} ${styles.mobile}`}>
            <img src="/assets/profile-header.svg" alt="Logo" />
          </div>

          <div className={styles.web} id={styles.hublotista}>
            <h2>HUBLOTISTA</h2>
            <img src='/assets/profile-header.svg'></img>
          </div>
        </nav>

        <div id={styles.search}>
            <div>
              <img id={styles.searchIcon} src='/assets/search-header.svg'></img>
            </div>
            <h2>What are you looking for?</h2>
        </div>

        <div className={styles.floater} onClick={scrollToTop}>
          <h1>BACK TO TOP</h1>
          <div>
            <img src="/assets/arrow-up.svg"></img>
          </div>
        </div>

        <nav className={`${styles.hiddenNav}`} ref={hiddenNavRef}>
          <Link href="/watches" className={styles.defaultLink} onClick={handleCheckboxChange}>
            <h2>Watches</h2>
          </Link>
          <Link href="/our-world" className={styles.defaultLink} onClick={handleCheckboxChange}>\
            <h2>Our World</h2>
          </Link>
          <Link href="/boutiques" className={styles.defaultLink} onClick={handleCheckboxChange}>
            <h2 >Boutiques</h2>
          </Link>
        </nav>
      </header>
    );
  }