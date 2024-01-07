'use client'
import Image from "next/image"

import Location from "@public/Location.png"
import ShoppingBag from "@public/Shopping-bag.png"
import Coupon from "@public/Coupon.png"
import CloseOptions from "@public/nav-tab-closeOptions.png"

export default function NavTab(props) {
    function close(){
        props.onClose(true)
    }
    return (
        <div className="flex flex-col justify-around h-[50vh] px-[8.7vw] mt-[5vh] text-xs sm:text-sm">
            <div>
                <div onClick={close}>
                    <Image src={CloseOptions} alt="close" />
                </div>
            </div>
            <div className="flex justify-between border-b-2 border-violet-200 space-x-[60vw]">
                <div className="flex my-[3vh]">
                    <Image src={Location} alt="location" className="my-auto" />
                    <h2 className="my-auto">Location</h2>
                </div>
                <div className="my-[3vh]">
                    <p>
                        San Francisco, California
                    </p>
                </div>
            </div>
            <div className="flex justify-between border-b-2 border-violet-200 space-x-[60vw]">
                <div className="flex my-[3vh]">
                    <Image src={ShoppingBag} alt="order type" />
                    <h2>Order type</h2>
                </div>
                <div className="my-[3vh]">
                    <p>
                        Pick up
                    </p>
                </div>
            </div>
            <div className="flex justify-between border-b-2 border-violet-200 space-x-[60vw]">
                <div className="flex my-[3vh]">
                    <Image src={Coupon} alt="discount" />
                    <h2>Discount</h2>
                </div>
                <div className="my-[3vh]">
                    <p>
                        Best deals
                    </p>
                </div>
            </div>
        </div>
    )
}