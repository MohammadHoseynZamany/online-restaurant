import { IoMdClose } from "react-icons/io";
import { LiaCitySolid } from "react-icons/lia"
import { FaRoad } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import axios from "axios"



export default function SavedAddresses({ props }) {
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const [inData, setInData] = useState({})
    const [addMod, setAddMod] = useState("address")

    async function postData(data){
        try{
            const res = await axios.post(
                "http://127.0.0.1:8000/users/settings/address-list/",
                data,
                {
                    headers: {
                        "Authorization": `Bearer ${ cookies["access_token"] }`
                    }
                }
            ).then((res) =>  {
            alert("New address was successfully created")
            })
        } catch(err){
            if (err.response){
                typeof err.response.data.city === "undefined"? "":alert(`City: ${err.response.data.city}`)
                typeof err.response.data.state === "undefined"? "":alert(`State: ${err.response.data.state}`)
                typeof err.response.data.street === "undefined"? "":alert(`Street: ${err.response.data.street}`)
                typeof err.response.data.zip_code === "undefined"? "":alert(`Zip Code: ${err.response.data.zip_code}`)
            }
        }
    }

    const [rescomp, setRescomp] = useState()
    async function getData(){
        try{
            const res = await axios.get(
                "http://127.0.0.1:8000/users/settings/address-list/",
                {
                    headers: {
                        "Authorization": `Bearer ${ cookies["access_token"] }`
                    }
                }
            ).then((res) =>  {
                // console.log(res.data)
                setRescomp(()=> res.data.map((com)=> 
                    <div key={com.id}>
                        <p>
                            {res.street}
                        </p>
                    </div>
                )
            )})
        } catch(err){
            if (err.response){
                typeof err.response.data.city === "undefined"? "":alert(`City: ${err.response.data.city}`)
                typeof err.response.data.state === "undefined"? "":alert(`State: ${err.response.data.state}`)
                typeof err.response.data.street === "undefined"? "":alert(`Street: ${err.response.data.street}`)
                typeof err.response.data.zip_code === "undefined"? "":alert(`Zip Code: ${err.response.data.zip_code}`)
            }
        }
    }
    useEffect(()=>
        {getData()}
        , [])
    return (
        <div id="toast" className={`absolute justify-items-center align-center w-[100
        %] px-20 ${props.display ? "block" : "hidden"}`}>
            <div className="max-w-xs bg-violet-100 border border-gray-200 rounded-xl shadow-lg p-4" role="alert">
                <div className="flex">
                    <div className="ms-4">
                        <div className="flex">
                            <h3 className="text-gray-800 font-semibold">
                                Saved Addresses
                            </h3>
                            <div>{rescomp}</div>

                            <IoMdClose className="my-auto float-right ml-16 cursor-pointer" onClick={() => {
                                props.setToast((toast) => ({
                                    ...toast,
                                    display: false
                                }))
                            }} />
                        </div>
                        <div>
                            <div className="flex my-6">
                                <button className="m-auto text-white bg-violet-800 rounded-md px-5 py-2 mx-2" onClick={() => setAddMod("address")}>
                                    Address
                                </button>
                                <button className="m-auto rounded-md p-1 bg-gray-300 px-2 py-2 mx-2" onClick={() => setAddMod("newAddress")}>
                                    New Address
                                </button>
                            </div>
                            <div id="newAddress" className={ addMod === "newAddress" ? "" : "hidden"}>
                                <div className="flex m-10">
                                    <LiaCitySolid className="md:w-1/6 my-auto text-3xl" />
                                    <div className="w-full my-auto">
                                        <p className="ml-3">City</p>
                                        <input type="text" className="border-b-2 ml-3 py-1 w-full my-auto rounded-lg px-2" placeholder="" id="city" onChange={(event)=>setInData((prevIn) => ({
                                            ...prevIn,
                                            city: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div>{rescomp}</div>
                                <div className="flex m-10">
                                    <LiaCitySolid className="md:w-1/6 my-auto text-3xl" />
                                    <div className="w-full my-auto">
                                        <p className="ml-3">State</p>
                                        <input type="text" className="border-b-2 ml-3 py-1 w-full my-auto rounded-lg px-2" placeholder="" id="state" onChange={(event)=>setInData((prevIn) => ({
                                            ...prevIn,
                                            state: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div className="flex m-10">
                                    <FaRoad className="md:w-1/6 my-auto text-3xl" />
                                    <div className="w-full my-auto">
                                        <p className="ml-3">Street</p>
                                        <input type="text" className="border-b-2 ml-3 py-1 w-full my-auto rounded-lg px-2" placeholder="" id="street" onChange={(event)=>setInData((prevIn) => ({
                                            ...prevIn,
                                            street: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div className="flex m-10">
                                    <FaHome className="md:w-1/6 my-auto text-3xl" />
                                    <div className="w-full my-auto">
                                        <p className="ml-3">Zip Code</p>
                                        <input type="text" className="border-b-2 ml-3 py-1 w-full my-auto rounded-lg px-2" placeholder="" id="zipCode" onChange={(event)=>setInData((prevIn) => ({
                                            ...prevIn,
                                            zip_code: event.target.value
                                        }))} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full text-center" onClick={() => postData({...inData})}>
                                    <button className={`bg-violet-600 text-white rounded-md w-full py-3 ${addMod === "newAddress" ? "" : "hidden"}`}>
                                        Save Address
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}