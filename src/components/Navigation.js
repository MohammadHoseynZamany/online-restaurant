'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import NavTab from "./NavTab"

import Location from "@public/Location.png"
import ShoppingBag from "@public/Shopping-bag.png"
import Coupon from "@public/Coupon.png"
import Search from "@public/Search.png"
import Menu from "@public/NavigationMenu.png"
import Shop from "@public/Shop.png"
import Options from "@public/nav-tab-options.png"


export default function Navigation(props) {
    function showTabOptions(){
        document.getElementById("nav-desk").style.display = "none"
        document.getElementById("nav-tab").style.display = "inline-block"
        props.setCloseOptions(false)
    }
    useEffect(()=>{
        if (props.closeOptions) {
            document.getElementById("nav-desk").style.display = "flex"
        document.getElementById("nav-tab").style.display = "none"
        }
    },[props.closeOptions])

    return (
        <div>
            <div id="nav-desk" className="flex-grow flex justify-around space-x-[1vw] px-2 py-2 text-xs sm:text-sm md:text-md xl:text-xl mx-[1vw]">
                    <div className="my-auto inline-block md:hidden" onClick={showTabOptions}>
                        <Image src={Options} alt="options" className="inline-block" />
                    </div>
                    <div className="hidden md:flex my-auto">
                        <Image src={Location} alt="Location" className="h-4/5 my-auto mx-[0.4vw]" />
                        <p>San Francisco, California</p>
                    </div>
                    <div className="hidden md:flex my-auto">
                        <Image src={ShoppingBag} alt="ShoppingBag" className="h-3/4 my-auto mx-[0.4vw]" />
                        <p>Pick up</p>
                    </div>
                    <div className="hidden md:flex my-auto">
                        <Image src={Coupon} alt="Coupon" className="h-3/4 my-auto mx-[0.4vw]" />
                        <p>Best deals</p>
                    </div>
                    <div className="flex bg-violet-100 rounded-xl my-auto py-[1.2vh] px-[5vw]">
                        <Image src={Search} alt="Search" className="h-3/4 m-auto px-[0.1vw] mr-[1vw]" />
                        <input type="text" placeholder="Search for anything..." className="bg-violet-100 rounded-2xl focus:outline-none" />
                    </div>
                    <div className="my-auto hidden md:inline-block">
                        <Image src={Menu} alt="Menu" className="h-full" />
                    </div>
                    <div className="my-auto">
                        <Image src={Shop} alt="Shop" />
                    </div>
            </div>
            <div id="nav-tab" className="hidden">
                <NavTab onClose={props.setCloseOptions} />
            </div>
        </div>
    )
}