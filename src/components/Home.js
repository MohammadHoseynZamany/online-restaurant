'use client'

import Category from "./Category"
import Restaurant from "./Restaurant"
import Food from "./Food"
import HomeLoading from "./HomeLoading"
import * as services from "./services/services"

import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { redirect } from 'next/navigation'


import { FaGreaterThan } from "react-icons/fa6";


export default function Home() {
    const [categoriesList, setCategoriesList] = useState("")
    const [restaurantsList, setRestaurantsList] = useState("")
    const [foodsList, setFoodsList] = useState("")
    const [cookies] = useCookies(['access_token']);

    const [aouth, setAouth] = useState(true)


    useEffect(() => {
        async function connectApi() {
            const catData = await services.getCatData(cookies["access_token"], setAouth)
            setCategoriesList(catData)
            const resData = await services.getResData(cookies["access_token"], setAouth)
            setRestaurantsList(resData)
            const foodData = await services.getFoodData(cookies["access_token"], setAouth)
            setFoodsList(foodData)
        }
        connectApi()
    }, [])


    let showCategoriesList
    if (categoriesList !== "" && categoriesList !== undefined) {
        showCategoriesList = categoriesList.map((cat) =>
            <Category key={cat.id} image={cat.image} title={cat.name} options={cat.restaurant_count} />
        )
    }

    let showRestaurantsList
    if (restaurantsList !== "") {
        showRestaurantsList = restaurantsList.map((res) =>
            <Restaurant key={res.id} id={res.id} image={res.image} name={res.name} rate={res.score} count="1,873" food={res.type} money={1} delivery={res.delivery_cost_string === "" ? res.delivery_cost_integer : res.delivery_cost_string} distance="4.3 km" handleClick={()=>redirect(`/restaurants/${res.id}`)} />
        )
    }

    let showFoodsList
    if (foodsList !== "") {
        showFoodsList = foodsList.map((food) =>
            <Food key={food.id} image={food.image} name={food.name} delivery="Free" rate={food.score} number={20} time={food.serving_time} type={food.type} />
        )
    }

    return (
        <div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold">
                        Explore categories
                    </h2>
                    <div className="flex text-violet-800 cursor-pointer">
                        <p>
                            See all
                        </p>
                        <div className="my-auto ml-2">
                            <FaGreaterThan />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between overflow-x-auto w-[90vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden">
                    {showCategoriesList || <HomeLoading authorize={aouth} />}
                </div>
            </div>
            <div>
                <div className="flex justify-between my-[3vh] mx-[3vw]">
                    <h2 className="font-bold">
                        Featured restaurants
                    </h2>
                    <div className="flex text-violet-800 cursor-pointer">
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
                    <h2 className="font-bold">
                        Foods
                    </h2>
                    <div className="flex text-violet-800 cursor-pointer">
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