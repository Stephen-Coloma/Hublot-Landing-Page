'use client'

import Header from "@/components/header/Header";
import LandingContent from "@/components/landingContent/LandingContent";
import Button from "@/components/button/Button";
import { useState } from "react";
import WatchDisplay from "@/components/watchdisplay/WatchDisplay";

function Home() {
  const [isSelected, setSelected] = useState(0);
  const handleClick = (index) =>{
    setSelected(index)
  }

  const watchItems = [
    { img: "/assets/novelties.png", text: "NOVELTIES" },
    { img: "/assets/big-bang.png", text: "BIG BANG" },
    { img: "/assets/classic-fusion.png", text: "CLASSIC FUSION" },
    { img: "/assets/shaped.png", text: "SHAPED" },
    { img: "/assets/mp.png", text: "MP" },
  ];


  return (
    <>
      <Header></Header>
      <LandingContent></LandingContent>
      
      {/* The three buttons */}
      <div className="button-wrapper">
          <Button 
            isSelected={isSelected === 0} 
            text={"FIND YOUR HUBLOT WATCH"}
            onClick={() => handleClick(0)}>
          </Button>

          <Button 
            isSelected={isSelected === 1} 
            text={"FIND A BOTIQUE"}
            onClick={() => handleClick(1)}>
          </Button>

          <Button 
            isSelected={isSelected === 2} 
            text={"FIND YOUR STRAP"}
            onClick={() => handleClick(2)}>
          </Button>
      </div>

      {/* Explore watches */}
      <div className="exploreWatches">
        <h2 >EXPLORE WATCHES</h2>
      </div>

      <div className="watch-card-container">
        {watchItems.map((watch, index) => (
          <WatchDisplay
            key={index}
            img={watch.img}
            text={watch.text}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
