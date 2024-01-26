'use client'
import Image from "next/image"
import { CiForkAndKnife } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";



export default function Food(props) {
    return (
        <div className="mx-2 px-2 overflow-hidden">
            <Image src={props.image} alt={props.name} width={100} height={100} className="w-full overflow-hidden mb-6" />
            <div className="grid grid-cols-2 px-2">
                <div className="text-center">
                <h2 className="font-bold col-span-">{props.name}</h2>
                </div>
                <div className="text-center w-fit">
                    <p className="bg-violet-300 w-32 m-auto rounded-lg">{`${props.delivery} Delivery`}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-1 mb-8">
                <div className="flex m-auto">
                    <FaStar className="text-yellow-500 my-auto mx-2" />
                    <p>{props.rate} ({props.number})</p>
                </div>
                <div className="flex m-auto">
                    <CiForkAndKnife className="my-auto mx-2" />
                    <p>{props.type}</p>
                </div>
                <div className="flex m-auto">
                    <GrBike className="my-auto mx-2" />
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}