import React from "react";
import { Link } from "react-router-dom";

import logoWhite from "../assets/images/logo-white.png"

import {FiShoppingCart, FiDribbble,FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiMail, FiFileText} from "../assets/icons/vander"

export default function Footer(){
    return(
        <footer className="relative bg-gray-900 overflow-hidden">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <div className="lg:col-span-3 md:text-start text-center">
                        <Link to="#" className="text-[22px] focus:outline-none">
                            <img src={logoWhite} className="mx-auto md:me-auto md:ms-0" alt=""/>
                        </Link>
                    </div>

                    <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                        <p className="mb-0 text-gray-400">© {new Date().getFullYear()} Muvico. Design with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>

                    <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                        <li className="inline"><Link to="https://1.envato.market/muvico-react" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiShoppingCart className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiDribbble className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiLinkedin className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiFacebook className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiInstagram className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiTwitter className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiMail className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiFileText className="h-[14px] w-[14px] align-middle"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}