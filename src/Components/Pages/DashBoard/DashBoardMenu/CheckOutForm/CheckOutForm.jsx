import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useSelectClass from "../../../../../hooks/useSelectClass";


const CheckOutForm = ({class_price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext)
    const [selectClass] = useSelectClass()


    useEffect(() => {
        if (class_price > 0) {
            axiosSecure.post(`/create-payment-intent/${selectClass._id}` , { class_price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])
    

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
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                class_price,
                date: new Date(),
                quantity: selectClass.length,
                status: 'service pending',
                className: selectClass.map(selectClass => selectClass.class_image)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
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
        <button className="btn bg-green-300 btn-sm mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>

                <div className="mt-10">
                    {cardError && <p className="text-red-600 font-semibold ms-10 text-2xl">ERROR: {cardError}</p>}
                    {transactionId && <p className="text-green-500 font-semibold ms-10 text-2xl">SUCCESS: Transaction complete with transactionId: {transactionId}</p>}
                </div>
            </div>
        );
};

    export default CheckOutForm;