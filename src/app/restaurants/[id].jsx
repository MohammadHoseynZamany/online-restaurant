import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getResDetail } from '@/components/services/services'
import { useCookies } from 'react-cookie'



export default function RestaurantsId() {
    const router = useRouter()
    const [restaurantsList, setRestaurantsList] = useState()
    const [cookies] = useCookies(['access_token']);


    useEffect(()=>
        {async function api() {
            const resData = await getResDetail(cookies["access_token"], router.query.id)
            setRestaurantsList(resData)
        }
        api()}
        , [])

        console.log(restaurantsList)

    return (
        <div>
            {router.query.id}
        </div>
    )
}