import React from "react";
import "./Projects.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import government from "../../assets/government.jpg";
import commercial from "../../assets/commercial.jpg";
import nextred from "../../assets/nextred.png";
import paint from "../../assets/indupaiting4.jpeg";
import clean from "../../assets/clean3.webp";
import culvert from "../../assets/culvertpic.jpg";
import borehole from "../../assets/boreholestudent.jpeg";

const Projects = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		centerMode: false,
		centerPadding: "0px",
	};
	const images = [borehole, paint, culvert, clean];
	return (
		<>
			<div className='hero-slider'>
				<div className='about-hero'>
					<h1 className='about-title container'>OUR PROJECTS</h1>
					<div className='overlay'></div>
					<Slider {...settings} style={{ overflowX: "hidden" }}>
						{images.map((image, index) => (
							<div key={index}>
								<img
									src={image}
									alt={`Slide ${index}`}
									className='about-image'
								/>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/projects'>
					<p>Projects</p>
				</Link>
			</div>
			<div className='container projects-text'>
				<h2>Projects</h2>
				<p>
					Ochean Bays Limited stands as a beacon of multifaceted expertise,
					offering a suite of services that extend far beyond construction. Our
					seasoned team excels in{" "}
					<span style={{ fontWeight: "600" }}>
						water works, cleaning services, building construction, and road
						infrastructure development
					</span>
					, ensuring a comprehensive approach to every project. We pride
					ourselves on our ability to adapt our skilled workforce to meet the
					unique demands of each endeavor, whether it's a major construction
					project, a meticulous renovation, or a critical infrastructure
					development.
				</p>
				<p>
					Our unwavering commitment to quality and client satisfaction has
					cemented long-standing partnerships, with many exceeding five years
					and featuring a variety of successful ventures. At Ochean Bays
					Limited, we don't just build — we enhance, we serve, and we innovate,
					delivering excellence across all facets of our work to create lasting
					value for our clients and communities.
				</p>
				<div className='intro container'>
					<div className='proj-container flex-item'>
						<Link to='/commercial'>
							<h3>Commercial</h3>
							<img src={commercial} alt='' id='img' className='intro-left' />
						</Link>
					</div>
					<div className='proj-container flex-item'>
						<Link to='/government'>
							<h3>Government</h3>
							<img src={government} alt='' id='img' className='intro-left' />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
