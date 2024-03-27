'use client'

import Category from "../shared/Category"
import Restaurant from "../shared/Restaurant"
import Food from "../shared/Food"
import HomeLoading from "./HomeLoading"
import * as services from "../services/services"

import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { redirect } from 'next/navigation'
import Link from "next/link"


import { FaGreaterThan } from "react-icons/fa6";


export default function Home() {
    const [categoriesList, setCategoriesList] = useState(undefined)
    const [restaurantsList, setRestaurantsList] = useState(undefined)
    const [foodsList, setFoodsList] = useState(undefined)
    const [cookies] = useCookies(['access_token']);

    const [aouth, setAouth] = useState(true)


    useEffect(() => {
        async function connectApi() {
            const catData = await services.getCatData(cookies["access_token"], setAouth, 6)
            setCategoriesList(catData)
            const resData = await services.getResData(cookies["access_token"], setAouth)
            setRestaurantsList(resData)
            const foodData = await services.getFoodData(cookies["access_token"], setAouth)
            setFoodsList(foodData)
        }
        connectApi()
    }, [])


    let showCategoriesList
    if (categoriesList !== undefined) {
        showCategoriesList = categoriesList.map((cat) =>
            <div key={cat.id} className="mx-4 my-2">
                <Category image={cat.image} title={cat.name} options={cat.restaurant_count} />
            </div>
        )
    }

    let showRestaurantsList
    if (restaurantsList !== undefined) {
        showRestaurantsList = restaurantsList.map((res) =>
            <Restaurant key={res.id} id={res.id} image={res.image} name={res.name} rate={res.score} count="1,873" food={res.type} money={1} delivery={res.delivery_cost_string === "" ? res.delivery_cost_integer : res.delivery_cost_string} distance="4.3 km" handleClick={() => redirect(`/restaurants/${res.id}`)} />
        )
    }

    let showFoodsList
    if (foodsList !== undefined) {
        showFoodsList = foodsList.map((food) =>
            <Food key={food.id} image={food.image} name={food.name} delivery="Free" rate={food.score} number={20} time={food.serving_time} type={food.type} />
        )
    }

    return (
        <div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold text-xl">
                        Explore categories
                    </h2>
                    <Link href="/categories" >
                        <div className="flex text-violet-800 cursor-pointer animate-appearance-in">
                            <p>
                                See all
                            </p>
                            <div className="my-auto ml-2">
                                <FaGreaterThan />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-around overflow-x-auto w-[90vw] pl-[2.5vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden">
                    {showCategoriesList || <HomeLoading authorize={aouth} />}
                </div>
            </div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold text-xl">
                        Featured restaurants
                    </h2>
                    <div className="flex text-violet-800 cursor-pointer animate-appearance-in">
                        <p>
                            See all
                        </p>
                        <div className="my-auto ml-2">
                            <FaGreaterThan />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 md:grid-cols-3 overflow-x-auto w-[90vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden">
                    {showRestaurantsList || <HomeLoading authorize={aouth} />}
                </div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold text-xl">
                        Foods
                    </h2>
                    <div className="flex text-violet-800 cursor-pointer animate-appearance-in">
                        <p>
                            See all
                        </p>
                        <div className="my-auto ml-2">
                            <FaGreaterThan />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                    {showFoodsList || <HomeLoading authorize={aouth} />}
                </div>
            </div>
        </div>
    )
}