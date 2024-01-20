'use client'
import Body from "@/components/Body";
import LeftSideBar from "@/components/LeftSideBar";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react"


export default function Home() {
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
      <div className="flex-1">
        <Navigation closeOptions={showBody} setCloseOptions={setShowBody} />
        <div id="body-container">
          <Body />
        </div>
      </div>
    </div>
  )
}
