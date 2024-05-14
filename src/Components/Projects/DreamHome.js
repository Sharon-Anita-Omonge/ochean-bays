import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import estate1 from "../../assets/estate1.jpg";
import estate2 from "../../assets/estate2.jpg";
import estate3 from "../../assets/estate3.jpg";
import estate4 from "../../assets/estate4.jpg";
import estate5 from "../../assets/estate5.jpg";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.webp";

const DreamHome = () => {
	const projects = [
		{
			name: "Gallery",
			images: [estate3, house1, house2],
		},
		{
			name: "Other Ongoing Real Estate Projects",
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
		<div className='dreamhome'>
			<div className='hero-dreamhome '>
				<h1>Kitengela House Construction</h1>
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
				<p>Kitengela House</p>
			</div>
			<div className='container heroo'>
				<h3>Kitengela Dream Home</h3>
				<p>
					In collaboration with our skilled designers and dedicated contractors,
					our company embarked on an extraordinary journey: the creation of a
					5,000-square-foot custom home. This once-in-a-lifetime project
					seamlessly blends form, function, and individuality. Join us as we
					delve into the meticulous craftsmanship that transformed architectural
					dreams into reality.
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

export default DreamHome;
