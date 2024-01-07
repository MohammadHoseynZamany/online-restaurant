'use client'
import Image from "next/image"

export default function Category(props){
    return (
        <div>
            <Image src={props.image} alt={title} />
            <h2>{props.title}</h2>
            <p>{props.options} options</p>
        </div>
    )
}