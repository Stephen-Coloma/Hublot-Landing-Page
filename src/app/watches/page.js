'use client'

import Button from "@/components/button/Button";
import Footer from "@/components/footer/Footer"
import Header  from "@/components/header/Header"
import WatchDisplay from "@/components/watchdisplay/WatchDisplay";
import WatchCard from "@/components/watchCard/watchCard"
import { useState } from "react";

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

    return(
        <>
            <Header></Header>
                {/* <div className="watches-heading">
                    <h2>WATCHES</h2>
                </div>

                <div className="watches-watch-card-container">
                    {watchItems.map((watch, index) => (
                    <WatchDisplay
                        key={index}
                        img={watch.img}
                        text={watch.text}
                    />
                    ))}
                </div>

                <div className="watches-main-button">
                    <Button isSelected={isSelected === 0 ? true: false} text={'FIND A BOTIQUE'} onClick={()=> handleClick(0)}></Button>
                    <Button isSelected={isSelected === 1 ? true: false} text={'FIND YOUR STRAP'} onClick={()=> handleClick(1)}></Button>
                </div> */}

                <h2 className="out-top-topics">OUR TOP PICKS</h2>

                <WatchCard img={"/assets/watches/unico-ice-bang.png"} category={"BIG BANG"} name={"UNICO ICE BANG 42 MM"} isNew={true} price={"CHF 21,900 *"}></WatchCard>
            <Footer></Footer>
        </>
    )
}