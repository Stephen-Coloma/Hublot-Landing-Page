'use client'

import BoutiqueCard from "@/components/boutiqueCard/BoutiqueCard"
import Footer from "@/components/footer/Footer"
import Header  from "@/components/header/Header"
import styles from "@/app/boutiques/boutique.module.css"

const boutiqueDetails = [
    {img: '/assets/boutiques/geneva.jpg', city: 'GENEVA', address: 'Rue du Rhône 86 , Geneva , 1204', utc: 2},
    {img: '/assets/boutiques/new-york-5th-avenue.jpg', city: 'NEW YORK 5TH AVENUE', address: '743 Fifth Avenue , New York , 10022', utc: -4},
    {img: '/assets/boutiques/ginza.jpg', city: 'GINZA', address: '銀座3-5-9 , Ginza / 銀座 , 104-0061', utc: 9},
    {img: '/assets/boutiques/paris-vendome.jpg', city: 'PARIS VENDôME', address: '10 Place Vendome , Paris , 75001', utc: 2},
    {img: '/assets/boutiques/london-new-bond-street.jpg', city: 'LONDON NEW BOND STREET', address: '14 New Bond Street , London , W1S 3SX', utc: 1},
    {img: '/assets/boutiques/hong-kong-heritage.jpg', city: 'HONG KONG HERITAGE', address: '2A Canton Road Shop G16&17A, G/F, 1881Heritage , Hong Kong', utc: 8},
    {img: '/assets/boutiques/dubai-mall.jpg', city: 'DUBAI MALL', address: 'Along Sheikh Zayed Road Grand Atrium,Level-G , Dubai', utc: 4},
    {img: '/assets/boutiques/las-vegas-forum.jpg', city: 'LAS VEGAS FORUM', address: '3500, Las Vegas Boulevard South, Caesar\'s , Las Vegas , 89109', utc: -7},
    {img: '/assets/boutiques/monaco.jpg', city: 'MONACO', address: 'Allée François Blanc , Monaco , 98000', utc: 2},
]

export default function Boutiques(){
    return(
        <>
            <Header></Header>
                <div className={styles.titleContainer}>
                    <div className={styles.content}>
                        <h1>OUR BOUTIQUES</h1>
                        <p>We have boutiques all over the world, in the most exclusive locations. Discover our global network.</p>
                        <div id={styles.separator}></div>
                        <div id={styles.searchContainer}>
                            <input type='text' id={styles.search} placeholder="Search for city or town"></input>
                            <div id={styles.locationContainer}>
                                <img src='/assets/location.svg' alt='location'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.boutiqueContainer}>
                    <div className={styles.boutiqueCardContainer}>
                        {boutiqueDetails.map((item, index) =>(
                            <BoutiqueCard key={index} img={item.img} city={item.city} address={item.address} utc={item.utc}></BoutiqueCard>
                        ))}
                    </div>
                </div>
            <Footer></Footer>
        </>
    )
}