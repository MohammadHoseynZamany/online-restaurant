// import Link from "next/link"

// export default function SignUpToast() {
//     return (
//         <div className="absolute justify-items-center align-center">
//             <div class="max-w-xs bg-violet-100 border border-gray-200 rounded-xl shadow-lg p-4" role="alert">
//                 <div class="flex">
//                     <div class="ms-4">
//                         <h3 class="text-gray-800 font-semibold">
//                             SignUp is completed
//                         </h3>
//                         <div class="mt-1 text-sm text-gray-600">
//                             Please Open your mail box and verify your email
//                         </div>
//                         <div class="mt-4">
//                             <Link class="flex space-x-3" href="/login">
//                                 <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800">
//                                     Login
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="mt-2 max-w-xs bg-violet-200 border border-gray-200 rounded-xl shadow-lg " role="alert">
//                 <div class="flex p-4">
//                     <div class="ms-3">
//                         <p class="text-sm text-gray-700">
//                             Verify Email Successfully Sent
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



import Link from "next/link"

export default function LoginToast({ props }) {
    return (
        <div id="toast" className={`absolute justify-items-center align-center ${props.display? "block":"hidden"}`}>
            <div className="max-w-xs bg-violet-100 border border-gray-200 rounded-xl shadow-lg p-4" role="alert">
                <div className="flex">
                    <div className="ms-4">
                        <h3 className="text-gray-800 font-semibold">
                            {props.title}
                        </h3>
                        <div className="mt-1 text-sm text-gray-600">
                            {props.detail}
                        </div>
                        <div className="mt-4">
                            <Link className="flex space-x-3" href="/login">
                                <button type="button" className={`inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 ${props.error? "hidden":"block"}`}>
                                    Login
                                </button>
                            </Link>
                            <button className="text-orange-300" onClick={()=>{ props.setToast((toast)=> toast.display = !toast.display) }}>
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mt-2 max-w-xs bg-violet-200 border border-gray-200 rounded-xl shadow-lg ${props.error? "block":"hidden"}`}  role="alert">
                <div className="flex p-4">
                    <div className="ms-3">
                        <p className="text-sm text-red-400">
                            {props.error}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}