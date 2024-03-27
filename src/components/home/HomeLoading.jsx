import Link from "next/link"

export default function HomeLoading(props) {
    if (props.authorize === true) {
        return (
            <div className="text-center animate-bounce mx-auto">
                <h2>
                    Loading ...
                </h2>
            </div>
        )
    } else {
        return (
            <Link href="/login">
                <div className="text-red-600 text-center  animate-pulse mx-auto">
                    <h2>
                        You Are Not Authorize
                    </h2>
                    <p>
                        Please Login First
                    </p>
                </div>
            </Link>
        )
    }
}