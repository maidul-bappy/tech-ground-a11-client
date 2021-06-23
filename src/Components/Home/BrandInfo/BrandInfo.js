import React from 'react';
import './BrandInfo.css';
import b1 from '../../../images/brand-logo-1.png';
import b2 from '../../../images/brand-logo-2.png';
import b3 from '../../../images/brand-logo-3.png';
import b4 from '../../../images/brand-logo-4.png';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const BrandInfo = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
	return (
		<section className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '200px' }} >
			<div className="brand-info row w-75">
				<div className="col-md-3 col-6 mt-4 mt-md-0">
					<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<img src={b1} className="img-fluid" alt="" />
					</animated.div>
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
				<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<img src={b2} className="img-fluid" alt="" />
					</animated.div>
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
				<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<img src={b3} className="img-fluid" alt="" />
					</animated.div>
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
				<animated.div
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
					>
						<img src={b4} className="img-fluid" alt="" />
					</animated.div>
				</div>
			</div>
		</section>
	);
};

export default BrandInfo;
