import "./About.css";
import React, { useState } from "react";
import nextred from "../../assets/nextred.png";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import objectives from "../../assets/objectives.png";
import values from "../../assets/values.png";
import kenyagrace14 from "../../assets/kenyagrace14.jpg";
import inclusion from "../../assets/inclusion.jpeg";
import { Link, NavLink } from "react-router-dom";
import AGPO from "../../assets/AGPO.jpg";
import incorporation from "../../assets/certincorporation.jpg";
import certkra from "../../assets/certkra.jpg";
import certprofile from "../../assets/certprofile.jpg";
import certtaxcompliance from "../../assets/certtaxcompliance.jpg";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import clean from "../../assets/prodclean.jpg";

const About = () => {
	const projects = [
		{
			name: "Our Accredentials & Incorporation",
			images: [certkra, certprofile, certtaxcompliance, incorporation, AGPO],
		},
	];
	const [modalOpen, setModalOpen] = useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const openModal = (projectIndex, imageIndex) => {
		setCurrentProjectIndex(projectIndex);
		setCurrentImageIndex(imageIndex);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const goToPrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0
				? projects[currentProjectIndex].images.length - 1
				: prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === projects[currentProjectIndex].images.length - 1
				? 0
				: prevIndex + 1
		);
	};
	return (
		<div className='main-about' style={{ overflowX: "hidden" }}>
			<div className='hero-container container '>
				<div className='hero-text '>
					<h1 className='hero-heading'>
						About <span className='highlighted'>Ochean Bays Limited</span>{" "}
						History
					</h1>
					<p className='hero-subheading'>
						Established in 2017 and duly registered with the Registrar of
						Companies under Kenyan law, we proudly identify as an indigenous
						company specializing in water works, cleaning services, building
						construction, and road infrastructure development.
					</p>
					<div className='hero-buttons'>
						<Link to='/contact'>
							{" "}
							<button className='hero-btn order-btn'>Contact Us</button>{" "}
						</Link>
					</div>
				</div>
				<div className='heroo-image'>
					<img src={clean} alt='Professional team' />
				</div>
			</div>

			<div className='next'>
				<NavLink to='/'>
					<p>Home</p>
				</NavLink>
				<img src={nextred} alt='' />
				<p>About</p>
			</div>
			<div className='about container'>
				<h2>Who Are We</h2>

				<p>
					We hold accreditation from key regulatory bodies such as the National
					Construction Authority (NCA), National Environmental Management
					Authority (NEMA), and Water Resources Management Authority (WRA)
					across various classes. This recognition underscores our compliance
					with industry regulations and standards.{" "}
				</p>
				<p>
					{" "}
					Over the years, we have honed our expertise across diverse technical
					domains within the Civil Engineering Industry, demonstrating proven
					capabilities in delivering successful projects.
				</p>
				<p>
					{" "}
					Our approach is rooted in a stringent quality assurance system,
					ensuring that our workmanship consistently meets and exceeds industry
					benchmarks. By prioritizing quality and durability, we strive to not
					only meet but surpass client expectations, delivering projects that
					endure and contribute positively to communities and environments.
				</p>
			</div>
			<h2> What Drives Us?</h2>
			<div className='content container '>
				<div className='abt'>
					{" "}
					<img src={vision} alt='' className='icons' />
					<div>
						<h3 id='vision'>Our Vision</h3>
						<p>
							Committed to providing the best possible construction expertise &
							service to ensure cost effective and successful projects.{" "}
						</p>
					</div>
				</div>

				<div className='abt'>
					{" "}
					<img src={mission} alt='' className='icons' />
					<div>
						<h3 id='mission'>Our Mission</h3>
						<p>
							To provide customers with consistent quality on-time building and
							construction services.
						</p>
					</div>
				</div>
				<div className='abt'>
					<img src={objectives} alt='' className='icons' />
					<div>
						<h3 id='objectives'>Our Objectives</h3>
						<p>
							Enhance shareholder value with consistent market returns and
							sustainable growth in business.
						</p>
						<p>
							Ensure efficiency and sustainability by benchmarking operations
							and services with the best industry supplies.{" "}
						</p>
						<p>
							To become an employer of choice, ensuring productive and motivated
							staff through targeted selection, recruitment, training
							remuneration and caring for our employees.
						</p>
					</div>
				</div>

				<div className='abt'>
					<img src={values} alt='' className='icons' />
					<div>
						<h3 id='core-values'>Core Values</h3>
						<h4>Professionalism</h4>
						<p>To uphold the highest standards in works.</p>
						<p>To devote all our time to our duties to provide services.</p>
						<h4>Human Resource</h4>
						<p>
							To continually develop and build the capacity of our Staff to
							ensure quality service to our customers.
						</p>
						<h4>Team Work</h4>
						<p>
							To promote team spirit, collaboration and consultation to maximize
							synergy of working together in-service delivery.
						</p>
						<h4>Integrity</h4>
						<p>
							To be accountable and transparent in the delivery of our services
							To discourage all corrupt practices.
						</p>
					</div>
				</div>
			</div>

			<h2 style={{ marginTop: "5%" }}>A CULTURE OF CARING</h2>
			<div className=' inclusion container  '>
				<div className='comm'>
					<div className='image-container'>
						<img src={inclusion} alt='' className='comm-img' />
					</div>
					<div className='text-container'>
						<h3> We Encourage Inclusion</h3>
						<p className='right'>
							Our company proudly upholds inclusivity, adhering to the 2010
							constitution's 2/3 gender rule. We foster an environment where
							women and minorities are empowered, valued, and provided equal
							opportunities for growth and leadership. Diversity is not just a
							goal but a cornerstone of our ethos, driving innovation and
							excellence in all aspects of our organization.
						</p>
					</div>
				</div>
				<div className='comm'>
					<div className='text-container'>
						<h3>Pillar of the Community</h3>
						<p className='left'>
							The influence of Ochean Bays Investment Limited reaches far beyond
							the structures we erect. We're deeply dedicated to the cities and
							towns we call home, driven by a fervent commitment to service. Our
							team actively seeks out charitable ventures, volunteers with
							organizations, and engages in community outreach initiatives aimed
							at enhancing the well-being of others. Through our program, we
							champion these endeavors, providing support through hands-on
							service, in-kind contributions, and corporate funding.
						</p>
					</div>
					<div className='image-container'>
						<img src={kenyagrace14} alt='' className='comm-img' />
					</div>
				</div>
			</div>

			<div className='container about-gallery'>
				{projects.map((project, projectIndex) => (
					<div key={projectIndex}>
						<h3 className='galleryh3'>{project.name}</h3>
						<div className=' gallery'>
							{project.images.map((image, imageIndex) => (
								<img
									key={imageIndex}
									src={image}
									alt=''
									onClick={() => openModal(projectIndex, imageIndex)}
									className='thumbnail'
								/>
							))}
						</div>
					</div>
				))}
			</div>

			{modalOpen && (
				<div className='modal'>
					<span className='close' onClick={closeModal}>
						&times;
					</span>
					<div className='prv'>
						<button onClick={goToPrevious}>
							<img src={left} alt='' />
						</button>
					</div>
					<div className='nxt'>
						<button onClick={goToNext}>
							<img src={right} alt='' />
						</button>
					</div>

					<img
						src={projects[currentProjectIndex].images[currentImageIndex]}
						alt=''
						className='modal-content'
					/>
				</div>
			)}
		</div>
	);
};

export default About;
