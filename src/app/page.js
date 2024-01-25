'use client'
import Home from "@/components/Home";
import LeftSideBar from "@/components/LeftSideBar";
import Navigation from "@/components/Navigation";
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
  return (
    <div className="flex">
      <LeftSideBar className="flex-1"/>
      <div className="flex-1 mt-3 mb-20 mx-[0.1vw]">
        <Navigation closeOptions={showBody} setCloseOptions={setShowBody} />
        <div id="body-container">
          <Home />
        </div>
      </div>
    </div>
  )
}
