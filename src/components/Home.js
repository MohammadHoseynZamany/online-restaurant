'use client'

import Category from "./Category"
import Restaurant from "./Restaurant"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import axios from "axios"

import PopularCat from "@public/catPopular.png"
import { FaGreaterThan } from "react-icons/fa6";
import Food from "./Food"
import HomeLoading from "./HomeLoading"


export default function Home() {
  const [categoriesList, setCategoriesList] = useState("")
  const [restaurantsList, setRestaurantsList] = useState("")
  const [foodsList, setFoodsList] = useState("")
  const [cookies] = useCookies(['access_token']);

  const[aouth, setAouth] = useState(true)

  
  useEffect(() => {
    getCatData(cookies["access_token"])
    getResData(cookies["access_token"])
    getFoodData(cookies["access_token"])
  }, [])

  async function getCatData(access_token){
    try{
        const res = await axios.get(
            "http://127.0.0.1:8000/categories/list/?size=6",
            { headers:
              { "Authorization": `Bearer ${ access_token }`}
             }
        )
        setCategoriesList(res.data)
    } catch(err){
        setAouth(false)
        console.log(err)
    }
  }

  async function getResData(access_token){
    try{
        const res = await axios.get(
            "http://127.0.0.1:8000/restaurants/list/?size=6",
            { headers:
              { "Authorization": `Bearer ${ access_token }`}
             }
        )
        setRestaurantsList(res.data.results)
    } catch(err){
        setAouth(false)
        console.log(err)
    }
  }

  async function getFoodData(access_token){
    try{
        const res = await axios.get(
            "http://127.0.0.1:8000/foods/list/?size=3",
            { headers:
              { "Authorization": `Bearer ${ access_token }`}
             }
        )
        setFoodsList(res.data.results)
    } catch(err){
        setAouth(false)
        console.log(err)
    }
  }


  let showCategoriesList
  if (categoriesList !== "") {
    showCategoriesList = categoriesList.map((cat) => 
    <Category key={categoriesList.indexOf(cat)} image={PopularCat} title={cat.name} options={cat.restaurant_count} />
    )
  }

  let showRestaurantsList
  if (restaurantsList !== "") {
    showRestaurantsList = restaurantsList.map((res) => 
    <Restaurant key={res.id} image={res.image} name={res.name} rate={res.score} count="1,873" food={res.type} money={1} delivery={res.delivery_cost_string === ""? res.delivery_cost_integer:res.delivery_cost_string} distance="4.3 km" />
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
                    { showCategoriesList || <HomeLoading authorize={aouth} /> }
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
                <div className="grid grid-cols-6 md:grid-cols-3">
                    {/* <div className="flex">
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        
                    </div>
                    <div className="flex">
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                        <Restaurant image={BurgerKingRes} name="Burger king" rate="4.8" count="1,873" food="Burger" money={1} delivery="Free" distance="4.3 km" />
                    </div> */}
                    { showRestaurantsList || <HomeLoading authorize={aouth} /> }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    { showFoodsList || <HomeLoading authorize={aouth} /> }
                </div>
            </div>
        </div>
    )
}