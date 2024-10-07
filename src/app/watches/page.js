'use client'

import Button from "@/components/button/Button";
import Footer from "@/components/footer/Footer"
import Header  from "@/components/header/Header"
import WatchDisplay from "@/components/watchdisplay/WatchDisplay";
import { useState } from "react";
import Carousel from "@/components/carousel/Carousel";
import styles from "@/app/watches/watches.module.css"
import ThemeCard from "@/components/themeCard/ThemeCard";

export default function Watches(){
    const [isSelected, setSelected] = useState(0);
    
    const handleClick = (index) =>{
        setSelected(index);
    }

    const watchItems = [
        { img: "/assets/novelties.png", text: "NOVELTIES" },
        { img: "/assets/big-bang.png", text: "BIG BANG" },
        { img: "/assets/classic-fusion.png", text: "CLASSIC FUSION" },
        { img: "/assets/shaped.png", text: "SHAPED" },
        { img: "/assets/mp.png", text: "MP" },
    ];

    //data for the carousel
    const watchesArray = [
        {
            img: '/assets/watches/unico-sagiling-team.png',
            category: 'BIG BANG',
            name: 'UNICO SAGILING TEAM 42 MM',
            isNew: true,
            price: 'CHF 22,900 *'

        },
        {
            img: '/assets/watches/unico-titanium-blue.png',
            category: 'SQUARE BANG',
            name: 'UNICO TITANIUM BLUE 42 MM',
            isNew: true,
            price: 'CHF 21,900 *'

        },
        {
            img: '/assets/watches/unico-ice-bang.png',
            category: 'BIG BANG',
            name: 'UNICO ICE BANG 42 MM',
            isNew: false,
            price: 'CHF 21,900 *'

        },
        {
            img: '/assets/watches/unico-orange-ceramic.png',
            category: 'BIG BANG',
            name: 'UNICO ORANGE CERAMIC 42 MM',
            isNew: false,
            price: 'CHF 26,900 *'

        },
        {
            img: '/assets/watches/original-steel-ceramic.png',
            category: 'BIG BANG',
            name: 'ORIGINAL STEEL CERAMIC 44 MM',
            isNew: false,
            price: 'CHF 13,300 *'

        },
        {
            img: '/assets/watches/chronograph-black-magic.png',
            category: 'CLASSIC FUSION',
            name: 'CHRONOGRAPH BLACK MAGIC 42 MM',
            isNew: true,
            price: 'CHF 11,200 *'

        },
        {
            img: '/assets/watches/titanium.png',
            category: 'CLASSIC FUSION',
            name: 'TITANIUM 42 MM',
            isNew: true,
            price: 'CHF 7,200 *'

        },
        {
            img: '/assets/watches/unico-titanium-ceramic.png',
            category: 'BIG BANG',
            name: 'UNICO TITANIUM BANG 44 MM',
            isNew: false,
            price: 'CHF 19,900 *'

        },
        {
            img: '/assets/watches/titanium-blue.png',
            category: 'CLASSIC FUSION',
            name: 'TITANIUM BLUE 42 MM',
            isNew: true,
            price: 'CHF 7,200 *'

        },
        {
            img: '/assets/watches/black-magic.png',
            category: 'SPIRIT OF BIG BANG',
            name: 'BLACK MAGIC 42 MM',
            isNew: true,
            price: 'CHF 24,900 *'

        },
        {
            img: '/assets/watches/one-click-steel-diamonds.png',
            category: 'BIG BANG',
            name: 'ONE CLICK STEEL DIAMONDS 33 MM',
            isNew: false,
            price: 'CHF 12,900 *'

        },
        {
            img: '/assets/watches/titanium-diamonds.png',
            category: 'SPIRIT BIG BANG',
            name: 'TITANIUM DIAMONDS 39 MM',
            isNew: true,
            price: 'CHF 16,900 *'

        }
    ]

    const themeCardDetails = [
        { img: "/assets/themeCards/theme-card-4.jpg", text: "OUR WORLD", heading: "UNICO MECHANICAL REVOLUTION", buttonText: "SEE THE COLLECTION"  },
        { img: "/assets/themeCards/theme-card-5.jpg", text: "OUR WORLD", heading: "CRAFTMANSHIP", buttonText: "LEARN MORE"  },
        { img: "/assets/themeCards/theme-card-6.jpg", text: "OUR WORLD", heading: "PARTNERSHIP", buttonText: "LEARN MORE"  }
    ]

    return(
        <>
            <Header pageSelected={'watchesPage'}></Header>
                <div className={styles.watchesHeading}>
                    <h2>WATCHES</h2>
                </div>

                {/* watch display */}
                <div className={styles.watchesWatchCardContainer}>
                    {watchItems.map((watch, index) => (
                    <WatchDisplay
                        key={index}
                        img={watch.img}
                        text={watch.text}
                    />
                    ))}
                </div>

                <div className={styles.watchesMainButton}>
                    <Button isSelected={isSelected === 0 ? true: false} text={'FIND A BOTIQUE'} onClick={()=> handleClick(0)}></Button>
                    <Button isSelected={isSelected === 1 ? true: false} text={'FIND YOUR STRAP'} onClick={()=> handleClick(1)}></Button>
                </div>

                <h2 className={styles.ourTopTopics}>OUR TOP PICKS</h2>

                <Carousel watchesArray={watchesArray}></Carousel>

                {/* find your watch button */}
                <div className={styles.buttonContainer}>
                    <button id={styles.findYourWatchButton}>FIND YOUR HUBLOT WATCH</button>
                </div>

                {/* theme cards */}
                <div className={styles.themeCardContainer}>
                    <ThemeCard img={themeCardDetails[0].img} text={themeCardDetails[0].text} heading={themeCardDetails[0].heading} buttonText={themeCardDetails[0].buttonText}></ThemeCard>
                </div>
                
                <div className={styles.backgroundContainer}>
                    <div className={styles.themeCardContainer} id={styles.bottomContainer}>
                        <ThemeCard img={themeCardDetails[1].img} text={themeCardDetails[1].text} heading={themeCardDetails[1].heading} buttonText={themeCardDetails[1].buttonText} darkMode={true}></ThemeCard>
                        <ThemeCard img={themeCardDetails[2].img} text={themeCardDetails[2].text} heading={themeCardDetails[2].heading} buttonText={themeCardDetails[2].buttonText} darkMode={true}></ThemeCard>
                    </div>
                </div>
                
                
            <Footer></Footer>
        </>
    )
}