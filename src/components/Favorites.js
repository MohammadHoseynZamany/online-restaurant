import Restaurant from "./Restaurant"
import Food from "./Food"

import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import axios from "axios"
//import Icons
import { IoStorefrontOutline } from "react-icons/io5";
import { PiForkKnifeBold } from "react-icons/pi";



export default function Favorites() {
    const [restaurantsList, setRestaurantsList] = useState("")
    const [foodsList, setFoodsList] = useState("")
    const [cookies] = useCookies(['access_token']);

    useEffect(() => {
        getResData(cookies["access_token"])
        getFoodData(cookies["access_token"])
    }, [])


    async function getResData(access_token) {
        try {
            const res = await axios.get(
                "http://127.0.0.1:8000/favorites/restaurants/list/",
                {
                    headers:
                        { "Authorization": `Bearer ${access_token}` }
                }
            ).then((res)=> {
                setRestaurantsList(res?.data[0].favorite_restaurant)
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

    async function getFoodData(access_token) {
        try {
            const res = await axios.get(
                "http://127.0.0.1:8000/favorites/foods/list/",
                {
                    headers:
                        { "Authorization": `Bearer ${access_token}` }
                }
            ).then((res)=> {
                setFoodsList(res?.data[0].favorite_food)
                }
            )
        } catch (err) {
            console.log(err)
        }
    }
    let showRestaurantsList
    if (restaurantsList !== "" && typeof restaurantsList !== "undefined") {
        showRestaurantsList = restaurantsList.map((res) =>
            <Restaurant key={res.id} image={res.image} name={res.name} rate={res.score} count="1,873" food={res.type} money={1} delivery={res.delivery_cost_string === "" ? res.delivery_cost_integer : res.delivery_cost_string} distance="4.3 km" />
        )
    }

    let showFoodsList
    if (foodsList !== "" && typeof foodsList !== "undefined") {
        showFoodsList = foodsList.map(({ image, name, id, score, serving_time, type }) =>
            <Food key={id} image={image} name={name} delivery="Free" rate={score} number={20} time={serving_time} type={type} />
        )
    }

    const [mod, setMod] = useState("dishes")
    const UnChosesStyle = "text-gray-500 bg-gray-100"
    const chosesStyle = "text-white bg-violet-900"


    return (
        <div>
            <div className="flex my-3 mx-6">
                <div className={`flex p-2 mt-7 mb-6 rounded-lg cursor-pointer ${mod === "restaurants"? chosesStyle : UnChosesStyle}`} onClick={()=>setMod("restaurants")}>
                    <IoStorefrontOutline className="my-auto mx-2" />
                    <h3>
                        Restaurants ({ restaurantsList.length })
                    </h3>
                </div>
                <div className={`mx-6 flex p-2 mt-7 mb-6 rounded-lg cursor-pointer ${mod === "dishes"? chosesStyle : UnChosesStyle}`} onClick={()=>setMod("dishes")}>
                    <PiForkKnifeBold className="my-auto mx-2" />
                    <h3>
                        Dishes ({ foodsList.length })
                    </h3>
                </div>
            </div>
            {/* <div id="restaurants" className={`flex justify-between overflow-x-auto w-[90vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden ${mod === "restaurants"? "":"hidden"}`}> */}
            <div id="restaurants" className={`grid grid-cols-6 md:grid-cols-3 w-[90vw] lg:w-[90vw] [&::-webkit-scrollbar]:hidden ${mod === "restaurants"? "":"hidden"}`}>
                { showRestaurantsList }
            </div>
            <div id="Dishes" className={`grid grid-cols-1 md:grid-cols-3 ${mod === "dishes"? "":"hidden"}`}>
                { showFoodsList }
            </div>
        </div>
    )
}