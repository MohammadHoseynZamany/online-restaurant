import Image from "next/image"

export default function MyCart() {
    return (
        <div>
            <div className="flex">
                <div className="flex">
                    <h1>
                        My cart
                    </h1>
                    <p>
                        (2 items)
                    </p>
                </div>
                <logo />
            </div>
            <div>
                <p className="text-red-600">
                    DELIVER TO
                </p>
                <p>
                    300 Post Street San Francisco, CA
                </p>
            </div>
            <div>
                <h2>
                    Pizza Hut
                </h2>
                <div>
                    <Image /> 
                    <p>
                        1 x
                    </p>
                </div>
            </div>
        </div>
    )
}