import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Form } from 'react-bootstrap';
import Sidebar from '../Admin/Sidebar/Sidebar';
const axios = require('axios');

const AddReview = () => {
	const { register, handleSubmit} = useForm();
	const [imageUrl, setImage] = useState(null)
	const onSubmit = data => {
		const eventData = {
			name: data.name,
			designation: data.designation,
			description: data.description,
			imageUrl:imageUrl
		}
		fetch('https://polar-dusk-19888.herokuapp.com/addReview', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		})
	};
	const handleImageChange = (e) => {
		const imageData = new FormData();
		imageData.set('key', 'e0a26cfac748512401ad02aa421e485f')
		imageData.append('image', e.target.files[0])

		axios.post('https://api.imgbb.com/1/upload', imageData)
			.then(function (response) {
				setImage(response.data.data.display_url)
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	return (
		<section className="container-fluid row">
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
				<h5 className="text-brand">Add a Review</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="formStyle">
					<Row className="w-50 mt-3">
						<Col>
							<Form.Label>Your Name</Form.Label>
							<input name="name" placeholder="Enter Name" className="form-control" ref={register} />
						</Col>
					</Row>
					<Row className="w-50 mt-3">
						<Col>
							<Form.Label>Designation </Form.Label>
							<input name="designation" placeholder="Enter Designation" className="form-control" ref={register} />
						</Col>
					</Row>
					<Row className="w-50 mt-3">
						<Col>
							<Form.Label>Description</Form.Label>
							<input name="description" placeholder="Comment here" className="form-control" ref={register} />
						</Col>
						<Col>
							<Form.Label>Add Image</Form.Label>
							<input name="image" type="file" onChange={handleImageChange} className="form-control" ref={register} />
						</Col>
					</Row>
					<input type="submit" className="btn btn-primary mt-4 mr-5 float-left" />
				</form>
			</div>
		</section>
	);
};

export default AddReview;
