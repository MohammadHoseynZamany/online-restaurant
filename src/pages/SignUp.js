import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import { useCookies } from 'react-cookie'

// import require images
import signupImage from "@public/signUp.png"
import signupTabImage from "@public/signUpTab.png"
import NameIcon from "@public/64px.png"
import EmailIcon from "@public/Email.png"
import PassIcon from "@public/password.png"

//import global css
import '@/app/globals.css'
import SignUpToast from "@/components/SignUpToast"



export default function SignUp() {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);
    console.log(cookies["access_token"])

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

    const [passWordH, setPass] = useState()
    const [userNameH, setUserName] = useState()
    const [emailH, setEmail] = useState()

    function getElementValue(id){
        const val = document.getElementById(id).value
        return val
    }

        
    function inputFormData(){
        const password = getElementValue("password")
        const username = getElementValue("userName")
        const email = getElementValue("email")
        setPass(password)
        setUserName(username)
        setEmail(email)
        }

    const [emailError, setEmailEr] = useState()
    const [userNameError, setUserNameEr] = useState()
    const [passwordError, setPassEr] = useState()

    async function postData(data){
        try{
            const res = await axios.post(
                "http://127.0.0.1:8000/users/register/",
                data
            )
            console.log("response", res)
        } catch(err){
            if (err.response){
                setEmailEr(err.response.data.email)
                setUserNameEr(err.response.data.full_name)
                setPassEr(err.response.data.password)
            }
        }

    }
    
    async function  onSubmit(){
        let flag = true
        await inputFormData()
        let reqBody = {}
        if (passWordH !== ""){
            reqBody["password"] = passWordH
            setPassEr()
        } else {
            setPassEr("This field is required.")
            flag = false
        }
        
        if (userNameH !== ""){
            reqBody["full_name"] = userNameH
            setUserNameEr()
        } else {
            setUserNameEr("This field is required.")
            flag = false
        }
        
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

    return (
        <div className="block md:flex text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold overflow-hidden">
            <Image src={signUpImage} alt="signUp" className="md:rounded-r-3xl md:rounded-b-none md:rounded-br-3xl rounded-b-3xl md:h-screen h-56 md:w-1/2 w-screen object-cover md:max-w-md" priority={true} />
            <div className="self-center flex justify-center">
            <SignUpToast />
                <div className="px-6 mt-6 w-svw md:w-auto md:ml-4 md:block mb-6">
                    <h2 className="text-3xl font-medium">
                        Create an account
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Please create an account to continue using our service
                    </p>
                    <div className="flex m-10">
                        <Image src={NameIcon} alt="Name" className="md:w-1/6" />
                        <div className="w-full">
                            <p className="ml-3">FULL NAME</p>
                            <input type="text" className="border-b-2 ml-3 py-1 w-full" placeholder="Mark Clarke" id="userName" />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{userNameError}</p>
                    </div>
                    <div className="flex m-10">
                        <Image src={EmailIcon} alt="Email" className="md:w-1/6"/>
                        <div className="w-full">
                            <p className="ml-3">EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2 ml-3 py-1 w-full" placeholder="markclarke@gmail.com" id="email" />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{emailError}</p>
                    </div>
                    <div className="flex m-10">
                        <Image src={PassIcon} alt="pass" className="md:w-1/6" />
                        <div className="w-full">
                            <p className="ml-3">PASSWORD</p>
                            <input type="password" className="border-b-2 ml-3 py-1 w-full" placeholder="******" id="password" />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{passwordError}</p>
                    </div>
                    <button className="bg-violet-900 text-white rounded-lg w-full md:w-full md:max-w-lg h-10 lg:h-12" onClick={onSubmit}>Create an account</button>

                    <div className="text-center mt-4">
                        <p className="inline-block text-gray-500">Already have an account? </p>
                        <Link href="/login" className="inline-block text-red-500 font-medium ml-1"> Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
