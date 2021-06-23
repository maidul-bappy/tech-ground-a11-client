import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from './../../Admin/Sidebar/Sidebar';
import Spinner from './../../Spinner/Spinner';

const Orders = () => {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('http://localhost:5000/orders')
			.then(res => res.json())
			.then(data => {
				setOrders(data)
				setLoading(false)
			})
	}, [])

	const handleStatusChange = (value, id) => {
		const status = {
			value: value,
			_id: id
		}
		fetch(`http://localhost:5000/update/${status._id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(status),
		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
	}
	return (
		<>
			{
				loading ? <Spinner></Spinner> :
					<section className="container-fluid row">
						<Sidebar></Sidebar>
						<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
							<h5 className="text-brand">Orders</h5>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Service</th>
										<th>Price</th>
										<th>Pay With</th>
										<th>Status</th>
									</tr>
								</thead>
								{orders.map(order => <tbody>
									<tr>
										<td>{order.name}</td>
										<td>{order.email}</td>
										<td>{order.title}</td>
										<td>${order.price}</td>
										<td>Credit Card</td>
										<td>
											<button className="btn btn-primary ml-1" onClick={() => handleStatusChange("Pending", order._id)}>Pending</button>
											<button className="btn btn-primary ml-1" onClick={() => handleStatusChange("Ongoing", order._id)}>Ongoing</button>
											<button className="btn btn-primary ml-1" onClick={() => handleStatusChange("Done", order._id)}>Done</button>
										</td>
									</tr>
								</tbody>)}
							</Table>
						</div>
					</section>
			}
		</>
	);
};

export default Orders;


{/* <button type="button" name="on-going" onClick={() => handleStatusChange(order._id)}>On Going</button>
								<button type="button" name="pending" onClick={() => handleStatusChange(order._id)}>Pending</button>
								<button type="button" name="done" onClick={() => handleStatusChange(order._id)}>Done</button> */}
