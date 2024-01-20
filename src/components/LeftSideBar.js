'use client'
import Image from "next/image"
import NibIco from "@public/SmallFood.png"
import Home from "@public/Home.png"
import Explore from "@public/Explore.png"
import Favourites from "@public/Favourites.png"
import Orders from "@public/Orders.png"
import Settings from "@public/Settings.png"
import Profile from "@public/Profile.png"
import UpDw from "@public/Menu.png"


export default function LeftSideBar(){
    return (
        <div className="bg-violet-50 w-[10vw] lg:w-[15vw] max-w-56 rounded-r-2xl px-[1vw] flex overflow-hidden">
            <div className="flex flex-col justify-between h-screen text-gray-500 py-[2vh] w-full">
                    <div>
                        <div className="mb-[6vh]">
                            <Image src={NibIco} className="inline-block" alt="Nib Icon"/>
                            <h2 className="lg:inline-block hidden ml-2 font-bold text-black">
                                Nibble
                            </h2>
                        </div>
                        <div className="bg-violet-900 text-white rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Home} className="inline-block w-6 mr-[1vw]" alt="Home"/>
                            <p className="lg:inline-block hidden">
                                Home
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Explore} className="inline-block w-6 mr-[1vw]" alt="explore"/>
                            <p className="lg:inline-block hidden">
                                Explore
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Favourites} className="inline-block w-4 mr-[1vw]" alt="favourites"/>
                            <p className="lg:inline-block hidden">
                                Favorites
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Orders} className="inline-block w-6 mr-[1vw]" alt="orders"/>
                            <p className="lg:inline-block hidden">
                                Orders
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Settings} className="inline-block w-6 mr-[1vw]" alt="settings"/>
                            <p className="lg:inline-block hidden">
                                Settings
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={Profile} alt="profile" className="lg:mr-[1vw] w-full"/>
                        <div className="flex-">
                            <h3 className="hidden w-[1vw] md:text-sm lg:text-lg lg:inline-block m-auto text-base">
                                Mark Clarke
                            </h3>
                            <p className="w-[1vw] text-xs hidden lg:inline-block">
                                markclarke@gmail.com
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}