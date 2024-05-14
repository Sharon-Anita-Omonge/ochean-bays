import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import kisumu1 from "../../assets/kisumu1.jpg";
import kisumu2 from "../../assets/kisumu2.jpg";
import kisumu3 from "../../assets/kisumu3.jpg";
import kisumu4 from "../../assets/kisumu4.jpg";
import kisumu5 from "../../assets/kisumu5.jpg";
import prison from "../../assets/prison.jpg";

const NationalHousing = () => {
	const projects = [
		{
			name: "Gallery",
			images: [kisumu1, kisumu2, kisumu3, kisumu4, kisumu5, prison],
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
			<div className='hero-nationalhousing '>
				<h1>National Housing Water Tower</h1>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/commercial'>
					<p>Commercial</p>
				</Link>
				<img src={nextred} alt='' />
				<p>National Housing</p>
			</div>
			<div className='container heroo'>
				<h3>Water Tower National Housing</h3>
				<p>
					The National Housing estate in Kisumu County now boasts a robust water
					tower, courtesy of our skilled team's efforts. This towering structure
					not only enhances the skyline but also secures a reliable water
					supply, elevating the living standards for residents with a continuous
					flow of clean water.
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
		</div>
	);
};

export default NationalHousing;
