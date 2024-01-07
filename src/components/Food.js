'use client'
import Image from "next/image"

export default function Food(props){
    return (
        <div>
            <Image src={props.image} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.delivery}</p>
            </div>
            <div>
                <div>
                    <Image src={star} alt="rate" />
                    <p>{props.rate} ({props.number})</p>
                </div>
                <div>
                    <Image src={props.fork} alt="fork" />
                    <p>{props.name}</p>
                </div>
                <div>
                    <Image src={bike} alt="bike" />
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}