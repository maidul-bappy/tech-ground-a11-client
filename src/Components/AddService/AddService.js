import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Form } from 'react-bootstrap';
import Sidebar from './../Admin/Sidebar/Sidebar';
import { UserContext } from './../../App';
const axios = require('axios');

const AddService = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const { register, handleSubmit} = useForm();
	const [imageUrl, setImageUrl] = useState(null)
	const onSubmit = data => {
		const eventData = {
			title: data.title,
			price: data.price,
			description: data.description,
			imageUrl: imageUrl,
			name: loggedInUser.name,
			email:loggedInUser.email
		}
		fetch('https://polar-dusk-19888.herokuapp.com/addService', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		})
		.then(res=>console.log('server side respons', res))
	};
	const handleImageChange = (e) => {
		const imageData = new FormData();
		imageData.set('key', 'e0a26cfac748512401ad02aa421e485f')
		imageData.append('image', e.target.files[0])

		axios.post('https://api.imgbb.com/1/upload', imageData)
			.then(function (response) {
				setImageUrl(response.data.data.display_url)
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	return (
		<section className="container-fluid row">
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
				<h5 className="text-brand">Add a Service</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="formStyle">
					<Row>
						<Col>
							<Form.Label>Service Title</Form.Label>
							<input name="title" placeholder="Enter Title" className="form-control" ref={register} />
						</Col>
						<Col>
							<Form.Label>Description</Form.Label>
							<input name="description" placeholder="Enter Description" className="form-control" ref={register} />
						</Col>
					</Row>
					<Row className="mt-3">
						<Col>
							<Form.Label>Price</Form.Label>
							<input name="price" placeholder="Enter Price" className="form-control" ref={register} />
						</Col>
						<Col>
							<Form.Label>Add Image</Form.Label>
							<input name="image" type="file" onChange={handleImageChange} className="form-control" ref={register} />
						</Col>

					</Row>
					<input type="submit" className="btn btn-primary mt-4 mr-5 float-right" />
				</form>
			</div>
		</section>
	);
};

export default AddService;
