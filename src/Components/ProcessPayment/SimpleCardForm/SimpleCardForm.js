import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [errorPayment, setErrorPayment] = useState(null);
	const [successPayment, setSuccessPayment] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			setErrorPayment(error.message)
			setSuccessPayment(null)
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			setSuccessPayment(paymentMethod.id)
			setErrorPayment(null)
			handlePayment(paymentMethod.id)
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button type="submit" className="btn btn-primary mt-3" disabled={!stripe}>
					Pay
			</button>
			</form>
			{
				errorPayment && <p style={{ color: 'red' }}>{errorPayment}</p>
			}
			{
				successPayment && <p style={{ color: 'green' }}>Your payement was successful</p>
			}
		</div>
	);
};

export default SimpleCardForm;
