'use client'

import { useState } from 'react';
import styles from '../landingContent/landingContent.module.css';

export default function LandingContent(){
    
    const [image, setImage] = useState('/assets/main-watch-1.png')
    const [circle1, setCircle1] = useState(styles.circleV2)
    const [circle2, setCircle2] = useState(styles.circleV1)

    const handleLeftClick = () => {
        setImage('/assets/main-watch-1.png')
        setCircle1(styles.circleV2)
        setCircle2(styles.circleV1)
    }

    const handleRightClick = () => {
        setImage('/assets/main-watch-2.png')
        setCircle1(styles.circleV1)
        setCircle2(styles.circleV2)
    }

    return(
        <>
            <div className={styles.mainContainer}>
                <img src={image}></img>

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
                            <h2 id={styles.exclusive}>ONLINE EXCLUSIVE</h2>
                        </div>
                    </div>
                </div>      

                <div className={styles.bellowButtons}>
                    <div className={styles.arrowContainer}>
                        <button onClick={handleLeftClick}><img src='/assets/left-arrow.svg'></img></button>
                    </div>

                    <div className={styles.middleContainer}>
                        <div className={circle1}></div>
                        <div className={circle2}></div>
                    </div>

                    <div className={styles.arrowContainer}>
                        <button onClick={handleRightClick}><img src='/assets/right-arrow.svg'></img></button>
                    </div>
                </div>          
            </div>
            
        </>
    )
}