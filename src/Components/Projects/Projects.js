import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import government from "../../assets/government.jpg";
import commercial from "../../assets/commercial.jpg";
import nextred from "../../assets/nextred.png";
import proj from "../../assets/kisima.webp";

const Projects = () => {
	return (
		<>
			<div className='hero-container container '>
				<div className='hero-text '>
					<h1 className='hero-heading'>
						Offering <span className='highlighted'>Skilled Workforce</span> For
						Your Projects
					</h1>
					<p className='hero-subheading'>
						We take pride in our ability to adapt our skilled workforce to meet
						the unique demands of each endeavor, whether it’s delivering
						essential infrastructure solutions, executing meticulous
						maintenance, or managing complex water projects.
					</p>
					<div className='hero-buttons'>
						<Link to='/contact'>
							{" "}
							<button className='hero-btn order-btn'>Contact Us</button>{" "}
						</Link>
					</div>
				</div>
				<div className='heroo-image'>
					<img src={proj} alt='Professional team' />
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
					Our seasoned team excels in{" "}
					<span style={{ fontWeight: "600" }}>
						water works, cleaning services, building construction, and road
						infrastructure development,
					</span>
					ensuring a comprehensive and tailored approach to every project. We
					take pride in our ability to adapt our skilled workforce to meet the
					unique demands of each endeavor, whether it’s delivering essential
					infrastructure solutions, executing meticulous maintenance, or
					managing complex water projects.
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
