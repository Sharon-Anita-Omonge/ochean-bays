import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import ober1 from "../../assets/ober1.jpg";
import ober2 from "../../assets/ober2.jpg";
import ober3 from "../../assets/ober3.jpg";
import ober4 from "../../assets/ober4.jpg";
import ober5 from "../../assets/ober5.jpg";
import ober6 from "../../assets/ober6.jpg";
import ober7 from "../../assets/ober7.jpg";
import ober9 from "../../assets/ober9.png";
import ober8 from "../../assets/ober8.jpeg";
import kisima from "../../assets/kisima1.jpeg";

const OberBorehole = () => {
	const projects = [
		{
			name: "Gallery",
			images: [
				ober1,
				ober2,
				ober3,
				ober4,
				ober5,
				ober6,
				ober7,
				ober9,
				kisima,
				ober8,
			],
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
			<div className='hero-ober '>
				<h1>Ober Kamoth Water Project</h1>
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
				<p>Ober Kamoth</p>
			</div>
			<div className='container heroo'>
				<h3>The Ober Kamoth Health Center Borehole </h3>
				<p>
					The Ober Kamoth Health Center borehole project marks a significant
					milestone in community development. Our dedicated team successfully
					constructed a vital water source, ensuring sustainable access to clean
					water. This borehole stands as a testament to our commitment to
					enhancing public health and supporting local progress.
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

export default OberBorehole;
