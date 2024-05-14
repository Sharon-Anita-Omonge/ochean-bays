import React from "react";
import "./Services.css";
import Slider from "react-slick";
import pic11 from "../../assets/pic11.jpg";
import general from "../../assets/culvertpic1.jpg";
import kisima from "../../assets/kisima.webp";
import realestate from "../../assets/nyumba.jpeg";
import earthwork from "../../assets/earthworks.jpg";
import nextred from "../../assets/nextred.png";
import safety from "../../assets/safety.jpeg";
import quality from "../../assets/qual.jpg";
import cleaning from "../../assets/usafi3.jpeg";
import { Link } from "react-router-dom";
import paint from "../../assets/indupaiting.jpg";
import serv from "../../assets/heroserv.jpeg";
import ind from "../../assets/clean7.jpg";
import culvert from "../../assets/culvert4.jpeg";
import paintimage from "../../assets/paintimage2.jpeg";

const Services = () => {
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

	const images = [paint, serv, ind, culvert];
	return (
		<div className='main-service'>
			<div className='hero-slider'>
				<div className='about-hero'>
					<h1 className='about-title container'>OUR SERVICES</h1>
					<div className='overlay'></div>
					<Slider {...settings} tyle={{ overflowX: "hidden" }}>
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
				<Link to='/services'>
					<p>Services</p>
				</Link>
			</div>
			<div className='container' style={{ marginTop: "3%" }}>
				<h2>Service with Purpose</h2>
				<p>
					At Ochean Bays Limited Company, our vision extends beyond mere
					construction; we are dedicated to building with intention and
					diversity in our services. Our expertise encompasses a broad spectrum
					of offerings, including{" "}
					<span style={{ fontWeight: "600" }}>
						water works, cleaning services, building construction, and road
						infrastructure development.
					</span>{" "}
					We are not just about erecting structures; we are about creating
					multifaceted spaces that fulfill a greater mission. Driven by a
					commitment to excellence, innovation, and sustainability, we take
					pride in every project we undertake.
				</p>
				<p>
					From constructing eco-friendly buildings to developing robust road
					networks, from ensuring clean water supply to maintaining pristine
					environments through our cleaning services, we handle each task with a
					clear sense of purpose. Our team of skilled professionals is the
					backbone of our operation, working tirelessly to ensure that every
					detail is meticulously executed. This dedication results in spaces and
					infrastructures that meet the needs of today while making a positive
					contribution to the future.
				</p>

				<p>
					Join us at Ochean Bays Limited Company, where we build a better world
					together, one innovative and purposeful service at a time.
				</p>
				<div className=' service-mid container' style={{ marginTop: "5%" }}>
					<img src={pic11} alt='' className='img' />
					<div className='quote'>
						{" "}
						<blockquote>
							"When management fails to speak with one voice, it inadvertently
							becomes a peripheral obstacle to the team's mission."
							<p>
								{" "}
								- Violet Akinyi Ager <br /> Managing Director
							</p>
						</blockquote>
					</div>
					<h2>What We Offer</h2>
				</div>
				<div className='offers' style={{ marginTop: "5%" }}>
					<div className='para'>
						<div className='image-cont'>
							<img src={kisima} alt='' className='comm-image bore' />
						</div>
						<div className='text-cont'>
							<h3>Borehole Drilling </h3>
							<p className='left'>
								Understood. Here's a refined statement for marketing your
								borehole drilling services: Ochean Bays Limited is your trusted
								partner for professional borehole drilling services. We
								specialize in enhancing schools and communities with sustainable
								water solutions. Our advanced technology and skilled team ensure
								precise, efficient drilling, providing a reliable water supply
								essential for growth and well-being. Commit to excellence with
								Ochean Bays Limited, where every borehole is a step towards a
								brighter future.
							</p>
							<Link to='/borehole'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
					</div>
					<div className='para'>
						<div className='text-cont'>
							<h3>General Construction</h3>
							<p>
								With a sense of pride, we present our broad expertise in the
								construction industry, encompassing a wide range of projects
								that include
								<span>
									{" "}
									gabion installations, culvert constructions, and road
									development.
								</span>{" "}
								Our portfolio is a testament to our dedication to quality and
								innovation in every sector we serve. From the foundations of{" "}
								<span>gabions</span> that stabilize slopes to the culverts that
								facilitate drainage, and the <span>roads</span> that connect
								communities, our work stands as a symbol of our versatility and
								commitment to building better environments.
							</p>
							<Link to='/construction'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
						<div className='image-cont'>
							<img src={general} alt='' className='comm-image' />
						</div>
					</div>
					<div className='para'>
						<div className='image-cont'>
							<img src={realestate} alt='' className='comm-image' />
						</div>
						<div className='text-cont'>
							<h3>Real Estate & Property Development</h3>
							<p>
								With our expertise in real estate and property development, we
								specialize in crafting exceptional residential and commercial
								projects that embody innovation, quality, and style. From
								conception to completion, we are committed to delivering
								unparalleled service and exceeding expectations at every step of
								the journey. Whether you're envisioning a modern urban apartment
								complex or a serene suburban community, our dedicated team of
								professionals is here to turn your vision into a tangible
								masterpiece.
							</p>
							<Link to='/realestate'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
					</div>
					<div className='para'>
						<div className='text-cont'>
							<h3>Earthworks and Plant Hire</h3>
							<p className='left'>
								Our company offers premium earthworks services alongside
								comprehensive plant hire options, catering to both our internal
								construction projects and standalone client needs. With a
								commitment to excellence, we excel in preparing sites for
								construction, ensuring optimal groundwork for seamless project
								execution. Our extensive fleet of high-quality plant machinery
								guarantees efficiency and reliability, delivering exceptional
								results every time. Our fleet includes:
								<ul>
									<li> Graders and Rollers</li>
									<li>Bulldozers</li>
									<li>Low Bed trucks</li>
									<li>Excavators</li>
									<li>Concrete Batching Plant</li>
									<li>Tipper Trucks</li>
									<li>TLB's</li>
									<li>Comprehensive range of small plant</li>
								</ul>
							</p>
							<Link to='/planthire'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
						<div className='image-cont'>
							<img src={earthwork} alt='' className='comm-image' />
						</div>
					</div>
					<div className='para'>
						<div className='image-cont'>
							<img src={cleaning} alt='' className='comm-image' />
						</div>
						<div className='text-cont'>
							<h3>Cleaning services</h3>
							<p>
								With over 5 years of experience, we offer affordable cleaning
								services in Kenya for residential and office spaces. Our skilled
								team operates with utmost professionalism, ensuring every task
								is completed to the highest standards. We pride ourselves on
								delivering exceptional value for money, combining expertise with
								efficiency to leave your premises impeccably clean. From
								meticulous attention to detail to a commitment to excellence,
								our services are tailored to meet and exceed your expectations.
							</p>
							<Link to='/cleaning'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
					</div>
					<div className='para'>
						<div className='text-cont'>
							<h3>International Brand Paint Supply</h3>
							<p>
								We are proud to be the premier supplier of Internation Paint, a
								brand renowned for its exceptional industrial coatings. Our
								extensive inventory is tailored to meet the diverse needs of
								industries requiring top-tier protective solutions. We
								understand the critical importance of durability and efficiency
								in industrial environments, which is why we offer Internation
								Paint’s advanced formulations that provide superior coverage,
								resilience, and longevity.
							</p>
							<Link to='/paint'>
								{" "}
								<button className='btn' role='link'>
									Learn More
								</button>
							</Link>
						</div>
						<div className='image-cont'>
							<img src={paintimage} alt='' className='comm-image' />
						</div>
					</div>
				</div>
			</div>
			<div className='safety' style={{ marginTop: "10%" }}>
				<p className='safety-left'>
					<h2> Health and Safety</h2>
					<img src={safety} alt='' />
					Ochean Bays Investment Limited is dedicated to fostering a secure and
					healthy work environment for all individuals associated with our
					operations.
					<div className='empty' />
					Through our Human Performance-based operational philosophy, we
					prioritize understanding human behavior and the workplace dynamics
					that influence it, transcending conventional safety management
					approaches. Recognizing that errors can occur despite training and
					established procedures, Human Performance allows us to delve deeper
					into how our operational framework shapes behaviors. By comprehending
					the motivations behind our team members' actions, we can proactively
					identify and mitigate factors contributing to human error. This
					continuous learning process fosters a culture of shared responsibility
					for error reduction, bolstering our safety measures and resilience.
					<div className='empty' />
					Our commitment to Human Performance mirrors the ethos of Ochean Bays
					Building with Purpose approach, which places emphasis on caring for
					team members. This culture of care is instilled in every member
					through thorough onboarding and ongoing communication, promoting a
					vigilant stance on reporting any potentially hazardous behaviors or
					conditions. Furthermore, meticulous task planning, training, and
					coordination among team members ensure that operations are executed
					safely and efficiently.
				</p>
				<p className='safety-right'>
					<h2>Quality</h2>
					<img src={quality} alt='' />
					Ochean Bays Investment Limited upholds an unwavering commitment to
					excellence, evident in our deliberate pursuit of quality across every
					project. Quality serves as a cornerstone of our Building with Purpose
					approach, and we take immense pride in the effectiveness of our robust
					quality management program.
					<div className='empty' />
					Central to our program are two fundamental principles: getting things
					right the first time and fostering collaborative relationships with
					our trade contractors to ensure a shared understanding of tasks.
					Through meticulous evaluation, we develop tailored, project-specific
					quality control plans. We then diligently execute these plans to not
					only meet our clients' objectives but also exceed our own standards.
					<div className='empty' />
					Our proven quality management program is renowned for its ability to
					minimize rework, resulting in significant time and cost savings while
					consistently delivering superior outcomes. While we maintain rigorous
					quality standards honed over decades of experience, we recognize the
					importance of customizing planning approaches to suit the unique
					requirements of each project.
				</p>
			</div>
		</div>
	);
};

export default Services;
