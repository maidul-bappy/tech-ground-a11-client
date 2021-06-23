import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faGripHorizontal, faUserPlus, faPlus,} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                {isAdmin &&
                    <div>
                        <h6 className="text-muted">Admin Section</h6>
                        <li>
                            <Link to="/orders" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Orders List (ALL)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageServices" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /><span>Manage Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </div>}
                    <div>
                        <h6 className="text-muted">Customer Section</h6>
                        <li>
                            <Link to="/orderItems" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order Item</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>


            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link> <br/>
                <Link to="/" className="text-white mt-2"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
