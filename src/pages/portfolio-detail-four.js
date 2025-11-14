import React from "react";
import { Link } from "react-router-dom";

import portfolio1 from "../assets/images/portfolio/16.jpg"
import portfolio2 from "../assets/images/portfolio/17.jpg"
import portfolio3 from "../assets/images/portfolio/18.jpg"

import Navlight from "../components/navlight";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

const settings = {
    container: '.tiny-one-item',
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
}

export default function DetailsFour(){
    const image = [portfolio1,portfolio2,portfolio3]
    return(
        <>
        <Navlight/>
        <section className="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-top bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul className="list-none">
                        <li className="inline font-semibold text-white/60 me-2"> <span className="text-white">Client :</span> Calvin Carlo</li>
                        <li className="inline font-semibold text-white/60"> <span className="text-white">Date :</span> 20th June, 2023</li>
                    </ul>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Muvico</Link></li>
                   <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right align-middle"></i></li>
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link to="">Portfolio</Link></li>
                    <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right align-middle"></i></li>
                    <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white" aria-current="page">Detail</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-one-item">
                        <TinySlider settings={settings}>
                            {image.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="m-2">
                                            <img src={item} className="rounded-xl shadow dark:shadow-gray-800" alt=""/>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl">
                            <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                            <dl className="grid grid-cols-12 mb-0">
                                <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd Sep, 2021</dd>

                                <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                            </dl>  
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div className="lg:me-5">
                            <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Name :</h4>
                            <p className="text-slate-400 dark:text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                            <p className="text-slate-400 dark:text-white/60 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactUs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}