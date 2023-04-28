import React from "react";
import Logohead from "./Logohead";
import Steps from "./Steps";
import Mainform from "./Mainform";
import Nextbtn from "./Nextbtn";
import { useEffect,useState } from 'react';




export default function Outer() {
  const [theme,setTheme]=useState("light");
    useEffect(() => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark-mode');
        setTheme("dark");
      } else {
        document.documentElement.classList.remove('dark-mode');
        setTheme("light");
      }
    }, []);

  return (
    <div className="container max-w-[648px] m-auto my-[40px]">
      <Logohead Theme={theme} />
      <div className="border-2 rounded-2xl dark:border-none  dark:border-2">
        <Steps/>
        
        <div className="container px-[48px] dark:bg-[#1C2534]">
          <Mainform />
        </div>
        <Nextbtn/>
      </div>
    </div>
  );
}
