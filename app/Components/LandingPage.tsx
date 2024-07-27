import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';
import React from 'react'
import Header from './Header';
import Background from './Background';


const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className={poppins.className}>
        <div>
            <Header/>
            <div className=''/>
            <Background/>
        </div>
    </div>
  )
}

export default LandingPage;