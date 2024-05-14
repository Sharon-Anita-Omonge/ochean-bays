import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import geta from "../../assets/getaprimary.jpg";
import geta2 from "../../assets/geta2.jpg";
import geta3 from "../../assets/geta3.jpg";
import video from "../../assets/boreholevid1.mp4";

const GetaPrimary = () => {
	const projects = [
		{
			name: "Gallery",
			images: [geta2, geta3, geta],
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
		<div className='ober'>
			<div className='hero-geta '>
				<h1>Geta Primary Water Project</h1>
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
				<p>Geta Primary</p>
			</div>
			<div className='container heroo'>
				<h3>Geta Primary School Water Project </h3>
				<p>
					The Geta Primary School water project in Kisumu County is a beacon of
					progress, reflecting our dedication to community upliftment. Through
					the construction of a reliable borehole, we've ensured that students
					and staff have access to clean, safe drinking water, underpinning our
					commitment to educational support and societal development.
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
					<div className='getavid'>
						<a href={video} target='_blank' rel='noopener noreferrer'>
							<video autoPlay loop muted className='paint-video'>
								<source src={video} />
							</video>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetaPrimary;
