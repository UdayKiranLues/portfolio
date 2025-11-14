import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data/data";

import Navlight from "../components/navlight";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function Blog(){
    return(
        <>
        <Navlight/>
        <section className="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-top bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-medium text-white">Blogs & News</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Muvico</Link></li>
                   <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right align-middle"></i></li>
                    <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {blogData.map((item,index)=>{
                        return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                                <img src={item.image} className="" alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                                    <img src={item.image1} className="h-9 w-9 rounded-xl" alt=""/>
                                    <div className="ms-2">
                                        <Link to="" className="text-white hover:text-orange-500 text-[15px]">{item.athor}</Link>
                                        <p className="text-white/70 text-sm">5 Min Read</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <Link to={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-orange-500 duration-500">{item.title}</Link>
                                <p className="text-slate-400 dark:text-white/60 mt-3">{item.desc}</p>
                                
                                <div className="mt-3">
                                    <Link to={`/blog-detail/${item.id}`} className="hover:text-orange-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">
                                        <i className="mdi mdi-chevron-left text-[20px] rtl:rotate-180"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 w-8 h-8 inline-flex text-sm justify-center items-center text-white bg-orange-500 border border-orange-500">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">
                                        <i className="mdi mdi-chevron-right text-[20px] rtl:rotate-180"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
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