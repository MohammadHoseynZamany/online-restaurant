'use client'
import Favorites from "@/components/Favorites";
import Home from "@/components/Home";
import LeftSideBar from "@/components/LeftSideBar";
import Navigation from "@/components/Navigation";
import Orders from "@/components/Orders";
import PersonalInfo from "@/components/PersonalInfo";
import Settings from "@/components/Settings";
import { useState, useEffect } from "react"





export default function Main() {
  const [showBody, setShowBody] = useState(true)

  useEffect(()=>{
    if (!showBody) {
      document.getElementById("body-container").style.display = "none"
    } else {
      document.getElementById("body-container").style.display = "block"
    }
  }, [showBody])

  const [mod, setMod] = useState("home")
  return (
    <div className="flex">
      <LeftSideBar className="flex-1" mod={ mod } setMod={ setMod } />
      <div className="flex-1 mt-3 mb-20 mx-[0.1vw]">
        <Navigation closeOptions={showBody} setCloseOptions={setShowBody} />
        <div id="body-container">
          <div  className={mod === "home" ? "" : "hidden"}>
            <Home />
          </div>
          <div className={mod === "favorites" ? "" : "hidden"}>
            <Favorites />
          </div>
          <div className={mod === "orders" ? "" : "hidden"}>
            <Orders />
          </div>
          <div className={mod === "settings" ? "" : "hidden"}>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}
