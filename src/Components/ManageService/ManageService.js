import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Sidebar from '../Admin/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Spinner from './../Spinner/Spinner';

const ManageService = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('https://polar-dusk-19888.herokuapp.com/services')
			.then(res => res.json())
			.then(data => {
				setServices(data)
				setLoading(false)
			})
	}, [])
	const deleteService = (id, event) => {
		fetch(`https://polar-dusk-19888.herokuapp.com/delete/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(result => {
				console.log('deleted successfully', result);
				if (result) {
					event.target.parentNode.style.display = 'none';
				}
			})
			.catch(err => {
				console.log("404!!");
			})
	}
	return (
		<>
			{
				loading ? <Spinner></Spinner> :
					<section className="container-fluid row">
						<Sidebar></Sidebar>
						<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
							<h5 className="text-brand">Services</h5>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Service Name</th>
										<th>Price</th>
										<th>Email</th>
										<th>Action</th>
									</tr>
								</thead>
								{
									services.map(service => <tbody>
										<tr>
											<td>{service.title}</td>
											<td>{service.price}</td>
											<td>{service.email}</td>
											<td> <Button variant="danger" onClick={() => deleteService(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
										</tr>
									</tbody>)
								}
							</Table>
						</div>
					</section>
			}
		</>

	);
};

export default ManageService;
