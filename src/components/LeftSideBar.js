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
        <div className="inline-block w-1/5 bg-slate-100">
            <div className=" flex flex-col justify-between h-screen">
                    <div>
                        <div>
                            <Image src={NibIco} className="inline-block" alt="Nib Icon"/>
                            <h2 className="inline-block">
                                Nibble
                            </h2>
                        </div>
                        <div className="bg-violet-900 text-white">
                            <Image src={Home} className="inline-block" alt="Home"/>
                            <p className="inline-block">
                                Home
                            </p>
                        </div>
                        <div>
                            <Image src={Explore} className="inline-block" alt="explore"/>
                            <p className="inline-block">
                                Explore
                            </p>
                        </div>
                        <div>
                            <Image src={Favourites} className="inline-block" alt="favourites"/>
                            <p className="inline-block">
                                Favourites
                            </p>
                        </div>
                        <div>
                            <Image src={Orders} className="inline-block" alt="orders"/>
                            <p className="inline-block">
                                Orders
                            </p>
                        </div>
                        <div>
                            <Image src={Settings} className="inline-block" alt="settings"/>
                            <p className="inline-block">
                                Settings
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={Profile} alt="profile"/>
                        <div>
                        <h3>
                            Mark Clarke
                        </h3>
                        <p>
                            markclarke@gmail.com
                        </p>
                        </div>
                        <Image src={UpDw} alt="up down"/>
                    </div>
            </div>
        </div>
    )
}