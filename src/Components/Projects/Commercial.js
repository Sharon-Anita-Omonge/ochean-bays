import React from "react";
import "./Commercial.css";
import nextred from "../../assets/nextred.png";
import { Link } from "react-router-dom";
import kenyagrace12 from "../../assets/kenyagrace12.jpg";
import kisumu from "../../assets/kisumu1.jpg";
import gabion from "../../assets/gabion.jpg";
import estate3 from "../../assets/estate3.jpg";
const Commercial = () => {
	return (
		<>
			<div className='commercial'>
				<h1>Commercial</h1>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/projects'>
					<p>Projects</p>
				</Link>
				<img src={nextred} alt='' />
				<p>Commercial</p>
			</div>
			<div className='container commercial-text'>
				<h2>Commercial</h2>
				<p>
					At Ochean Bays, we offer tailored expertise for commercial endeavors
					Ochean Bays Limited is a dynamic force in the commercial sector,
					providing specialized services across a spectrum of industries. Our
					portfolio is a testament to our versatility, featuring landmark
					projects that have become cornerstones of corporate, municipal, and
					real estate landscapes. These ventures not only reflect our technical
					prowess but also our commitment to invigorating the cities we touch.
				</p>
				<p>
					Discover the depth of our partnerships and the breadth of our
					capabilities as you peruse our project gallery, showcasing our
					dedication to excellence and the enduring bonds we've built within the
					real estate and corporate realms.
				</p>
			</div>
			<div>
				<div className='proj2 container'>
					<Link to='/dreamhome'>
						<div className='cont'>
							<img src={estate3} alt='' />
							<h4>Kitengela Dream Home</h4>
							<p>Kitengela, Kenya</p>
						</div>
					</Link>
					<Link to='/nationalhousing'>
						<div className='cont '>
							<img src={kisumu} alt='' />
							<h4>
								Tower Construction <br /> National Housing
							</h4>
							<p>Kisumu, Kenya</p>
						</div>
					</Link>
					<Link to='/kenyagrace'>
						<div className='cont'>
							<img src={kenyagrace12} alt='' />
							<h4>
								Kenya Grace <br /> Water Project
							</h4>
							<p>Kisumu, Kenya</p>
						</div>
					</Link>
					<Link to='/jocust'>
						<div className='cont'>
							<img src={gabion} alt='' />
							<h4>
								Gabion Construction <br /> JOCUST
							</h4>
							<p>Kisumu, Kenya</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Commercial;
