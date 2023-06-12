import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import useTitle from "../../../../../hooks/useTitle";


const PaymentHistory = () => {
    useTitle('PaymentHitory')


    const [axiosSecure] = useAxiosSecure();
    const [payhistories, setPayhistory] = useState([]);

    useEffect(() => {
        axiosSecure
            .get('/paymenthistory')
            .then((res) => setPayhistory(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure])




    return (
        <div className="w-full ms-10 border rounded-lg p-5">
            <h1 className="font-semibold text-2xl ">Payment History</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Class Name</th>
                                <th>Total Price</th>
                                <th>PAYENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                               payhistories.map((payhistory, index) => (
                                    <tr key={payhistory._id}>
                                        <th>{index + 1}</th>
                                        <td>{payhistory.email}</td>
                                        <td>{payhistory.transactionId}</td>
                                        <td>{payhistory.className}</td>
                                        <td>{payhistory.class_price} $</td>
                                        <td>{payhistory.date}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;