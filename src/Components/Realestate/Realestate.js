import React, { useState } from "react";
import "./Realestate.css";
import nextred from "../../assets/nextred.png";
import { Link } from "react-router-dom";
import real1 from "../../assets/real1.jpeg";
import real2 from "../../assets/real2.jpeg";
import real3 from "../../assets/real3.jpg";
import real4 from "../../assets/real4.jpg";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import estate1 from "../../assets/estate1.jpg";
import estate2 from "../../assets/estate2.jpg";
import estate3 from "../../assets/estate3.jpg";
import estate4 from "../../assets/estate4.jpg";
import estate5 from "../../assets/estate5.jpg";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.webp";

const Realestate = () => {
	const projects = [
		{
			name: "Gallery",
			images: [estate3, house1, house2],
		},
		{
			name: "Other Ongoing Projects",
			images: [estate1, estate2, estate4, estate5],
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
		<div className='main-realestate' style={{ overflowX: "hidden" }}>
			<div className='realestate container'>
				<div className='hero-realestate'>
					<h1>
						We Are All Over <br /> Kenya
					</h1>
					<p>
						Dreaming, creating, designing, and constructing the perfect home is
						possible, yet it's the people who bring that dream to life.
					</p>
					<Link to='/contact'>
						<button className='btn'>Contact Us</button>
					</Link>
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
				<p>Real Estate</p>
			</div>
			<div className='experience-real container'>
				<div className='experience-left flex-item'>
					<div>
						<img src={real1} alt='' />
					</div>
					<div>
						<img src={real2} alt='' />
					</div>
					<div className='real-empty'>
						<h4>5+</h4>
						<p>Years</p>
					</div>
					<div id='lastimg'>
						<img src={real3} alt='' />
					</div>
					<div id='lastimg'>
						<img src={real4} alt='' />
					</div>
				</div>
				<div className='experience-right flex-item'>
					<h2>Your Dreams Guide Our Blueprints.</h2>
					<p>
						At Ochean Bays Investment Limited, we turn aspirations into reality,
						crafting homes that reflect your deepest desires. Every nail, beam,
						and stroke of paint is a step towards the home you’ve envisioned—a
						sanctuary molded from dreams, built for a lifetime of memories.
					</p>
				</div>
			</div>
			<div className='services-real container' style={{ marginTop: "5%" }}>
				<h2>We Provide The Best Services</h2>
				<div className='real-serv'>
					<div>
						<h4>Architecture</h4>
						<p>
							Our team of adept architects will work closely with you to develop
							architectural designs that are perfectly aligned with your
							specific needs and preferences. We provide comprehensive support
							throughout the process, ensuring that all necessary approvals and
							permits are obtained efficiently.
						</p>
					</div>
					<div>
						<h4>Building & Construction</h4>
						<p>
							Our expert contractors and artisans guarantee top-quality
							construction for your project, utilizing advanced techniques and
							materials to ensure the longevity and energy efficiency of your
							building.
						</p>
					</div>
					<div>
						<h4>Road Construction</h4>
						<p>
							{" "}
							Our services include the development of robust road networks
							around real estate areas, ensuring seamless connectivity and
							infrastructure that complements your property investment. We focus
							on quality and sustainability to provide well-constructed roads
							that serve the community effectively.
						</p>
					</div>
					<div>
						<h4>Area Renovation</h4>
						<p>
							We breathe new life into old spaces. Whether it's a dated house or
							a neglected area, our team is equipped to transform it. We
							revitalize structures with modern updates, ensuring they meet
							contemporary standards of style, comfort, and efficiency."
						</p>
					</div>
					<div>
						<h4>Project & Management</h4>
						<p>
							Our project managers meticulously manage the construction from
							inception to completion, guaranteeing timely and budget-compliant
							delivery. You'll be regularly updated and any issues you encounter
							will be promptly addressed.
						</p>
					</div>
					<div>
						<h4>Painting & Tiling</h4>
						<p>
							Offering comprehensive painting and tiling services, we ensure
							every new build is finished with the highest quality. From
							vibrant, protective coats of paint to meticulously laid tiles, our
							work adds lasting beauty and value to your new home."
						</p>
					</div>
				</div>
			</div>

			<div className='real-gallery gallery container '>
				{projects.map((project, projectIndex) => (
					<div key={projectIndex}>
						<h3>{project.name}</h3>
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

export default Realestate;
