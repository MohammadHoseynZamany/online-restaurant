export default function PreviousOrders(props) {
    return (
        <div>
            <div className="flex">
                <h2>
                    Pizza Hut
                </h2>
                <div>
                    <h3>
                        completed
                    </h3>
                </div>
            </div>
            <div className="flex">
                <div className="flex">
                    <logo />
                    <p>
                        september 16, 2020
                    </p>
                </div>
                <div className="flex">
                    <logo />
                    <p>
                        11:54 PM
                    </p>
                </div>
            </div>
            <div>
                <div className="flex">
                    <p>
                        1
                    </p>
                    <p>
                        Delicious Cheese Pie
                    </p>
                </div>
                <div className="flex">
                    <p>
                        1
                    </p>
                    <p>
                        Peperoni Pie
                    </p>
                </div>
            </div>
            <div className="flex">
                <button>Details</button>
                <button>Get help</button>
            </div>
        </div>
    )
}