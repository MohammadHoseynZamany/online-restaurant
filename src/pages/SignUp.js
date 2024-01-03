import Image from "next/image"
import { useState, useEffect } from "react"

// import require images
import signupImage from "@public/signUp.png"
import signupTabImage from "@public/signUpTab.png"
import NameIcon from "@public/64px.png"
import EmailIcon from "@public/Email.png"
import PassIcon from "@public/password.png"

//import global css
import '@/app/globals.css'



export default function SignUp() {

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
    return (
        <div className="md:flex text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold overflow-hidden">
            <Image src={signUpImage} alt="signUp" className="md:rounded-r-3xl md:rounded-b-none md:rounded-br-3xl rounded-b-3xl md:h-screen h-56 md:w-1/2 w-screen object-cover md:max-w-md" priority={true} />
            <div className="self-center w-3/5 flex justify-center">
                <div className="ml-4">
                    <h2 className="text-3xl font-medium">
                        Create an account
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Please create an account to continue using our service
                    </p>
                    <div className="flex m-10">
                        <Image src={NameIcon} alt="Name" className="w-1/6" />
                        <div>
                            <p className="ml-3">FULL NAME</p>
                            <input type="text" className="border-b-2 ml-3 py-1" placeholder="Mark Clarke" />
                        </div>
                    </div>
                    <div className="flex m-10">
                        <Image src={EmailIcon} alt="Email" className="w-1/6"/>
                        <div>
                            <p className="ml-3">EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2 ml-3 py-1" placeholder="markclarke@gmail.com" />
                        </div>
                    </div>
                    <div className="flex m-10">
                        <Image src={PassIcon} alt="pass" className="w-1/6" />
                        <div>
                            <p className="ml-3">PASSWORD</p>
                            <input type="password" className="border-b-2 ml-3 py-1" placeholder="******" />
                        </div>
                    </div>
                    <button className="bg-violet-900 text-white rounded-lg w-full max-w-lg h-10 lg:h-12">Create an account</button>
                    <div className="text-center mt-4">
                        <p className="inline-block text-gray-500">Already have an account? </p>
                        <a className="inline-block text-red-500 font-medium ml-1"> Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
