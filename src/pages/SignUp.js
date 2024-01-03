import Image from "next/image"
import { useState, useEffect } from "react"

// import require images
import signupImage from "@public/signupImage.png"
import NameIcon from "@public/64px.png"
import EmailIcon from "@public/Email.png"
import PassIcon from "@public/password.png"
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

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    console.log(windowDimensions)
    return (
        <div className="md:flex ">
            <Image src={signupImage} alt="signUp" className="md:rounded-r-3xl rounded-b-3xl md:h-screen h-56 md:w-2/5 w-screen object-cover" />
            <div className="self-center w-3/5 flex justify-center">
                <div>
                    <h2 className="text-3xl font-medium">
                        Create an account
                    </h2>
                    <p className="text-gray-400">
                        Please create an account to continue using our service
                    </p>
                    <div className="flex">
                        <Image src={NameIcon} alt="Name" />
                        <div>
                            <p>FULL NAME</p>
                            <input type="text" className="border-b-2" placeholder="Mark Clarke" />
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={EmailIcon} alt="Email" />
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2" placeholder="markclarke@gmail.com" />
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={PassIcon} alt="pass" />
                        <div>
                            <p>PASSWORD</p>
                            <input type="password" className="border-b-2" placeholder="******" />
                        </div>
                    </div>
                    <button className="bg-violet-900 text-white rounded-lg">Create an account</button>
                    <div>
                        <p className="inline-block text-gray-500">Already have an account? </p>
                        <a className="inline-block text-red-500 font-medium"> Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
