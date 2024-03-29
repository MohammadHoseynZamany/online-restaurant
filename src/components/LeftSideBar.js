'use client'
import Image from "next/image"

import NibIco from "@public/SmallFood.png"
import Favourites from "@public/Favourites.png"
import Orders from "@public/Orders.png"
import Settings from "@public/Settings.png"
import Profile from "@public/Profile.png"
import { FaHome } from "react-icons/fa";



export default function LeftSideBar(props){
    const chosesStyle = "bg-violet-900 text-white"
    const UnChosesStyle = "text-gray-500 bg-red"
    return (
        <div className="bg-violet-50 w-[10vw] lg:w-[15vw] max-w-56 rounded-r-2xl px-[1vw] flex overflow-hidden" id="leftSide">
            <div className="flex flex-col justify-between h-screen text-gray-500 py-[2vh] w-full overflow-hidden">
                    <div>
                        <div className="mb-[6vh]">
                            <Image src={NibIco} className="inline-block" alt="Nib Icon"/>
                            <h2 className="lg:inline-block hidden ml-2 font-bold text-black">
                                Nibble
                            </h2>
                        </div>
                        <div className={`cursor-pointer rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh] ${props.mod === "home" ? chosesStyle : UnChosesStyle}`} onClick={()=> props.setMod("home")}>
                            <FaHome className="inline-block w-6 mr-[1vw]" alt="Home" color="gray"/>
                            <p className="lg:inline-block hidden">
                                Home
                            </p>
                        </div>
                        <div className={`cursor-pointer rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh] ${props.mod === "favorites" ? chosesStyle : UnChosesStyle}`} onClick={()=> props.setMod("favorites")}>
                            <Image src={Favourites} className="inline-block w-4 mr-[1vw]" alt="favourites"/>
                            <p className="lg:inline-block hidden">
                                Favorites
                            </p>
                        </div>
                        <div className={`cursor-pointer rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh] ${props.mod === "orders" ? chosesStyle : UnChosesStyle}`} onClick={()=> props.setMod("orders")}>
                            <Image src={Orders} className="inline-block w-6 mr-[1vw]" alt="orders"/>
                            <p className="lg:inline-block hidden">
                                Orders
                            </p>
                        </div>
                        <div className={`cursor-pointer rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh] ${props.mod === "settings" ? chosesStyle : UnChosesStyle}`} onClick={()=> props.setMod("settings")}>
                            <Image src={Settings} className="inline-block w-6 mr-[1vw]" alt="settings"/>
                            <p className="lg:inline-block hidden">
                                Settings
                            </p>
                        </div>
                    </div>
                    <div className="flex content-between">
                        <Image src={Profile} alt="profile" className="my-auto"/>
                        <div className="text-center my-auto">
                            <h3 className="hidden md:text-sm lg:text-l lg:inline-block text-base">
                                    Mark Clarke
                                </h3>
                        </div>
                        {/* <div className="flex flex-col w-full mx-auto px-0"> */}
                            {/* <p className="w-full text-xs hidden lg:inline-block mx-auto px-0">
                                markclarke@gmail.com
                            </p> */}
                        {/* </div> */}
                    </div>
            </div>
        </div>
    )
}