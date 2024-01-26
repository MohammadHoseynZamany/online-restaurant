'use client'
import Image from "next/image"
import { FaStar } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { redirect } from "next/dist/server/api-utils";



export default function Restaurant(props){
    return (
        <div className="flex-1 flex mx-[2.5vw] w-[20vw]">
            <div className="bg-gray-100 rounded-lg">
                <Image src={ props.image } alt={ props.name } width={100} height={100} />
            </div>
            <div>
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