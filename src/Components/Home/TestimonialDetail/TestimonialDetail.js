import React from 'react';
import OwlCarouselContainer from './../OwlCarouselContainer/OwlCarouselContainer';

const TestimonialDetail = ({ review }) => {
	return (
		
		<div className="gtco-testimonials">
			<div className="owl-carousel owl-carousel1 owl-theme">
				<OwlCarouselContainer review={review}></OwlCarouselContainer>
			</div>
		</div>
	);
};

export default TestimonialDetail;
