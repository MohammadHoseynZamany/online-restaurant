import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"

// import require images
import signupImage from "@public/signUp.png"
import signupTabImage from "@public/signUpTab.png"
import EmailIcon from "@public/Email.png"
import PassIcon from "@public/password.png"
import RootLayout from "@/app/layout"

//import global css
import '@/app/globals.css'


export default function SignUp(props) {
    const hasWindow = typeof window !== 'undefined';
    console.log(props)

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
    const [emailH, setEmail] = useState()

    function getElementValue(id){
        const val = document.getElementById(id).value
        return val
    }

        
    function inputFormData(){
        const password = getElementValue("password")
        const email = getElementValue("email")
        setPass(password)
        setEmail(email)
        }

    const [emailError, setEmailEr] = useState()
    const [passwordError, setPassEr] = useState()
//save response data
    const [authorize, setAuthorize] = useState()
    const [access, setAccess] = useState()
    const [refresh, setRefresh] = useState()


    async function postData(data){
        try{
            const res = await axios.post(
                "http://127.0.0.1:8000/users/login/",
                data
            ).then((res) =>  {
            getRes(res)
            })
        } catch(err){
            if (err.response){
                setEmailEr(err.response.data.email)
                setPassEr(err.response.data.password)
                setAuthorize(err.response.statusText)
                console.log(authorize)
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

    async function getRes(res){
        await setAccess(res.data.access)
        await setRefresh(res.data.refresh)
        await setAuthorize(res.statusText)
        console.log(`${access}\n${refresh}\n${authorize}`)
    }

    return (
        <div className="block md:flex text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold overflow-hidden">
            <Image src={signUpImage} alt="signUp" className="md:rounded-r-3xl md:rounded-b-none md:rounded-br-3xl rounded-b-3xl md:h-screen h-56 md:w-1/2 w-screen object-cover md:max-w-md" priority={true} />
            <div className="self-center flex justify-center">
                <div className="px-6 mt-6 w-svw md:w-auto md:ml-4 md:block mb-6">
                    <h2 className="text-3xl font-medium">
                        Welcome!
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Sign in to your account continue
                    </p>
                    <div className="flex m-10">
                        <Image src={EmailIcon} alt="Email" className="md:w-1/6"/>
                        <div className="w-full">
                            <p className="ml-3">EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2 ml-3 py-1 w-full" placeholder="markclarke@gmail.com" id="email" />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{emailError}</p>
                    </div>
                    <div className="flex m-10">
                        <Image src={PassIcon} priority={true} alt="pass" className="md:w-1/6" />
                        <div className="w-full">
                            <p className="ml-3">PASSWORD</p>
                            <input type="password" className="border-b-2 ml-3 py-1 w-full" placeholder="******" id="password" />
                        </div>
                        <p className="text-red-600 self-center pl-1 text-xs">{passwordError}</p>
                    </div>
                    <button className="text-violet-900 bg-violet-100 rounded-lg w-full md:w-full md:max-w-lg h-10 lg:h-12" onClick={onSubmit}>Sign in</button>
                    <div className="text-center my-4">
                        <p className="inline-block text-gray-500">Forgot password? </p>
                    </div>
                    <Link href="/SignUp">
                        <button className="bg-violet-900 text-white rounded-lg w-full md:w-full md:max-w-lg h-10 lg:h-12">Create an account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
