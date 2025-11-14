import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";

import team1 from "../assets/images/team/01.jpg"
import blog from "../assets/images/blog/4.jpg"
import blog2 from "../assets/images/blog/5.jpg"

import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ContactUs from "../components/contactUs"

import { blogData } from "../data/data";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function BlogDetails(){
    const params = useParams()
    const id = params.id
    const data = blogData.find((blog)=>blog.id === parseInt(id))
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <Navbar/>
        <section className="relative pt-40 md:pb-24 pb-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-3/5">
                        <h5 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium">{data?.title ? data?.title : "Stop Worrying About Deadlines! We Got You Covered"}</h5>
                        <p className="text-slate-400 dark:text-white/60 mt-4">Language is a window to who we are as people. Through the words we use and how we use them, people access a part of us, who we are.</p>

                        <div className="flex mt-5">
                            <span className="font-medium"><i className="mdi mdi-calendar-blank-outline me-2"></i>{data?.date ? data?.date : "19th June, 2023"}</span>
                            <span className="ms-3 font-medium"><i className="mdi mdi-clock-outline me-2"></i>5 min read</span>
                        </div>

                        <div className="flex items-center mt-5">
                            <img src={data?.image1 ? data?.image1 : team1} className="h-12 w-12 rounded-xl" alt=""/>

                            <div className="ms-2">
                                <Link to="" className="font-medium block hover:text-orange-500">{data?.athor ? data?.athor : "Calvin Carlo"}</Link>
                                <span className="text-slate-400 dark:text-white/60 text-sm block">Blogger</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center mt-6">
                    <div className="lg:w-full">
                        <div className="relative">
                            <img src={data?.image ? data?.image : blog} className="rounded-xl shadow-md dark:shadow-gray-800" alt=""/>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#!" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
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
                </div>

                <div className="md:flex justify-center mt-6">
                    <div className="lg:w-3/5">
                        <p className="text-slate-400 dark:text-white/60 text-[15px]">This rule applies to whether you're building brands or writing novels because people don't trust a Sybil. Our brains crave the comfort reliability and consistency breeds. We're confused when we see someone act one way and that way changes on the daily. They're performative instead of real.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">In marketing, our “voice” is the personality we embody when we show up for our audiences, community, partners, and employees. It's our vibe and flavor, the words we use and how we use them. We can dial up and down facets of our personality depending on the environment. Sound familiar? It's called life.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">We build trust when — interaction after interaction, channel after channel — we come across as the same “person.” In marketing, a verbal identity helps everyone who communicates on behalf of a brand to express themselves consistently so their audiences have the same powerful experience regardless of where they encounter the brand.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">But I'm not here to rehash a fifteen-minute tutorial I wrote eighteen months ago, rather I want to show you how to apply methodical tools and tactics to cultivate your prose or writing voice.</p>

                        <img src={blog2} className="rounded-xl mt-4" alt=""/>

                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">I didn't find my voice until I was thirty-seven and I've been writing since I was six — you do the pitiful math. Because like everything else in my life, I chose to go at writing the hard way instead of seeing the symbiotic nature of what I was doing for a living (building brands and telling stories) and how I could employ the tools I learned and built for myself in my writing life.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">For years, I kept the warring factions in my brain disparate because I never thought fiction and marketing could play harmoniously in the same sandbox until it occurred to me that both, at their core, are about telling stories. My on-duty life centered on telling stories about products and companies while my evenings were spent telling stories about the…</p>
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