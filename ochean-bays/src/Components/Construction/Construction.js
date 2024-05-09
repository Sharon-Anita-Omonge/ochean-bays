import React, { useState } from "react";
import "./Construction.css";
import { Link } from "react-router-dom";
import construction from "../../assets/construction.png";
import civil from "../../assets/civilwork.png";
import custom from "../../assets/custom.png";
import general from "../../assets/general.webp";
import land from "../../assets/landsurvey.jpg";
import electrical from "../../assets/eletrical.jpeg";
import civilwork from "../../assets/civil-work.jpeg";
import management from "../../assets/management.jpg";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import jocust from "../../assets/jocust.jpeg";
import jocust1 from "../../assets/jocust1.jpg";
import jocust2 from "../../assets/jocust2.jpeg";
import bara1 from "../../assets/bara1.jpeg";
import bara3 from "../../assets/bara3.jpeg";
import bara4 from "../../assets/bara4.jpeg";
import bara5 from "../../assets/bara5.jpeg";

const Construction = () => {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const projects = [
		{
			name: "Gallery",
			images: [jocust, bara1, jocust1, bara3, jocust2, bara4, bara5],
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
		<div className='main-construction'>
			<div className='construction container'>
				<div>
					<h1>
						WE BUILD <br />
						GREAT PROJECTS
					</h1>
					<p>
						Your vision, our craftsmanship—together, <br />
						we construct landmarks that stand the test of time.
					</p>
				</div>

				<Link to='/contact'>
					<button className='btn' role='link'>
						Contact Us
					</button>
				</Link>
			</div>

			<div className='choose-construction container'>
				<div className='chs'>
					<img src={civil} alt='' />
					<p>
						<h4>
							Quality <br /> Construction
						</h4>
						Innovative design meets unmatched quality; we build legacies, one
						brick at a time.
					</p>
				</div>
				<div className='chs'>
					<img src={construction} alt='' />
					<p>
						<h4>
							Profesional
							<br /> Liabilty
						</h4>
						Embracing responsibility, we deliver construction excellence with a
						commitment to professional integrity.
					</p>
				</div>

				<div className='chs'>
					<img src={custom} alt='' />
					<p>
						<h4>
							Dedictaed To Our
							<br /> Clients
						</h4>
						We ensure each project embodies precision, care, and architectural
						brilliance.
					</p>
				</div>
			</div>
			<div className='about-general container'>
				<h2>General Construction</h2>
				<p>
					With a sense of pride, we present our broad expertise in the
					construction industry, encompassing a wide range of projects that
					include gabion installations, culvert constructions, and road
					development. Our portfolio is a testament to our dedication to quality
					and innovation in every sector we serve. From the foundations of
					gabions that stabilize slopes to the culverts that facilitate
					drainage, and the roads that connect communities, our work stands as a
					symbol of our versatility and commitment to building better
					environments.
				</p>
			</div>
			<div>
				<h4
					style={{
						color: "var(--blue)",
						textAlign: "center",
						marginBottom: "-20px",
					}}
				>
					Our Services
				</h4>
				<h2 style={{ fontWeight: "700", marginBottom: "5%" }}>
					Services We Offers
				</h2>
				<div className='construction-services container'>
					<div>
						<img src={general} alt='' />
						<h3>General contracting</h3>
						<p>
							We work closely with our clients to accurately interpret their
							dreams and vision in drawings and bring them to the desired
							reality through construction solutions to meet their needs. We
							communicate with our clients throughout the construction process
							to keep them informed of the progress and to ensure that our
							project keeps on schedule and within budget.
						</p>
					</div>
					<div>
						<img src={management} alt='' />
						<h3>Construction Management</h3>
						<p>
							{" "}
							We offers a wide range of project management services which
							include but not limited to construc- tion project planning and
							management, contract management, construction project supervisions
							and site inspections.
						</p>
					</div>
					<div>
						<img src={civilwork} alt='' />
						<h3>Civil Works</h3>
						<p>
							We have successfully executed multi-disciplined construction of
							earthworks and concrete works. From upgrading parking lots to a
							concrete pavement,to the construction of various multi- storey
							office blocks , warehouse factories, to the erection of portal
							structure's and the state of the art workshop, to name but a few.
						</p>
					</div>
					<div>
						<img src={land} alt='' />
						<h3>Land Surveying & Topography</h3>
						<p>
							Our company boasts a dedicated team of qualified surveyors
							proficient in utilizing cutting-edge equipment such as total
							stations, dumpy levels, and theodolites. With extensive
							experience, we've successfully executed projects spanning from
							residential buildings to expansive farms and road surveys. Our
							team's expertise ensures precision and accuracy in every task,
							guaranteeing reliable results for our clients
						</p>
					</div>
					<div>
						<img src={electrical} alt='' />
						<h3>Electrical Installations</h3>
						<p>
							We specialize in electrical installations and maintenance,
							focusing on overhead low-voltage and high-voltage power lines.
							With the rising demand for renewable energy solutions, we've made
							substantial investments in this sector. Our commitment extends to
							offering a comprehensive turnkey service, ensuring seamless
							integration and efficient operation of renewable energy systems.
							From initial design to installation and ongoing maintenance, we
							provide end-to-end solutions tailored to meet the evolving needs
							of our clients.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className=' gallery construction-gallery container'>
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
			</div>
		</div>
	);
};

export default Construction;
