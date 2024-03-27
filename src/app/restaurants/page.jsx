'use client'

import { getResData } from "@/components/services/services"
import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import Restaurant from "@/components/shared/Restaurant";

export default function RestaurantAll() {
    const [cookies] = useCookies(['access_token']);
    const [apiData, setApiData] = useState()
    let restaurantComp
    useEffect(() => {
        async function getApiData() {
            const data = await getResData(cookies["access_token"])
            setApiData(data)
        }
        getApiData()
    }, [])
    if (apiData) {
        restaurantComp = apiData.map((res) =>
            <div key={res.id} className="mx-auto my-2">
                <Restaurant id={res.id} image={res.image} name={res.name} rate={res.score} count="1,873" food={res.type} money={1} delivery={res.delivery_cost_string === "" ? res.delivery_cost_integer : res.delivery_cost_string} distance="4.3 km" handleClick={() => redirect(`/restaurants/${res.id}`)} />
            </div>
        )
    }

    console.log(apiData)
    return (
        <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl-grid-cols-4">
            {restaurantComp}
        </div>
    )
}