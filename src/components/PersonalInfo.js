import { IoMdClose } from "react-icons/io";
import { useState } from "react"
import { useCookies } from 'react-cookie'
import Image from "next/image"
import axios from "axios"

import Profile from "@public/Profile.png"
import NameImage from "@public/PName.png"
import EmailImage from "@public/PEmail.png"
import PhoneImage from "@public/PPhone.png"

//MUI
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function PersonalInfo({ props }) {
    const handleClose = () => {
        props.setToast((toast) => ({
            ...toast,
            display: false
        }))
    };

    return (
        <React.Fragment>
            <Dialog
                open={props.display}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    // onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    //   event.preventDefault();
                    //   const formData = new FormData(event.currentTarget);
                    //   const formJson = Object.fromEntries((formData as any).entries());
                    //   const email = formJson.email;
                    //   console.log(email);
                    //   handleClose();
                    // },
                }}
            >
                <DialogTitle>Personal Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <div>
                        <p className="text-gray-500">
                            Profile details
                        </p>
                        <div className="flex mt-4 pr-2">
                            <Image src={NameImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto mb-8" />
                            <div className="w-full mx-3">
                            <TextField label="Full Name" variant="standard" placeholder="Mark Clarke" className="w-full"  onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    name: event.target.value
                                }))} />
                                {/* <p className="ml-3">Full Name</p>
                                <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="name" placeholder="Mark Clarke" onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    name: event.target.value
                                }))} /> */}
                            </div>
                        </div>
                        <div className="flex mt-4 pr-2 mb-8">
                            <Image src={EmailImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                            <div className="w-full mx-3">
                            <TextField label="Email Address" variant="standard" placeholder="markclarke@gmail.com" className="w-full" onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    email: event.target.value
                                }))} />
                                {/* <p className="ml-3">Email Address</p>
                                <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="email" placeholder="markclarke@gmail.com" onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    email: event.target.value
                                }))} /> */}
                            </div>
                        </div>
                        <div className="flex mt-4 pr-2 mb-6">
                            <Image src={PhoneImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                            <div className="w-full mx-3">
                            <TextField label="Phone Number" variant="standard" placeholder="+1 (234) 5678 900" className="w-full" onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    phone: event.target.value
                                }))} />
                                {/* <p className="ml-3">Phone Number</p>
                                <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="phone" placeholder="+1 (234) 5678 900" onChange={(event) => setInData(prevIn => ({
                                    ...prevIn,
                                    phone: event.target.value
                                }))} /> */}
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="bg-violet-600 text-white rounded-md w-full py-3">Cancel</Button>
                    <Button type="submit" className="bg-violet-600 text-white rounded-md w-full py-3">Update Profile</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}







function Personalo({ props }) {
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const [inData, setInData] = useState({})

    async function postData(data) {
        try {
            const res = await axios.put(
                "http://127.0.0.1:8000/users/login/",
                data
            ).then((res) => {
                console.log(res)
            })
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                document.getElementById("email").placeholder = err.response.data.email
            }
        }
    }


    return (
        <div id="toast" className={`absolute justify-items-center align-center w-[100
        %] px-20 ${props.display ? "block" : "hidden"}`}>
            <div className="max-w-xs bg-violet-100 border border-gray-200 rounded-xl shadow-lg p-4" role="alert">
                <div className="flex">
                    <div className="ms-4">
                        <div className="flex">
                            <h3 className="text-gray-800 font-semibold">
                                Personal Information
                            </h3>
                            <IoMdClose className="my-auto float-right ml-16 cursor-pointer" onClick={() => {
                                props.setToast((toast) => ({
                                    ...toast,
                                    display: false
                                }))
                            }} />
                        </div>
                        <div className="mt-5 text-sm text-gray-600 mx-2 my-4">
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
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="name" placeholder="Mark Clarke" onChange={(event) => setInData(prevIn => ({
                                            ...prevIn,
                                            name: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div className="flex mt-4 pr-2 mb-8">
                                    <Image src={EmailImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                                    <div className="w-full">
                                        <p className="ml-3">Email Address</p>
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="email" placeholder="markclarke@gmail.com" onChange={(event) => setInData(prevIn => ({
                                            ...prevIn,
                                            email: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div className="flex mt-4 pr-2 mb-6">
                                    <Image src={PhoneImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                                    <div className="w-full">
                                        <p className="ml-3">Phone Number</p>
                                        <input type="email" className="border-b-2 border-gray-300 ml-3 py-1 w-full bg-violet-100" id="phone" placeholder="+1 (234) 5678 900" onChange={(event) => setInData(prevIn => ({
                                            ...prevIn,
                                            phone: event.target.value
                                        }))} />
                                    </div>
                                </div>
                                <div className="w-full text-center" onClick={() => postData(inData)}>
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