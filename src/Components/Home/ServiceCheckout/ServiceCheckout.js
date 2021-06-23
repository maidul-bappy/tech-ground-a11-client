import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import ProcessPayment from './../../ProcessPayment/ProcessPayment/ProcessPayment';
import Spinner from './../../Spinner/Spinner';

const ServiceCheckout = () => {
	const { serviceKey } = useParams()
	const [service, setService] = useState({});
	const { title, price } = service;
	const [getPayId, setGetPayId] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('https://polar-dusk-19888.herokuapp.com/services/'+serviceKey)
			.then(res => res.json())
			.then(data => {
				setService(data)
				setLoading(false)
			})
	}, [serviceKey])
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const handlePlaceOrder = () => {
		const orderDetails = {
			...loggedInUser, ...service, paymentId: getPayId, quantity: 1, status: 'Pending', orderTime: new Date()
		}
		fetch('https://polar-dusk-19888.herokuapp.com/addOrder', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(orderDetails)
		})
			.then(res => res.json())
			.then(data => {
				if (data) {
					alert('Your order placed successfully')
				}
			})
	}
	const handlePaymentProcess = paymentId => {
		setGetPayId(paymentId)
	}
	return (
		<>
			{
				loading ? <Spinner></Spinner> :
					<section className="container-fluid row">
						<Sidebar></Sidebar>
						<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
							<h2 className="mt-4">Checkout</h2>
							<Table striped bordered hover className="mt-4">
								<thead>
									<tr>
										<th>Service Name</th>
										<th>Quantity</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{title}</td>
										<td>1</td>
										<td>{price}</td>
									</tr>
								</tbody>
							</Table>
							<h4 className="my-4">Pay With</h4>
							<ProcessPayment handlePayment={handlePaymentProcess}></ProcessPayment>
							<button className="btn btn-primary float-right mt-5" onClick={handlePlaceOrder}>Checkout</button>
						</div>
					</section>
			}
		</>

	);
};

export default ServiceCheckout;
