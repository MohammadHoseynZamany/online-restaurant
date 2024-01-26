export default function HomeLoading(props) {
    if (props.authorize === true) {
        return (
            <div className="text-center w-full animate-bounce">
                <h2>
                    Loading ...
                </h2>
            </div>
        )
    } else {
        return (
            <div className="text-red-600 text-center w-full animate-pulse">
                <h2>
                    You Are Not Authorize 
                </h2>
                <h3>
                    Please Login First
                </h3>
            </div>
        )
    }
}