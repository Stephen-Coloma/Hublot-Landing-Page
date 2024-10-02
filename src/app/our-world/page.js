'use client'

import styles from '@/app/our-world/our-world.module.css'

import Footer from "@/components/footer/Footer"
import Header  from "@/components/header/Header"
import ThemeCard from '@/components/themeCard/ThemeCard'

export default function OurWorld(){
    const themeCardDetails = [
        { img: "/assets/theme-card-5.jpg", text: "OUR WORLD", heading: "CRAFTMANSHIP", buttonText: "SEE THE COLLECTION"  },
        { img: "/assets/theme-card-6.jpg", text: "OUR WORLD", heading: "PARTNERSHIP", buttonText: "LEARN MORE"  },
        { img: "/assets/theme-card-7.jpg", text: "OUR WORLD", heading: "NEWS AND EVENTS", buttonText: "LEARN MORE"  }
    ]

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

                {/* theme cards */}
                <div className={styles.themeCardContainer}>
                    <ThemeCard img={themeCardDetails[0].img} text={themeCardDetails[0].text} heading={themeCardDetails[0].heading} buttonText={themeCardDetails[0].buttonText} darkMode={true}></ThemeCard>
                </div>
                
                <div className={styles.backgroundContainer}>
                    <div className={styles.themeCardContainer} id={styles.bottomContainer}>
                        <ThemeCard img={themeCardDetails[1].img} text={themeCardDetails[1].text} heading={themeCardDetails[1].heading} buttonText={themeCardDetails[1].buttonText}></ThemeCard>
                        <ThemeCard img={themeCardDetails[2].img} text={themeCardDetails[2].text} heading={themeCardDetails[2].heading} buttonText={themeCardDetails[2].buttonText}></ThemeCard>
                    </div>
                </div>

            <Footer></Footer>
        </>
    )
}