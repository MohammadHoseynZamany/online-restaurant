'use client'
import Image from "next/image"
import { CiForkAndKnife } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";



export default function Food(props){
    return (
        <div className="">
            <Image src={props.image} alt={props.name} width={100} height={100} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.delivery}</p>
            </div>
            <div>
                <div>
                    <FaStar color="yellow" />
                    <p>{props.rate} ({props.number})</p>
                </div>
                <div>
                    <CiForkAndKnife />
                    <p>{props.type}</p>
                </div>
                <div>
                    <GrBike />
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}