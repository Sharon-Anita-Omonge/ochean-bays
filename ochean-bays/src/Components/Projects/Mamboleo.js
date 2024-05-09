import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import bara1 from "../../assets/bara1.jpeg";
import bara3 from "../../assets/bara3.jpeg";
import bara4 from "../../assets/bara4.jpeg";
import bara5 from "../../assets/bara5.jpeg";
import roadvid from "../../assets/roadvid.mp4";
import baravideo from "../../assets/baravideo.mp4";

const Mamboleo = () => {
	const projects = [
		{
			name: "Gallery",
			images: [bara1, bara3, bara4, bara5],
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
		<div style={{ overflowX: "hidden" }} className='mamboleo'>
			<div className='hero-mamboleo '>
				<h1>Mamboleo Road Construction</h1>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/government'>
					<p>Government</p>
				</Link>
				<img src={nextred} alt='' />
				<p>Mamboleo Road</p>
			</div>
			<div className='container heroo'>
				<h3>The Mamboleo Road Construction </h3>
				<p>
					The Mamboleo Kisumu road construction project is a transformative
					endeavor, enhancing connectivity and trade in the region. Our team's
					expertise facilitated the completion of this vital artery, bolstering
					economic growth and improving access to essential services for the
					people of Kisumu County.
				</p>
			</div>
			<div className='container'>
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
			<div className='main-video container'>
				<h3>Video</h3>
				<div className='video-container container'>
					<div>
						<a href={baravideo} target='_blank' rel='noopener noreferrer'>
							<video autoPlay loop muted className='paint-video'>
								<source src={baravideo} />
							</video>
						</a>
					</div>
					<div>
						<a href={roadvid} target='_blank' rel='noopener noreferrer'>
							<video autoPlay loop muted className='paint-video'>
								<source src={roadvid} />
							</video>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mamboleo;
