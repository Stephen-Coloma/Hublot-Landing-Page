'use client'

import styles from '@/app/our-world/our-world.module.css'

import Footer from "@/components/footer/Footer"
import Header  from "@/components/header/Header"

export default function OurWorld(){
    return(
        <>
            <Header></Header>
                <div className={styles.topContainer}>
                    <img src='/assets/brown-man.jpg'></img>
                    <div className={styles.textContainer}>
                        <h4>WELCOME TO</h4>
                        <h2>OUR WORLD</h2>
                    </div>
                </div>

                <div className={styles.quoteContainer}>
                    <p id={styles.quote}>
                        Exploring every detail of innovation, 
                        Hublot’s world is made of groundbreaking Craftsmanship, 
                        Partnerships and News & Events.
                    </p>
                </div>

            <Footer></Footer>
        </>
    )
}