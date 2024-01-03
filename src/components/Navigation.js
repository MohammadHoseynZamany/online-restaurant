import Image from "next/image"
import Location from "@public/Location.png"
import Options from "@public/OptionsHeader.png"
import ShoppingBag from "@public/Shopping-bag.png"
import Coupon from "@public/Coupon.png"
import Search from "@public/Search.png"
import Menu from "@public/NavigationMenu.png"
import Shop from "@public/Shop.png"


export default function Navigation() {
    return (
        <div className="flex">
            <div className="flex">
                <Image src={Location} alt="Location" />
                <p>San Francisco</p>
                <Image src={Options} alt="Options" />
            </div>
            <div className="flex">
                <Image src={ShoppingBag} alt="ShoppingBag" />
                <p>Pick up</p>
                <Image src={Options} alt="Options" />
            </div>
            <div className="flex">
                <Image src={Coupon} alt="Coupon" />
                <p>Best deals</p>
                <Image src={Options} alt="Options" />
            </div>
            <div className="flex bg-slate-100 rounded-2xl">
                <Image src={Search} alt="Search" />
                <input type="text" placeholder="Search for anything..." className="bg-slate-100 rounded-2xl focus:outline-none" />
            </div>
            <div>
                <Image src={Menu} alt="Menu" />
            </div>
            <div>
                <Image src={Shop} alt="Shop" />
            </div>
        </div>
    )
}