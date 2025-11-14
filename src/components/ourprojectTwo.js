import React,{useState} from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/images/portfolio/10.jpg"
import image2 from "../assets/images/portfolio/2.jpg"
import image3 from "../assets/images/portfolio/11.jpg"
import image4 from "../assets/images/portfolio/13.jpg"
import image5 from "../assets/images/portfolio/6.jpg"
import image6 from "../assets/images/portfolio/7.jpg"
import image7 from "../assets/images/portfolio/14.jpg"
import image8 from "../assets/images/portfolio/12.jpg"
import image9 from "../assets/images/portfolio/8.jpg"
import image10 from "../assets/images/portfolio/9.jpg"
import image11 from "../assets/images/portfolio/1.jpg"
import image12 from "../assets/images/portfolio/15.jpg"
import image13 from "../assets/images/portfolio/16.jpg"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function OurProjectTwo(){
    
    const images = [image1, image2, image3,image4, image5, image6, image7, image8, image9, image10, image11,image12,image13]

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
            category:"designing"
        },
        {
            id:1,
            image:image2,
            category:"photography"
        },
        {
            id:2,
            image:image3,
            category:"branding"
        },
        {
            id:3,
            image:image4,
            category:"branding"
        },
        {
            id:4,
            image:image5,
            category:"designing"
        },
        {
            id:5,
            image:image6,
            category:"development"
        },
        {
            id:6,
            image:image7,
            category:"development"
        },
        {
            id:7,
            image:image8,
            category:"development"
        },
        {
            id:8,
            image:image9,
            category:"development"
        },
        {
            id:9,
            image:image10,
            category:"designing"
        },
        {
            id:10,
            image:image11,
            category:"development"
        },
        {
            id:11,
            image:image12,
            category:"branding"
        },
        {
            id:12,
            image:image13,
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
          <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Our Projects</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className=" container grid grid-cols-1 items-center mt-6 gap-6">
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
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1050:4,}}
                    >
                        <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className="p-1 picture-item" data-groups='["designing"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <Link to="" onClick={() => handleImageClick(item.id)} className="lightbox duration-500 group-hover:scale-105" title="">
                                            <img src={item.image} className="" alt=""/>
                                        </Link>
                                        <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded-xl shadow dark:shadow-gray-800">
                                            <Link href="/portfolio-detail-two" className="hover:text-orange-500 text-[15px] duration-500 font-medium">Iphone mockup</Link>
                                            <h6 className="text-slate-400 dark:text-white/60">Branding</h6>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
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
                           
                        </Masonry>
                    </ResponsiveMasonry>

            </div>
        </>
    )
}