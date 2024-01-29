import { IoMdPerson } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlinePersonAdd } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import PersonalInfo from "./PersonalInfo";
import { useEffect, useState } from "react";
import SavedAddresses from "./SavedAddresses";


export default function Settings() {
    const [propsPersonal, setPropsPersonal] = useState({})
    const [propsAdd, setPropsAdd] = useState({})
    useEffect (()=>{
        setPropsPersonal (
            {
                display: false,
                setToast: setPropsPersonal
            }
        )
        setPropsAdd (
            {
                display: false,
                setToast: setPropsAdd
            }
        )
    }, [])
    return (
        <div className="mt-6 mx-10">
            <PersonalInfo props={ propsPersonal } />
            <SavedAddresses props={ propsAdd } />
            <div className="my-7">
                <h1 className="font-bold text-2xl">
                    Settings
                </h1>
            </div>
            <div>
                <p className="text-gray-500 text-lg mb-4">
                    General
                </p>
                <div className="flex border-b py-4 cursor-pointer" onClick={()=>setPropsPersonal((prevProp) => ({
                    ...prevProp,
                    display: !prevProp.display
                }))}>
                    <IoMdPerson className="text-violet-700 my-auto text-2xl mx-2" />
                    <p>
                        Personal information
                    </p>
                </div>
                <div className="flex border-b py-4 cursor-pointer" onClick={()=>setPropsAdd((prevProp) => ({
                    ...prevProp,
                    display: !prevProp.display
                }))}>
                    <FaRegBookmark className="my-auto text-orange-600 text-2xl mx-2" />
                    <p>
                        Saved addresses
                    </p>
                </div>
                <div className="flex border-b py-4">
                    <CiMail className="my-auto text-yellow-500 text-2xl mx-2" />
                    <p>
                        Marketing preferences
                    </p>
                </div>
            </div>
            <div>
                <p className="text-gray-500 text-lg mt-8 mb-4">
                    Payments
                </p>
                <div className="flex border-b py-4">
                    <CiWallet className="my-auto text-2xl text-purple-900 mx-2" />
                    <p>
                        Payment methods
                    </p>
                </div>
                <div className="flex border-b py-4">
                    <FaRegCreditCard className="my-auto text-2xl text-red-400 mx-2" />
                    <p>
                        My cards
                    </p>
                </div>
            </div>
            <div>
                <p className="text-gray-500 text-lg mt-8 mb-4">
                    Other
                </p>
                <div className="flex border-b py-4">
                    <FaRegCircleQuestion className="my-auto text-2xl text-purple-950 mx-2" />
                    <p>
                        Support
                    </p>
                </div>
                <div className="flex border-b py-4">
                    <MdOutlinePersonAdd className="my-auto text-2xl text-red-500 mx-2" />
                    <p>
                        Invite a friend
                    </p>
                </div>
                <div className="flex border-b py-4">
                    <RiMoneyDollarBoxLine className="my-auto text-2xl text-orange-400 mx-2" />
                    <p>
                        Discounts
                    </p>
                </div>
            </div>
        </div>
    )
}