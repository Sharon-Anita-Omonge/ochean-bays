import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import kenyagrace1 from "../../assets/kenyagrace1.jpg";
import kenyagrace2 from "../../assets/kenyagrace2.jpg";
import kenyagrace3 from "../../assets/kenyagrace3.jpg";
import kenyagrace4 from "../../assets/kenyagrace4.jpg";
import kenyagrace5 from "../../assets/kenyagrace5.jpg";
import kenyagrace6 from "../../assets/kenyagrace6.jpg";
import kenyagrace7 from "../../assets/kenyagrace7.jpg";
import kenyagrace8 from "../../assets/kenyagrace8.jpg";
import kenyagrace9 from "../../assets/kenyagrace9.jpg";
import kenyagrace10 from "../../assets/kenyagrace10.jpg";
import kenyagrace11 from "../../assets/kenyagrace11.jpg";
import kenyagrace12 from "../../assets/kenyagrace12.jpg";
import kenyagrace13 from "../../assets/kenyagrace13.jpg";
import kenyagrace14 from "../../assets/kenyagrace14.jpg";
import kenyagrace15 from "../../assets/kenyagrace15.jpg";
import kenyagrace16 from "../../assets/kenyagrace16.jpg";

const KenyaGrace = () => {
	const projects = [
		{
			name: "Gallery",
			images: [
				kenyagrace1,
				kenyagrace2,
				kenyagrace3,
				kenyagrace4,
				kenyagrace5,
				kenyagrace6,
				kenyagrace7,
				kenyagrace8,
				kenyagrace9,
				kenyagrace10,
				kenyagrace11,
				kenyagrace12,
				kenyagrace13,
				kenyagrace14,
				kenyagrace15,
				kenyagrace16,
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
		<div className='kenyagrace'>
			<div className='hero-kenyagrace '>
				<h1>Kenya Grace Water Project </h1>
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
				<p>Kenya Grace</p>
			</div>
			<div className='container heroo'>
				<h3>Kenya Grace Water Project </h3>
				<p>
					The Kenya Grace, Kisumu County water project represents a pivotal
					achievement in enhancing local welfare. Our team's unwavering
					dedication led to the establishment of an essential borehole,
					guaranteeing a steady supply of potable water. This initiative
					embodies our pledge to improve public health and foster community
					advancement.
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
export default KenyaGrace;
