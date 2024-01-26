'use client'
import Image from "next/image"

export default function Category(props){
    return (
        <div className="bg-gray-50 rounded-xl mx-2 w-[17vw] max-h-36 min-h-32 flex flex-col justify-around py-2 px-2">
            <Image src={props.image} alt={props.title} width={100} height={100} className="mx-auto w-[5.5vw]" />
            <div className="text-center">
                <h2 className="m-auto font-medium">{props.title}</h2>
                <p className="m-auto text-xs text-gray-600">{props.options}+ options</p>
            </div>
        </div>
    )
}