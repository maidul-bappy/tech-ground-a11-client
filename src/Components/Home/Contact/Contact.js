import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<>
			<div id="fh5co-main">
				<div className="fh5co-narrow-content animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
					<div className="row text-center ">
						<div className="col-12">
							<h6 className="section-sub-title mb-20">Contact Us</h6>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-md-offset-1">
							<h3 className="heading">Get In Touch</h3>
						</div>

					</div>
					<br /><br />
					<form action="">
						<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Name" />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email" />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Phone" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
										</div>
										<div className="form-group">
											<input type="submit" className="btn btn-primary btn-md" value="Send Message" />
										</div>
									</div>

								</div>
							</div>

						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
