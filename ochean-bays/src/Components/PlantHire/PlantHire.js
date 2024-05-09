import React from "react";
import "./PlantHire.css";
import nextred from "../../assets/nextred.png";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import road from "../../assets/road6.jpg";
import tbl from "../../assets/culvert2.jpg";
import graders from "../../assets/road6.jpg";
import lowebed from "../../assets/lowbed.jpg";
import rollers from "../../assets/heroserv.jpeg";
import excavators from "../../assets/road3.jpg";
import concrete from "../../assets/concrete.jpg";
import Bulldozers from "../../assets/bulldozer.jpg";
import trucks from "../../assets/trucks.jpeg";

const PlantHire = () => {
	return (
		<div className='main-planthire' style={{ overflowX: "hidden" }}>
			<div className='planthire container'>
				<div className='planthire-hero'>
					<h1>Hire Us Today!</h1>
					<p>
						Top-Tier Equipment, Flexible Renting Solutions. Build Efficiently.
						Elevate Projects.Reliable Machinery at Your Service. Your Vision,
						Our Tools.
					</p>
					<Link to='/contact'>
						<button className='btn' role='link'>
							Inquire Now
						</button>
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
				<p>Plant Hire</p>
			</div>
			<div className='rental container'>
				<div className='rental-left'>
					<div>
						<img src={hero} alt='' id='left' />
					</div>
					<div>
						<img src={road} alt='' id='right' />
					</div>
				</div>
				<div className='rental-right'>
					<h2>Pioneering Construction Solutions.</h2>
					<p>
						Ochean Bays Investment Limited stands at the forefront of the
						construction industry, offering a comprehensive range of equipment
						rental services tailored to your project’s scale and complexity. Our
						mission is to equip you with state-of-the-art machinery that ensures
						your construction endeavors are completed with precision and
						excellence. We pride ourselves on our flexible renting options,
						impeccable maintenance, and unwavering support, all designed to
						streamline your operations. Choose Ochean Bays Investment Limited
						for a partnership that constructs not just buildings, but also trust
						and reliability.
					</p>
				</div>
			</div>
			<div className='main-machinery'>
				<h2>Browse Machineries</h2>
				<div className='machinery container'>
					<div>
						<img src={tbl} alt='' />
						<h4>TLB's</h4>
					</div>
					<div>
						<img src={graders} alt='' />
						<h4>Graders</h4>
					</div>
					<div>
						<img src={rollers} alt='' />
						<h4>Rollers</h4>
					</div>
					<div>
						<img src={lowebed} alt='' />
						<h4>Low Bed trucks</h4>
					</div>
					<div>
						<img src={excavators} alt='' />
						<h4>Excavators</h4>
					</div>
					<div>
						<img src={concrete} alt='' />
						<h4>Concrete Batching Plants</h4>
					</div>
					<div>
						<img src={trucks} alt='' />
						<h4>Tipper Trucks</h4>
					</div>
					<div>
						<img src={Bulldozers} alt='' />
						<h4>Bulldozers</h4>
					</div>
				</div>
				<Link to='/contact'>
					<button
						style={{ marginLeft: "9%" }}
						className='btn container'
						role='link'
					>
						contact us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PlantHire;
