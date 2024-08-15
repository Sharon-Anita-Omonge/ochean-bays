import React from "react";
import "./HeroSection.css";
import collage from "../../assets/photo-collage.png.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className='hero-container '>
			<div className='hero-text '>
				<h1 className='hero-heading'>
					Your <span className='highlighted'>Trusted Partner</span> in Diverse
					Solutions
				</h1>
				<p className='hero-subheading'>
					Experience top-quality and cost-effective services with Ochean Bays
					Limited, where expert cleaning, construction, borehole drilling, and
					premium paint supply come together to meet your every need.
				</p>
				<div className='hero-buttons'>
					<Link to='/contact'>
						{" "}
						<button className='hero-btn order-btn'>Contact Us</button>{" "}
					</Link>
					<Link to='/about'>
						<button className='hero-btn quote-btn'>Learn More</button>{" "}
					</Link>
				</div>
			</div>
			<div className='hero-image'>
				<img src={collage} alt='Professional team' />
			</div>
		</div>
	);
};

export default HeroSection;
