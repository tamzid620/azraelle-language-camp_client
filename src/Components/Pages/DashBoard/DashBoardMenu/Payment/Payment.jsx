import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectClass from "../../../../../hooks/useSelectClass";


const Payment = () => {

    const [selectClass] = useSelectClass()
    const total = selectClass.reduce((sum, selectClass) => sum + selectClass.class_price, 0);
    const class_price = parseFloat(total.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY);

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold ms-5"> Payment </h3>

            <Elements stripe={stripePromise}>
                <CheckOutForm class_price={class_price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;