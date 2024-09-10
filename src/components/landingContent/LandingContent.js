import styles from '../landingContent/landingContent.module.css';

export default function LandingContent(){
    return(
        <>
            <div className={styles.mainContainer}>
                <img src='/assets/main-watch-1.png'></img>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <h3>CLASSIC FUSION</h3>
                        <h1>ESSENTIAL <br></br>GREY</h1>
                        <div className={styles.buttomContent}>
                            <div className={styles.leftContent}>
                                <h2>LEARN MORE  </h2>
                                <img src='/assets/bag-white.svg'></img>
                            </div>
                            <h2 id={styles.separator}>|</h2>
                            <h2>ONLINE EXCLUSIVE</h2>
                        </div>
                    </div>
                </div>                
            </div>
            
        </>
    )
}