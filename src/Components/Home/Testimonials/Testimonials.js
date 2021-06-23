import React, { useState } from 'react';
import './Testimonials.css';
import TestimonialDetail from './../TestimonialDetail/TestimonialDetail';
import { CardColumns } from 'react-bootstrap';
import Spinner from './../../Spinner/Spinner';
const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	fetch('https://polar-dusk-19888.herokuapp.com/reviews')
		.then(res => res.json())
		.then(data => {
			setReviews(data)
			setLoading(false)
		})
	return (
		<>
			{
				loading ? <Spinner></Spinner> :
					<section className="container-fluid my-5 py-5" style={{ color: '#F8F8F8', minHeight: '500px' }}>
						<div className="row text-center my-4">
							<div className="col-12">
								<h6 className="section-sub-title mb-20">Testimonials</h6>
								<h3 className="heading">Why do people praise about <span className="text-primary">TechGround?</span></h3>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<div className="row w-75">
								<CardColumns>
									{reviews.map(review => <TestimonialDetail review={review}></TestimonialDetail>)}
								</CardColumns>

							</div>
						</div>
					</section>
			}
		</>
	);
};

export default Testimonials;
