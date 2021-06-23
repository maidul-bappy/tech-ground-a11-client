import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
	const containerStyle = {
		backgroundColor: "#F4FDFB",
		border: '1px solid red'
	}
	return (
		<section>
			<div style={containerStyle} className="row">
				<div className="col-md-6 col-sm-6 col-12">
					<Sidebar></Sidebar>
				</div>

				<div className="col-md-10 col-sm-12 col-12">

				</div>
			</div>
		</section>
	);
};

export default Admin;
