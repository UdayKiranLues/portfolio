import React from "react";
import { Link } from "react-router-dom";

import BannerImg from "../assets/images/hero.jpg"
import circle from "../assets/images/logos/circle-logo.png"
import android from "../assets/images/logos/android.png"
import google from "../assets/images/logos/google-logo.png"
import facebook from "../assets/images/logos/facebook-logo.png"
import lenovo from "../assets/images/logos/lenovo-logo.png"
import linkedin from "../assets/images/logos/linkedin.png"
import skype from "../assets/images/logos/skype.png"
import spotify from "../assets/images/logos/spotify.png"
import telegram from "../assets/images/logos/telegram.png"
import whatsapp from "../assets/images/logos/whatsapp.png"

import Navbar from "../components/navbar";
import About from "../components/about";
import OurProjects from "../components/ourProjexts";
import Features from "../components/features";
import Team from "../components/team";
import GetInTuch from "../components/getInTuch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { TypeAnimation } from 'react-type-animation';

export default function IndexTwo(){

    const logo = [circle,android,google,facebook,lenovo,linkedin,skype,spotify,telegram,whatsapp]
    return(
        <>
        <Navbar/>
        <section className="relative table w-full md:py-44 py-36 overflow-hidden before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[40rem] before:h-[20rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-orange-500/10 dark:before:bg-orange-500/20">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <div>
                        <img src={BannerImg} className="h-28 w-28 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>

                        <h5 className="font-semibold leading-normal text-[20px] mt-6">Hi, I'm 
                            <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Calvin Carlo',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Freelancer',
                                        1000,
                                        'Website Designer',
                                        1000,
                                        'Web Developers',
                                        1000,
                                        'UI/UX Designer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className="typewrite ms-3"
                                    repeat={Infinity}
                                    />

                        </h5>
                    
                        <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3">Complete Solution <br/> for Your Brand</h5>

                        <p className="text-slate-400 dark:text-white/60 mx-auto text-[17px] max-w-xl mt-4">Muvico is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>

                        <div className="relative mt-6">
                            <Link to="/aboutus" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Explore Work <i className="mdi mdi-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid md:grid-cols-10 sm:grid-cols-5 grid-cols-4 justify-center gap-6">
                    {logo.map((item,index)=>{
                        return(
                        <div key={index} className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-xl mx-auto py-4">
                            <img src={item} className="h-7" alt=""/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="relative overflow-hidden md:pb-24 pb-16">
            <About/>
            <OurProjects containerFuild = {true}/>
            <Features/>
            <Team/>
            <GetInTuch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}