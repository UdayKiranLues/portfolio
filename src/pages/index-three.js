import React,{useState} from "react";
import { Link } from "react-router-dom";

import BannerImg from '../assets/images/bg/1.jpg'
import arrow from "../assets/images/arrow.png"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import About from "../components/about";
import Features from "../components/features";
import Team from "../components/team";
import GetInTuch from "../components/getInTuch";
import OurProjectTwo from "../components/ourprojectTwo";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function IndexThree(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <Navbar/>
        <section className="relative table w-full pt-44 pb-24">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div>
                        <span className="bg-orange-500 text-white text-[12px] font-medium px-4 py-1 rounded-xl h-5">Agency</span>
                    </div>
                    <h5 className="md:text-[42px] md:leading-normal text-3xl leading-normal font-bold mt-3">We Build and Scale Digital 
                        <span className="relative">Agency
                            <img src={arrow} className="w-full absolute end-0 block -rotate-[15deg] top-4 -z-1 opacity-70" alt=""/>
                        </span>
                    </h5>
                    <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">Muvico is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid grid-cols-1 md:text-start text-center justify-center">
                            <div className="relative">
                                <img src={BannerImg} className="rounded-xl shadow-lg" alt=""/>
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#!" onClick={() => setOpen(true)} 
                                        className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-500 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="S_CGed6E610"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>
                        </div>
                        <div className="content md:mt-10 mt-6">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                                        <div className="text-md-start">
                                            <h6 className="text-white/50 font-medium">Team</h6>
                                            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white mt-2">Well Experienced <br/> Team Member</h3>
                                        </div>

                                        <div className="text-md-start">
                                            <p className="text-white/50 max-w-xl mx-auto mb-2">Muvico is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                                            <Link to="" className="text-white">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-orange-500/50 to-orange-500"></div>
        </section>
        <section className="relative overflow-hidden md:py-24 py-16">
            <About/>
            <OurProjectTwo/>
            <Features/>
            <Team/>
            <GetInTuch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}