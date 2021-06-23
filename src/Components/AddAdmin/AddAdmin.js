import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Form } from 'react-bootstrap';
import Sidebar from './../Admin/Sidebar/Sidebar';
const AddAdmin = () => {
	const { register, handleSubmit} = useForm();
	const onSubmit = data => {
		const eventData = {
			email: data.email
		}
		fetch('http://localhost:5000/addAdmin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		})
	};

	return (
		<section className="container-fluid row">
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
				<h5 className="text-brand">Make Admin</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="formStyle">
					<Row>
						<Col>
							<Form.Label>Email</Form.Label>
							<input name="email" placeholder="Enter Email" className="form-control" ref={register} />
						</Col>
					</Row>
					<input type="submit" className="btn btn-primary mt-4 mr-5 float-right" />

				</form>
			</div>
		</section>
	);
};

export default AddAdmin;
