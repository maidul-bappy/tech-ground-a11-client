import React from 'react';
import Header from '../Header/Header';
import BrandInfo from './../BrandInfo/BrandInfo';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import Footer from './../../Shared/Footer/Footer';
import Contact from './../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<BrandInfo></BrandInfo>
			<Services/>
			<Testimonials></Testimonials>
			<Blogs></Blogs>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;
