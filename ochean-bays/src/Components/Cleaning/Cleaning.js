import React, { useState } from "react";
import "./Cleaning.css";
import nextred from "../../assets/nextred.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usafi4 from "../../assets/usafiofisi.jpeg";
import usafi3 from "../../assets/usafi3.jpeg";
import usafi2 from "../../assets/usafi2.jpeg";
import usafi1 from "../../assets/usafi1.jpeg";
import residential from "../../assets/residential.png";
import window from "../../assets/window.jpeg";
import realestate from "../../assets/nyumba.jpeg";
import { Link } from "react-router-dom";
import cost from "../../assets/cost.png";
import expert from "../../assets/expert.png";
import custom from "../../assets/custom.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";

const Cleaning = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		customPaging: (i) => (
			<button style={{ backgroundColor: "#23dede;" }}> {i + 1} </button>
		),
	};
	const [modalOpen, setModalOpen] = useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const projects = [{ name: "Our Team", images: [usafi1, usafi3, usafi2] }];

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
		<div className='cl' style={{ overflowX: "hidden" }}>
			<div className='cleaning'>
				<div className='hero-cleaning container'>
					<h4>We Are Ochean Bays</h4>
					<h1>
						We lead cleaning <br /> Industry
					</h1>
					<p>
						We epitomize industry leadership, setting the gold standard in
						cleaning. Our innovative methods and commitment to excellence ensure
						a spotless, superior environment for every client.
					</p>
				</div>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/services'>
					<p>Services</p>
				</Link>
				<img src={nextred} alt='' />
				<p>Cleaning Services</p>
			</div>
			<div className='cleaning-about container'>
				<div style={{ marginTop: "5%" }}>
					<h2>We Make Places Clean & Bright </h2>
					<p>
						Ochean Bays Investment Limited is a dynamic team of cleaning
						professionals committed to creating welcoming, lively spaces for
						daily activities. Our goal is to tailor our cleaning services to
						your specific requirements, aiming to surpass your expectations.
						With a foundation of strong ethics, integrity, and transparency, we
						strive to deliver an unparalleled cleaning experience, upholding the
						highest service quality.
						<br />
						We are dedicated to ongoing enhancement of our procedures and the
						pursuit of inventive approaches to offer superior service to our
						clients, collaborators, and staff. Transform your space with our
						exceptional cleaning service. Schedule your free estimate now.
					</p>
				</div>
			</div>
			<div className='slider-container'>
				<h2 style={{ marginTop: "5%" }} className='container'>
					What do we do?
				</h2>
				<Slider
					{...settings}
					className='cleaning-slider container'
					style={{ overflowX: "hidden" }}
				>
					<div className='cleaning-services'>
						<div className='cleaning-pic flex-items'>
							<img src={usafi4} alt='' />
						</div>
						<div className='service-des flex-items'>
							<h3>Commercial</h3>
							<p>
								Ochean Bays Investment Limited excels in commercial cleaning,
								ensuring spotless offices that mirror your commitment to
								quality. Tailored solutions promote well-being and efficiency,
								making your workspace a testament to your brand's excellence.{" "}
								<br /> Our service is your peace of mind, maintaining a standard
								of cleanliness that speaks volumes.
							</p>
						</div>
					</div>
					<div className='cleaning-services flex-items'>
						<div className='cleaning-pic'>
							<img src={residential} alt='' />
						</div>
						<div className='service-des flex-items'>
							<h3>Residential</h3>
							<p>
								For Ochean Bays Investment Limited, home cleaning is our
								passion. No task is too great, from laundry to windows, we
								handle it all with care. We're here to manage every aspect of
								your home's cleanliness, ensuring you return to a space that's
								immaculate and welcoming.
								<br /> Let us transform your home into a sanctuary of freshness
								and order.
							</p>
						</div>
					</div>
					<div className='cleaning-services'>
						<div className='cleaning-pic flex-items'>
							<img src={realestate} alt='' />
						</div>
						<div className='service-des flex-items'>
							<h3>Real Estate</h3>
							<p>
								We enhance property allure, boosting value with professional
								cleaning. A spotless home not only sells swiftly but also
								captivates buyers with its inviting ambiance. We ensure your
								house feels like a home, meeting the high expectations of
								prospective residents desiring an organized, decluttered, and
								clean space.
								<br />
								Our meticulous checklist guarantees a comprehensive clean,
								saving you time, money, and effort.
							</p>
						</div>
					</div>
					<div style={{ marginTop: "5%" }} className='cleaning-services'>
						<div className='cleaning-pic flex-items'>
							<img src={window} alt='' className='window' />
						</div>
						<div className='service-des flex-items'>
							<h3>Windows</h3>
							<p>
								Clean windows transform spaces, offering an airy ambiance that
								uplifts. They reflect a business’s meticulous care. Our advanced
								cleaning, using the right chemicals and techniques, ensures
								gleaming windows. Trusting our professional service prevents
								damage and injury, maintaining your windows’ pristine condition.
							</p>
						</div>
					</div>
				</Slider>
				<Link to='/contact'>
					<button style={{ marginLeft: "7%" }} className='btn' role='link'>
						Contact Us
					</button>
				</Link>
			</div>
			<h2 style={{ marginTop: "5%" }}>How It Works</h2>
			<div className='action container'>
				<div>
					<h3>STEP 01</h3>
					<p> Choose your service</p>
				</div>
				<div>
					<h3>STEP 02</h3>
					<p>Select your clean date </p>
				</div>
				<div>
					<h3>STEP 03</h3>
					<p>Cleaning Process</p>
				</div>
				<div>
					<h3>STEP 04</h3>
					<p>Confirm & pay</p>
				</div>
			</div>
			<div>
				<h5 style={{ marginTop: "5%" }}>Why Choose Us</h5>
				<h2>
					The Expertise You <br />
					Can Trust
				</h2>
				<div className='container expertise-container'>
					<div>
						<div className='expertise'>
							<img src={expert} alt='' />
							<p>
								<h3>Professional Excellence</h3>
								Our commitment to professional standards ensures pristine
								cleaning results. With meticulous attention to detail and
								industry expertise, we deliver exceptional service that reflects
								our dedication to excellence.
							</p>
						</div>
						<div className='expertise'>
							<img src={custom} alt='' />
							<p>
								<h3>Customized Solutions</h3>
								We understand that every space is unique, which is why we offer
								tailored cleaning solutions. Whether it's a residential home or
								a commercial establishment, our customized approach guarantees
								satisfaction.
							</p>
						</div>
						<div className='expertise'>
							<img src={cost} alt='' />
							<p>
								<h3>Affordable Pricing</h3>
								Our transparent pricing model ensures affordability without
								compromising on quality. From small businesses to large estates,
								we provide cost-effective solutions that meet your budgetary
								needs.
							</p>
						</div>
						<div className='expertise client-list'>
							<p>
								Our esteemed clientele, including{" "}
								<span style={{ fontSize: "16px", fontWeight: "600" }}>
									{" "}
									Nyaku House, Halingham Plaza, Bandari Plaza, Bellevue Estate,
									Bandari 2 Estate, Canon House, Rex Plaza, and Pandya Estate,{" "}
								</span>
								speaks volumes about the quality and reliability of our
								services.
							</p>
						</div>
					</div>
					<div className=' expertise-empty'></div>
				</div>
			</div>
			<div className='gallery cleaning-gallery container'>
				{projects.map((project, projectIndex) => (
					<div key={projectIndex}>
						<h2>{project.name}</h2>
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

export default Cleaning;
