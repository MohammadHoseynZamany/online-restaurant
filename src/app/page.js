import Body from "@/components/HomeBody";
import LeftSideBar from "@/components/LeftSideBar";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex">
      <LeftSideBar className="flex-1"/>
      <div className="flex-1">
        <Navigation />
        <Body />
      </div>
    </div>
  )
}
