'use client'

import styles from "../carousel/carousel.module.css";
import WatchCard from "@/components/watchCard/watchCard";
import { useState } from "react";

export default function Carousel({ watchesArray }) {
    const itemRendered = () => {
        if (typeof window === "undefined") {
            return 1; // Default value for server-side rendering
        }

        if(window.innerWidth >= 1024){
            return 4;
        }else if(window.innerWidth >= 768){
            return 3;
        }else if (window.innerWidth >= 420){
            return 2;
        }else{
            return 1;
        }
    }

    let length = 0;
    if(itemRendered() === 4){
        length = watchesArray.length - 3;
    }else if(itemRendered() === 3){
        length = watchesArray.length - 2;
    }else if(itemRendered() === 2){
        length = watchesArray.length;
    }else if(itemRendered() === 1){
        length = watchesArray.length
    }
        
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    const handlePreviousClick = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    return (
        <>
            <div className={styles.carousel}>
                {/* Carousel content wrapper */}
                <div
                    className={styles.carouselContent}
                    style={{
                        transform: `translateX(${index !== 0 ? ((-index * 100) / itemRendered()) : 0}%)`,
                        width: `${((watchesArray.length * 100) / itemRendered)}%`,
                    }}
                >
                    {watchesArray.map((watch, i) => (
                        <div key={i} className={styles.carouselItem}>
                            <WatchCard
                                id={i} // Pass unique id for each WatchCard
                                img={watch.img}
                                category={watch.category}
                                name={watch.name}
                                isNew={watch.isNew}
                                price={watch.price}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.carouselButtonsContainer}>
                <div className={styles.arrowContainer} id={styles.previousButton}>
                    <button onClick={handlePreviousClick}><img src='/assets/left-arrow.svg'></img></button>
                </div>

                <div className={styles.arrowContainer} id={styles.nextButton}>
                    <button onClick={handleNextClick}><img src='/assets/right-arrow.svg'></img></button>
                </div>
            </div>        
        </>
    );
}
