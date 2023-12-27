import Image from "next/image"
import signupImage from "@public/signupImage.png"
import NameIcon from "@public/64px.png"
import EmailIcon from "@public/Email.png"
import PassIcon from "@public/password.png"
import '@/app/globals.css'



export default function SignUp(){
    return(
        <div className="flex">
            <Image src={signupImage} className="rounded-r-3xl h-screen w-2/5"/>
            <div className="self-center w-3/5 flex justify-center">
                <div>
                    <h2 className="text-3xl font-medium">
                        Create an account
                    </h2>
                    <p className="text-gray-400">
                        Please create an account to continue using our service
                        </p>
                    <div className="flex">
                        <Image src={NameIcon}/>
                        <div>
                            <p>FULL NAME</p>
                            <input type="text" className="border-b-2" placeholder="Mark Clarke"/>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={EmailIcon}/>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <input type="email" className="border-b-2" placeholder="markclarke@gmail.com"/>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={PassIcon}/>
                        <div>
                            <p>PASSWORD</p>
                            <input type="password" className="border-b-2" placeholder="******"/>
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
