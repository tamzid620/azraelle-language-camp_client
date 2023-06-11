import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectClass from "../../../../../hooks/useSelectClass";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY);

const Payment = () => {

const [selectClass] = useSelectClass()
const total = selectClass.reduce((sum, selectclass) => sum + selectclass.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold ms-5"> Payment </h3>

            <Elements stripe={stripePromise}>
                <CheckOutForm selectClass = {selectClass} price= {price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;