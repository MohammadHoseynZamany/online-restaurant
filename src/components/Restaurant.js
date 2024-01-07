'use client'
import Image from "next/image"

export default function Restaurant(props){
    return (
        <div>
            <Image src={ props.image } alt={ props.name } />
            <div>
                <h2>{ props.name }</h2>
                <div>
                    <Image src={star} alt="star" />
                    <p>{props.rate} ({props.count})</p>
                    <div>
                        <Image src="fork" alt="fork" />
                        <p>{props.food}</p>
                    </div>
                    <div>
                        <Image src={money} alt="money" />
                        <p>{props.money * "$"}</p>
                    </div>
                </div>
                <div>
                    <p>{props.delivery}</p>
                    <div>
                        <Image src={location} alt="distance" />
                        <p>{props.distance}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}