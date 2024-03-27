'use client'

import { getCatData } from "@/components/services/services"
import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import Category from "@/components/shared/Category";

export default function Categories() {
    const [cookies] = useCookies(['access_token']);
    const [apiData, setApiData] = useState()
    let categoriesComp
    useEffect(() => {
        async function getApiData() {
            const data = await getCatData(cookies["access_token"])
            setApiData(data)
        }
        getApiData()
    }, [])
    if(apiData) {
            categoriesComp = apiData.map((cat) =>
        <div key={cat.id} className="mx-auto my-2">
            <Category image={cat.image} title={cat.name} options={cat.restaurant_count} />
        </div>
    )
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl-grid-cols-7">
            {categoriesComp}
        </div>
    )
}