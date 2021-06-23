import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IvnJYKppKgGg7WfI7YFMY12ibla9OVQy2mAZe6y8NSItfz0xIVMaATk7aZT8Y9ahnNf5o3vJ7FWgV5iyoJIJfsL002cL8chid');

const ProcessPayment = ({handlePayment}) => {
	return (
		<>
			<Elements stripe={stripePromise}>
				<SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
			</Elements>
		</>
	);
};

export default ProcessPayment;
