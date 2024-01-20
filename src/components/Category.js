'use client'
import Image from "next/image"

export default function Category(props){
    return (
        <div className="bg-gray-100 rounded-xl mx-2 p-2">
            <Image src={props.image} alt={props.title} className="m-auto" />
            <h2 className="m-auto">{props.title}</h2>
            <p className="m-auto">{props.options}+ options</p>
        </div>
    )
}