import Image from 'next/image'

export default function UpcomingOrder(props) {
    return (
        <div>
            <div className='flex'>
                <h3>
                    Burger king
                </h3>
                <p>
                    #1DF9OE
                </p>
            </div>
            <div className='flex'>
                <Image />
                <div>
                    <p>
                        Estimated arrival
                    </p>
                    <h1>
                        35 min
                    </h1>
                </div>
            <button>Track</button>
            </div>
        </div>
    )
}