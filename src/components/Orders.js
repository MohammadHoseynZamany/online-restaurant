"use client"
import PreviousOrders from "./PreviousOrders";
import UpcomingOrder from "./UpcommingOrder";
import { useCookies } from "react-cookie"
import axios from "axios"
import { useEffect, useState } from "react";


export default function Orders() {
  const [cookies] = useCookies(['access_token']);
  const token = cookies['access_token']
  const [ordersList, setOrdersList] = useState("")

  async function getOrder() {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/orders/list/",
        {
          headers:
            { "Authorization": `Bearer ${token}` }
        }
      )
        // .then((res)=> res.json()).then((res) =>{
        .then((res) => {
          console.log(res)
          setOrdersList(res)
        }
        )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])
  // let ordersComponents
  // if (ordersList !== "") {
  //     ordersComponents = ordersList.map((order) =>
  //       <UpcomingOrder key={order.id} restaurant={order.restaurant} is_completed={order.is_completed} is_canceled={order.is_canceled} date={order.date} foods={order.foods} />
  //     )

  // }


  return (
    <div className="grid grid-cols-3 md:cols-5 gap-3">
      {/* { ordersComponents } */}
      <UpcomingOrder restaurant="Domino's pizza" is_completed={true}
      is_canceled={false}
      date="2024-01-26" foods={["Chef’s Burger Deluxe", "Gigantic Rodeo Burger"]} />
      <UpcomingOrder restaurant="Pizza Hut" is_completed={false}
      is_canceled={false}
      date="2024-01-27" foods={["Chef’s Burger Deluxe", "Gigantic Rodeo Burger"]} />
      <UpcomingOrder restaurant="KFC" is_completed={false}
      is_canceled={true}
      date="2024-01-28" foods={["Chicken Grill", "Gigantic Rodeo Burger"]} />
      <UpcomingOrder restaurant="Domino's pizza" is_completed={true}
      is_canceled={true}
      date="2024-01-29" foods={["Vegetables Skewers", "Gigantic Rodeo Burger"]} />
    </div>
  )
}