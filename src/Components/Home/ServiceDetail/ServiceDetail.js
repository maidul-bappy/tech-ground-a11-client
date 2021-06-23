import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = ({ service }) => {
	const { imageUrl, title, description, price, _id } = service;
	const history = useHistory();
	const handleBuyService = (id) => {
		const service = `/service/${id}`
		history.push(service)
	}
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
	return (
		<animated.div
			onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.interpolate(trans) }}
		>
			<Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
				<Card.Img variant="top" src={imageUrl} style={{ width: '50%', margin: '0 auto' }} />
				<Card.Body>
					<Card.Title>{title} </Card.Title>
					<Card.Title>${price} </Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
				</Card.Body>
				<Button variant="primary m-3" onClick={() => handleBuyService(_id)}>Buy Now</Button>
			</Card>
		</animated.div>
	);
};

export default ServiceDetail;



