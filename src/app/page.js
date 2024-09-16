'use client'

import Header from "@/components/header/Header";
import LandingContent from "@/components/landingContent/LandingContent";
import Button from "@/components/button/Button";
import { useState } from "react";
import WatchDisplay from "@/components/watchdisplay/WatchDisplay";
import ThemeCard from "@/components/themeCard/ThemeCard";

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

  const themeCardDetails = [
    { img: "/assets/theme-card-1.jpg", text: "OUR WORLD", heading: "CRAFTMANSHIP" },
    { img: "/assets/theme-card-2.jpg", text: "BOTIQUES", heading: "BOTIQUES" },
    { img: "/assets/theme-card-3.jpg", text: "NEWS", heading: "BIG BANG UNICO SAILING TEAM: HUBLOT SETS SAIL AGAIN" },
    { img: "/assets/theme-card-4.jpg", text: "OUR WORLD", heading: "Unico Mechanical Revolution" },
  ]


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

      <div className="multimedia">
        <div className="image-container">
          <img id="img1" src="/assets/yellow-watch-left.jpg" alt="yellow-watch-left"></img>
          <img id="img2" src="/assets/yellow-watch-right.jpg" alt="yellow-watch-left"></img>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/6po9d4WQZS8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Cards */}
      <div className="themeCardContainer" id="upperContainer">
        {themeCardDetails.slice(0,2).map((themeCard, index) => (
          <ThemeCard key={index} img={themeCard.img} text={themeCard.text} heading={themeCard.heading}></ThemeCard>
        ))}
      </div>

      <div className="themeCardContainer">
        {themeCardDetails.slice(2,4).map((themeCard, index) =>(
          <ThemeCard key={index} img={themeCard.img} text={themeCard.text} heading={themeCard.heading}></ThemeCard>
        ))}
      </div>
    </>
  );
}

export default Home;
