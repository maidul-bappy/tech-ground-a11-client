import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import { Table } from 'react-bootstrap';
import Spinner from './../../Spinner/Spinner';

const OrderItem = () => {
	const [orderItems, setOrderItems] = useState([]);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('https://polar-dusk-19888.herokuapp.com/orderItems?email=' + loggedInUser.email)
			.then(res => res.json())
			.then(data => {
				setOrderItems(data)
				setLoading(false)
			})
	})
	return (
		<>
			{
				loading ? <Spinner></Spinner> :
					<section className="container-fluid row">
						<Sidebar></Sidebar>
						<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
							<h5 className="text-brand float-left">You have Orderd: {orderItems.length}</h5>
							<h5 className="float-right">{loggedInUser.name}</h5>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Email</th>
										<th>Service</th>
										<th>Price</th>
										<th>Pay With</th>
										<th>Status</th>
									</tr>
								</thead>
								{orderItems.map(orderItem => <tbody>
									<tr>
										<td>{orderItem.email}</td>
										<td>{orderItem.title}</td>
										<td>${orderItem.price}</td>
										<td>Credit Card</td>
										<td>{orderItem.status}</td>
									</tr>
								</tbody>)}
							</Table>
						</div>
					</section>
			}
		</>
	);
};

export default OrderItem;
