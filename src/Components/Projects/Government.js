import React from "react";
import "./Government.css";
import { Link } from "react-router-dom";
import nextred from "../../assets/nextred.png";
import geta from "../../assets/geta3.jpg";
import bara1 from "../../assets/bara1.jpeg";
import ober7 from "../../assets/ober7.jpg";
import culvert3 from "../../assets/culvert3.jpg";

const Government = () => {
	return (
		<div>
			<div className='government'>
				<h1>Government</h1>
			</div>
			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/projects'>
					<p>Projects</p>
				</Link>
				<img src={nextred} alt='' />
				<p>Government</p>
			</div>
			<div className='procurement container'>
				<h2>Government</h2>
				<p>
					Ochean Bays Investment Limited proudly holds certification under the
					Access to Government Procurement Opportunities (AGPO) program. This
					empowers us to engage in a variety of government projects, enhancing
					public infrastructure with services like road repairs, borehole
					drilling, and culvert construction. Our AGPO certification is a
					testament to our capability and commitment to contributing to national
					development.
				</p>
				<p>
					Each project we undertake under the AGPO program is executed with
					precision, integrity, and a focus on long-term sustainability. Dive
					into our gallery to witness the scope and impact of our
					government-endorsed endeavors.
				</p>
			</div>
			<div className='proj2 container'>
				<Link to='/oberborehole'>
					<div className='cont'>
						<img src={ober7} alt='' />
						<h4>
							Ober Kamoth Health center
							<br />
							water tank installation
						</h4>
						<p>Kisumu, Kenya</p>
					</div>
				</Link>
				<Link to='/culvert'>
					<div className='cont'>
						<img src={culvert3} alt='' />
						<h4>
							Box culvert construction <br /> Narok County
						</h4>
						<p>Narok, Kenya</p>
					</div>
				</Link>

				<Link to='/mamboleo'>
					<div className='cont'>
						<img src={bara1} alt='' />
						<h4>
							Mamboleo <br /> Road Construction Project
						</h4>
						<p>Kisumu, Kenya</p>
					</div>
				</Link>
				<Link to='/geta'>
					<div className='cont'>
						<img src={geta} alt='' />
						<h4>
							Geta Primary <br /> Water Project
						</h4>
						<p>Kisumu, Kenya</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Government;
