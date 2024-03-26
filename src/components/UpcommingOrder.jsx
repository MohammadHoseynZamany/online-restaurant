import Image from 'next/image'

export default function UpcomingOrder(props) {
    return (
        <div className='bg-violet-200 w-fit rounded-xl px-3 py-2 mx-3 my-5'>
            <div className='bg-violet-100 rounded-xl p-1'>
                <h2>
                Foods
            </h2>
            <div className='flex'>
                <h3>
                    {props.foods[0]}
                </h3>
                <h3>
                    {props.foods[0]}
                </h3>
            </div>
            </div>
            <div>
                <p>
                    Status: {props.is_completed ? "Completed" : (props.is_canceled ? "Canceled" : "Preparing")}
                </p>
            </div>
            <div>
                <p>
                    Data: {props.date}
                </p>
            </div>
            <div>
                <p>
                    Restaurant: {props.restaurant}
                </p>
            </div>
        </div>
    )
}