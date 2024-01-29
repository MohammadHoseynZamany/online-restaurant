'use client'
import Image from "next/image"
import { FaStar } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";



export default function Restaurant(props){
    return (
        <div className="flex-1 flex ml-[2.5vw] mr-[5vw] min-w-96 text-xs sm:text-sm md:text-md w-56 my-4">
            <div className="bg-gray-100 rounded-lg mr-4">
                <Image src={ props.image } alt={ props.name } width={100} height={100} className="w-[9vw]" />
            </div>
            <div className="w-[15vw] min-w-24 hidden md:inline-block">
                <h2>{ props.name }</h2>
                <div className="flex">
                    <FaStar color="orange" className="m-auto" />
                    <p className="m-auto">{props.rate} ({props.count})</p>
                    <div className="flex m-auto">
                        <CiForkAndKnife className="m-auto" />
                        <p>{props.food}</p>
                    </div>
                    <div className="flex">
                        <RiMoneyDollarBoxLine className="m-auto" />
                        <p>{"$".repeat(Number(props.money))}</p>
                    </div>
                </div>
                <div className="flex">
                    <p className="bg-violet-100 rounded-sm">{props.delivery} delivery</p>
                    <div className="flex">
                        <MdMyLocation className="m-auto" />
                        <p>{props.distance}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}