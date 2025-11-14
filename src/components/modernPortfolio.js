import React,{useState} from "react";
import { Link } from "react-router-dom";

import image1 from '../assets/images/portfolio/1.jpg'
import image2 from '../assets/images/portfolio/2.jpg'
import image3 from '../assets/images/portfolio/3.jpg'
import image4 from '../assets/images/portfolio/4.jpg'
import image5 from '../assets/images/portfolio/5.jpg'
import image6 from '../assets/images/portfolio/6.jpg'
import image7 from '../assets/images/portfolio/7.jpg'
import image8 from '../assets/images/portfolio/8.jpg'
import image9 from '../assets/images/portfolio/23.jpg'
import image10 from '../assets/images/portfolio/20.jpg'
import image11 from '../assets/images/portfolio/21.jpg'
import image12 from '../assets/images/portfolio/22.jpg'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../assets/icons/vander"

export default function ModernPortfolio({gridclass, container}){
     
    const images = [image1, image2, image3,image4, image5, image6, image7, image8, image9, image10, image11,image12]

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];

    const projectData = [
        {
            id:0,
            image:image1,
            category:"branding"
        },
        {
            id:1,
            image:image2,
            category:"designing"
        },
        {
            id:2,
            image:image3,
            category:"photography"
        },
        {
            id:3,
            image:image4,
            category:"development"
        },
        {
            id:4,
            image:image5,
            category:"branding"
        },
        {
            id:5,
            image:image6,
            category:"branding"
        },
        {
            id:6,
            image:image7,
            category:"designing"
        },
        {
            id:7,
            image:image8,
            category:"development"
        },
        {
            id:8,
            image:image9,
            category:"photography"
        },
        {
            id:9,
            image:image10,
            category:"photography"
        },
        {
            id:10,
            image:image11,
            category:"branding"
        },
        {
            id:11,
            image:image12,
            category:"branding"
        },
    ]
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
    const filteredData = selectedCategory
    ? projectData.filter((item) => item.category === selectedCategory)
    : projectData;
    return(
        <>
            <div className="relative">
                <div className="grid container grid-cols-1 items-center gap-6">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter filter-options space-x-3">
                                <li className={`${selectedCategory === null ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === "branding" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="branding" onClick={() => matchCategory("branding")}>Branding</li>
                                <li className={`${selectedCategory === "designing" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="designing" onClick={() => matchCategory('designing')} >Designing</li>
                                <li className={`${selectedCategory === "photography" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === "development" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {container === false ?
                    <div className="container-fluid relative">
                    <div id="grid" className={gridclass}>
                        {filteredData.map((item,index)=>{
                            return(
                                
                                <div className="picture-item" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <img src={item.image} className="group-hover:origin-center group-hover:scale-125 duration-500" alt=""/>
                                        <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>

                                        <div className="content duration-500">
                                            <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                                <Link to="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                            </div>

                                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                                <Link to="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                                <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>:

                <div className="container">
                    <div id="grid" className={gridclass}>
                        {filteredData.map((item,index)=>{
                            return(
                                
                                <div className="picture-item" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <img src={item.image} className="group-hover:origin-center group-hover:scale-125 duration-500" alt=""/>
                                        <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>

                                        <div className="content duration-500">
                                            <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                                <Link to="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                            </div>

                                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                                <Link to="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                                <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }

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
            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                    nextSrc={images[(currentImageIndex + 1) % images.length]}

                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </>
    )
}