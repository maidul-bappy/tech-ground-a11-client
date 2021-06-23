import React from 'react';
import './Blogs.css';
import b1 from '../../../images/b1.jpg';
import b2 from '../../../images/b2.jpg';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Blogs = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
	return (
		<section className="container blogs-area">
			<div className="row ">
				<div className="col-md-4 d-flex justify-content-center align-items-center">
					<div>
						<h6 className="section-sub-title mb-20">BLOGS AND NEWS</h6>
						<h3 className="heading">Interesting articles  <br /> <span className="text-primary">updated daily</span> </h3>
					</div>
				</div>

				<div className="col-md-4 d-flex justify-content-center align-items-center">
					<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
							<Card.Img variant="top" src={b1} />
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted"> February 28, 2019</Card.Subtitle>
								<Card.Title>5 Ways Technology Has Improved Business Today</Card.Title>
								<Card.Text>
									They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. …
   							 </Card.Text>
								<Button variant="primary" className="btnStyle">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
							</Card.Body>
						</Card>
					</animated.div>
				</div>


				<div className="col-md-4 d-flex justify-content-center align-items-center">
					<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
							<Card.Img variant="top" src={b2} />
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted"> February 28, 2019</Card.Subtitle>
								<Card.Title>How Wireless Technology is Changing Business</Card.Title>
								<Card.Text>
									It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption. …
   							 </Card.Text>
								<Button variant="primary" className="btnStyle">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
							</Card.Body>
						</Card>
					</animated.div>
				</div>

			</div>

		</section>
	);
};

export default Blogs;
