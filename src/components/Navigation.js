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
        <div>
            <div>
                <Image src={Location} alt="Location" />
                <p>San Francisco</p>
                <Image src={Options} alt="Options" />
            </div>
                <Image src={ShoppingBag} alt="ShoppingBag" />
                <p>Pick up</p>
                <Image src={Options} alt="Options" />
            <div>
                <Image src={Coupon} alt="Coupon" />
                <p>Best deals</p>
                <Image src={Options} alt="Options" />
            </div>
            <div>
                <Image src={Search} alt="Search" />
                <input type="text" placeholder="Search for anything..." />
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