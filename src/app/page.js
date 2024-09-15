'use client'

import Header from "@/components/header/Header";
import LandingContent from "@/components/landingContent/LandingContent";
import Button from "@/components/button/Button";
import { useState } from "react";

function Home() {
  const [isSelected, setSelected] = useState(0);

  const handleClick = (index) =>{
    setSelected(index)
  }

  return (
    <div>
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
    </div>
  );
}

export default Home;
