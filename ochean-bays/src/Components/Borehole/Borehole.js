import React, { useState } from "react";
import "./Borehole.css";
import nextred from "../../assets/nextred.png";
import boreholevid1 from "../../assets/boreholevid1.mp4";
import boreholevid2 from "../../assets/boreholevid2.mp4";
import assessment from "../../assets/assessment.jpg";
import drilling from "../../assets/boreholedrill.jpeg";
import pump from "../../assets/pumpinstallation.jpeg";
import borehole from "../../assets/borehorepic1.webp";
import survey from "../../assets/drillsurvey.webp";
import { Link } from "react-router-dom";
import ober1 from "../../assets/ober1.jpg";
import ober3 from "../../assets/ober3.jpg";
import kenyagrace12 from "../../assets/kenyagrace12.jpg";
import kenyagrace9 from "../../assets/kenyagrace9.jpg";
import kenyagrace8 from "../../assets/kenyagrace8.jpg";
import kisima1 from "../../assets/kisima1.jpeg";
import right from "../../assets/right.png";
import left from "../../assets/left.png";

const Borehole = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const projects = [
		{
			name: "Gallery",
			images: [ober1, kenyagrace9, kenyagrace12, kisima1, ober3, kenyagrace8],
		},
	];

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
		<div className='borehole' style={{ overflowX: "hidden" }}>
			<div className='drill container'>
				<div className='hero-drill'>
					<h1 style={{ marginTop: "5%" }}>Growth Through Sustainability</h1>
					<p>
						Through each borehole, we tap into Earth's life-giving waters,
						securing a sustainable future for communities.
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
				<p>Borehole</p>
			</div>
			<div className='about-borehole container'>
				<div className='borehole-sustain'>
					<div>
						<h2>Sustaining Life, One Borehole at a Time</h2>
						<p>
							At Ochean Bays Investment Limited, we believe water is the essence
							of life and the bedrock of civilization. Our mission is to unlock
							the potential of the earth’s natural resources to provide reliable
							and sustainable water solutions for communities and industries.
							With a legacy of excellence, innovation, and integrity, we’ve been
							at the forefront of borehole drilling and water management
							services, ensuring that every drop counts.
						</p>
					</div>
				</div>

				<div className='borehole-sustain'>
					<div className='sustain-left'>
						<img src={borehole} alt='' />
					</div>
					<div className='sustain-right'>
						<h3>Commitment to Technology and Sustainability</h3>
						<p>
							Founded on the principles of sustainability, community, and
							stewardship, Ochean Bays Investment Limited has grown from a local
							drilling company to a leading provider of comprehensive water
							solutions. Our expertise spans across geophysical surveys,
							borehole drilling, pump installation, and maintenance services. We
							are dedicated to harnessing the latest technologies and
							sustainable practices to deliver water solutions that not only
							meet the needs of today but also safeguard the resources for
							future generations.
						</p>
					</div>
				</div>
			</div>
			<div style={{ marginTop: "5%" }} className='drill-choose container'>
				<h2>We are committed to:</h2>
				<ul>
					<li>
						<span>Sustainability:</span> Embracing sustainable practices in
						every aspect of our operations to ensure environmental harmony and
						resource conservation.
					</li>
					<li>
						<span>Quality:</span> Ensuring the highest standards in every
						project we undertake.
					</li>
					<li>
						<span>Reliability:</span>Providing dependable services that our
						customers can trust.
					</li>
					<li>
						<span>Innovation:</span>Continuously improving our methods and
						technologies.
					</li>
					<li>
						<span>Community:</span> Enriching the lives of the communities we
						serve.
					</li>
				</ul>
			</div>
			<div style={{ marginTop: "5%" }} className='borehole-procedure container'>
				<h2>Our Services</h2>
				<div className='drill-offer'>
					<div>
						<img src={survey} alt='' />
						<h4>Hydrogeological Survey</h4>
						<p>
							{" "}
							Groundwater distribution can vary greatly, which is why Ochean
							Bays Investment Limited meticulously identifies optimal locations
							for groundwater exploration before initiating any drilling. By
							selecting the ideal site based on geological data and aligning
							with our clients’ agricultural plans, we guarantee efficient and
							successful borehole projects.
						</p>
					</div>
					<div>
						<img src={assessment} alt='' />
						<h4>Environmental Impact Assessment (EIA)</h4>
						<p>
							{" "}
							Conducting an EIA is mandated by the National Environmental
							Management Authority (NEMA) prior to borehole drilling in Kenya
							and other construction activities. At Ochean Bays Investment
							Limited, we perform a comprehensive EIA field questionnaire during
							the geological survey phase for borehole projects, ensuring that
							all subsequent reporting aligns with NEMA’s regulations and our
							commitment to environmental stewardship.{" "}
						</p>
					</div>
					<div>
						<img src={drilling} alt='' />
						<h4>Borehole Drilling</h4>
						<p>
							Following the hydrogeological report’s guidance, Ochean Bays
							Investment Limited undertakes the critical phase of borehole
							drilling. This process includes the deployment of drilling rigs to
							the designated site and drilling down to the advised depth until
							water is encountered. Subsequently, we install the appropriate
							casings, either PVC or steel, and securely fit a borehole cap to
							safeguard the integrity of the well.
						</p>
					</div>
					<div>
						<img src={pump} alt='' />
						<h4>Pump Installations</h4>
						<p>
							At Ochean Bays Investment Limited, we meticulously select the
							ideal submersible pump and motor for each borehole. The choice is
							influenced by factors such as borehole depth, water yield, the
							client’s usage needs, and budget considerations. Our expertise
							ensures that every installation is optimized for efficiency and
							longevity, providing our clients with a reliable water supply
							system.
						</p>
					</div>
				</div>
			</div>
			<div
				style={{ marginTop: "5%" }}
				className='borehole-gallery gallery container'
			>
				{projects.map((project, projectIndex) => (
					<div key={projectIndex}>
						<h2
							style={{
								color: "var(--blue)",
								fontWeight: "700",
								textAlign: "start",
							}}
						>
							{project.name}
						</h2>
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
			<div className='main-video container'>
				<h3>Video</h3>
				<div className='video-container container'>
					<div>
						<a href={boreholevid1} target='_blank' rel='noopener noreferrer'>
							<video autoPlay loop muted className='paint-video'>
								<source src={boreholevid1} />
							</video>
						</a>
					</div>
					<div>
						<a href={boreholevid2} target='_blank' rel='noopener noreferrer'>
							<video autoPlay loop muted className='paint-video'>
								<source src={boreholevid2} />
							</video>
						</a>
					</div>
				</div>
			</div>

			<Link to='/contact'>
				<button style={{ marginLeft: "7%" }} className='btn' role='link'>
					Talk To Us
				</button>
			</Link>
		</div>
	);
};

export default Borehole;
