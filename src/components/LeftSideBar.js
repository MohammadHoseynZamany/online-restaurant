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
        <div className="bg-violet-50 md:w-1/4 max-w-56 rounded-r-2xl px-[1vw] flex overflow-hidden w-1/12">
            <div className="flex flex-col justify-between h-screen text-gray-500 py-[2vh] w-full">
                    <div>
                        <div className="mb-[6vh]">
                            <Image src={NibIco} className="inline-block" alt="Nib Icon"/>
                            <h2 className="md:inline-block hidden ml-2 font-bold text-black">
                                Nibble
                            </h2>
                        </div>
                        <div className="bg-violet-900 text-white rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Home} className="inline-block w-6 mr-[1vw]" alt="Home"/>
                            <p className="md:inline-block hidden">
                                Home
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Explore} className="inline-block w-6 mr-[1vw]" alt="explore"/>
                            <p className="md:inline-block hidden">
                                Explore
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Favourites} className="inline-block w-4 mr-[1vw]" alt="favourites"/>
                            <p className="md:inline-block hidden">
                                Favorites
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Orders} className="inline-block w-6 mr-[1vw]" alt="orders"/>
                            <p className="md:inline-block hidden">
                                Orders
                            </p>
                        </div>
                        <div className="rounded-md pt-[1vh] pb-[1.2vh] pl-[1vw] mb-[2vh]">
                            <Image src={Settings} className="inline-block w-6 mr-[1vw]" alt="settings"/>
                            <p className="md:inline-block hidden">
                                Settings
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[14vw]">
                        <Image src={Profile} alt="profile" className=" md:mr-[1vw] w-1/3 m-1"/>
                        <div>
                        <h3 className="hidden md:inline-block md:text-sm lg:text-lg">
                            Mark Clarke
                        </h3>
                        <p className="w-[8.5vw] text-xs hidden md:inline-block">
                            markclarke@gmail.com
                        </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}