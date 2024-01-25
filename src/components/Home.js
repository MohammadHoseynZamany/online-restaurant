'use client'

import Category from "./Category"
import Restaurant from "./Restaurant"

import BurgerKingRes from "@public/restaurantBurgerKing.png"
import PopularCat from "@public/catPopular.png"
import { FaGreaterThan } from "react-icons/fa6";


export default function Home() {
    return (
        <div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold">
                        Explore categories
                    </h2>
                    <div className="flex text-violet-800">
                        <p>
                            See all
                        </p>
                        <div className="my-auto ml-2">
                            <FaGreaterThan />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between overflow-x-auto w-[90vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden">
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                    <div>
                        <Category image={PopularCat} title="Popular" options="268" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold">
                        Featured restaurants
                    </h2>
                    <div className="flex text-violet-800">
                        <p>
                            See all
                        </p>
                        <div className="my-auto ml-2">
                            <FaGreaterThan />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                    </div>
                    <div className="flex">
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                    </div>
                </div>
            </div>
        </div>
    )
}