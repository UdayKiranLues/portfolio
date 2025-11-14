import React from "react";
import { Link } from "react-router-dom";

import team1 from '../assets/images/team/05.jpg'
import team2 from '../assets/images/team/06.jpg'
import team3 from '../assets/images/team/07.jpg'
import team4 from '../assets/images/team/08.jpg'

import {FiFacebook, FiInstagram, FiLinkedin} from "../assets/icons/vander"

export default function Team(){
    const teamData = [
        {
            image:team1,
            name:'Jack John',
            title:'Designer'
        },
        {
            image:team2,
            name:'Krista John',
            title:'Designer'
        },
        {
            image:team3,
            name:'Roger Jackson',
            title:'Designer'
        },
        {
            image:team4,
            name:'Johnny English',
            title:'Designer'
        },
    ]
    return(
        <>
          <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">Meet Our Teammates</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    {teamData.map((item, index) => {
                        return(
                        <div className="lg:col-span-3 md:col-span-6" key={index}>
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={item.image} className="" alt=""/>
    
                                    <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                        <li className=""><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><FiFacebook className="h-4 w-4"/></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><FiInstagram className="h-4 w-4"/></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><FiLinkedin className="h-4 w-4"/></Link></li>
                                    </ul>
                                </div>
    
                                <div className="content mt-3">
                                    <Link to="" className="text-lg font-medium hover:text-orange-500 duration-500">{item.name}</Link>
                                    <p className="text-slate-400 dark:text-white/60">{item.title}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}