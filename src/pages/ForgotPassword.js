import Image from "next/image"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'

import axios from "axios"

// import require images
import signupImage from "@public/signUp.png"
import signupTabImage from "@public/signUpTab.png"
import EmailIcon from "@public/Email.png"

//import global css
import '@/app/globals.css'
import ForgotToast from "@/components/ForgotToast"

export default function ForgotPassword() {
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [signUpImage, setImage] = useState(signupImage)
    const [toast, setToast] = useState({})

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    useEffect(()=> {
        if (windowDimensions.width < 768){
            setImage(signupTabImage)
        } else if (windowDimensions.width > 767){
            setImage(signupImage)
        }
    }, [windowDimensions.width])

    const [emailH, setEmail] = useState()

    function getElementValue(id){
        const val = document.getElementById(id).value
        return val
    }

        
    function inputFormData(){
        const email = getElementValue("email")
        setEmail(email)
        }

    const [emailError, setEmailEr] = useState()


    async function postData(data){
        try{
            const res = await axios.post(
                "http://127.0.0.1:8000/users/forgotpassword/",
                data
            ).then((res) =>  {
            getRes(res)
            console.log(res)
            })
        } catch(err){
            if (err.response){
                console.log(err.response)
                setToast({
                    display: true,
                    title: "Send Email Failed",
                    detail: `Email: ${err.response.data.email}`,

                    setToast: setToast
                })
            }
        }

    }
    
    async function  onSubmit(){
        let flag = true
        await inputFormData()
        let reqBody = {}
        if (emailH !== ""){
            reqBody["email"] = emailH
            setEmailEr()
        } else {
            setEmailEr("This field is required.")
            flag = false
        }        
        if (flag){
            postData(reqBody)
        }
    }

    function getRes(res){
        setToast({
            display: true,
            title: "Email was sent",
            detail: res.data.message,
            setToast: setToast
        })
    }

    return (
        <div className="block md:flex text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold overflow-hidden">
            <Image src={signUpImage} alt="signUp" className="md:rounded-r-3xl md:rounded-b-none md:rounded-br-3xl rounded-b-3xl md:h-screen h-56 md:w-1/2 w-screen object-cover md:max-w-md" priority={true} />
            <div className="self-center flex justify-center">
                <ForgotToast props={toast}/>
                <div className="px-6 mt-6 w-svw md:w-auto md:ml-4 md:block mb-6">
                    <h2 className="text-3xl font-medium">
                        Forgot Password
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Input your registered email address to send password reset to your email
                    </p>
                    <div className="flex m-10">
                        <Image src={EmailIcon} alt="Email" className="md:w-1/6"/>
                        <div className="w-full">
                            <p className="ml-3">EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2 ml-3 py-1 w-full" placeholder="markclarke@gmail.com" id="email" onChange={inputFormData} />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{emailError}</p>
                    </div>
                    
                    <div onClick={onSubmit}>
                        <button className="bg-violet-900 text-white rounded-lg w-full md:w-full md:max-w-lg h-10 lg:h-12">
                            Send Password Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
