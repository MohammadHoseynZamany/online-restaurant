import PreviousOrders from "./PreviousOrders";
import UpcomingOrder from "./UpcommingOrder";

export default function Orders() {
    return (
        <div>
            <div>
                <div>
                    <h2>
                        Upcoming orders
                    </h2>
                </div>
                <div>
                    <UpcomingOrder />
                </div>
                <div>
                    <UpcomingOrder />
                </div>
            </div>
            <div>
                <div>
                    <h2>
                        Previous orders
                    </h2>
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
                <div>
                    <PreviousOrders />
                </div>
            </div>
        </div>
    )
}