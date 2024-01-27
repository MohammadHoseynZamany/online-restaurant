import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import Image from "next/image"
import axios from "axios"

import Profile from "@public/Profile.png"
import NameImage from "@public/PName.png"
import EmailImage from "@public/PEmail.png"
import PhoneImage from "@public/PPhone.png"
import AddressImage from "@public/AAdress.png"


export default function PersonalInfo({ props }) {
    const [cookies] = useCookies(['access_token', 'refresh_token']);



    return (
        <div id="toast" className={`absolute justify-items-center align-center w-[100
        %] px-20 ${props.display ? "block" : "hidden"}`}>
            <div class="max-w-xs bg-violet-100 border border-gray-200 rounded-xl shadow-lg p-4" role="alert">
                <div class="flex">
                    <div class="ms-4">
                        <div className="flex">
                            <h3 class="text-gray-800 font-semibold">
                                Personal Information
                            </h3>
                            <IoMdClose className="my-auto float-right ml-16 cursor-pointer" onClick={() => { props.setToast((toast) => toast.display = !toast.display) }} />
                        </div>
                        <div class="mt-5 text-sm text-gray-600 mx-2 my-4">
                            Profile image
                        </div>
                        <div>
                            <div className="grid grid-cols-3">
                                <Image alt="profile" src={Profile} width={100} height={100} className="my-auto w-16 mb-6" />
                                <button className="my-auto text-white bg-violet-800 rounded-md p-1 mr-1">
                                    Upload
                                </button>
                                <button className="my-auto rounded-md p-1 bg-gray-300 ml-1">
                                    Delete
                                </button>
                            </div>
                            <div>
                                <p className="text-gray-500">
                                    Profile details
                                </p>
                                <div className="flex mt-4 pr-2">
                                    <Image src={NameImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto mb-8" />
                                    <div className="w-full">
                                        <p className="ml-3">Full Name</p>
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" placeholder="Mark Clarke" id="email" />
                                    </div>
                                </div>
                                <div className="flex mt-4 pr-2 mb-8">
                                    <Image src={EmailImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                                    <div className="w-full">
                                        <p className="ml-3">Email Address</p>
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" placeholder="markclarke@gmail.com" id="email" />
                                    </div>
                                </div>
                                <div className="flex mt-4 pr-2 mb-6">
                                    <Image src={PhoneImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                                    <div className="w-full">
                                        <p className="ml-3">Phone Number</p>
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" placeholder="+1 (234) 5678 900" id="email" />
                                    </div>
                                </div>
                                <div className="w-full text-center">
                                    <button className="bg-violet-600 text-white rounded-md w-full py-3">
                                        Update Profile
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