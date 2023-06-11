import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
    }

    return (
        <div >
            <form className="w-3xl ms-10 mt-10" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-green-300 btn-sm mt-6" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            <div className="mt-10">
            {cardError && <p className="text-red-600 font-semibold ms-10 text-2xl">ERROR: {cardError}</p>}
            </div>
        </div>
    );
};

export default CheckOutForm;