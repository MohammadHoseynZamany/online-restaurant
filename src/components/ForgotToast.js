import Link from "next/link"

export default function ForgotToast({ props }) {
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