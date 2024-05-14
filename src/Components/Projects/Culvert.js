import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import culvert1 from "../../assets/culvert1.jpg";
import culvert2 from "../../assets/culvert2.jpg";
import culvert3 from "../../assets/culvert3.jpg";
import culvert6 from "../../assets/culvert6.jpg";
import culvert7 from "../../assets/culvert7.jpg";
import culvert4 from "../../assets/culvert4.jpeg";

const Culvert = () => {
	const projects = [
		{
			images: [culvert1, culvert2, culvert3, culvert7, culvert6, culvert4],
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
		<div className='culvert'>
			<div className='hero-culvert '>
				<h1>Narok Box Culvert</h1>
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
				<p>Box Culvert</p>
			</div>
			<div className='container heroo'>
				<h3>Constrcution of Narok County Box Culvert</h3>
				<p>
					Ochean Bays Investment Limited recently completed a significant box
					culvert construction project in Narok County. Our skilled team
					efficiently handled the entire process, ensuring top-quality
					infrastructure development that meets the specific needs of the local
					environment and community.
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

export default Culvert;
