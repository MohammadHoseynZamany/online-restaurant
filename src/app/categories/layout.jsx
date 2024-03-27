import Index from "..";
import Link from "next/link"
import { FaLessThan } from "react-icons/fa6";


export default function RootLayout({ children }) {
  return (
    <Index>
      <Link href="/">
        <div className="flex text-violet-800 cursor-pointer ml-7 my-5 animate-appearance-in">
          <div className="my-auto">
            <FaLessThan />
          </div>
          <p className="my-auto ml-1">
            back
          </p>
        </div>
      </Link>
      {children}
    </Index >
  )
}