import React from "react";
import "./Paint.css";
import nextred from "../../assets/nextred.png";
import { Link } from "react-router-dom";
import video from "../../assets/paintvideo.mp4";
import icon1 from "../../assets/paintbrushicon.png";
import icon2 from "../../assets/painticon2.png";
import icon3 from "../../assets/painticonres.png";
import choose1 from "../../assets/chooseus1.png";
import choose2 from "../../assets/chooseus2.png";
import choose3 from "../../assets/chooseus3.png";
import choose4 from "../../assets/chooseus4.png";
import international from "../../assets/internationallogo.png";
import mining from "../../assets/mining.jpg";
import water from "../../assets/waterwaste.jpg";
import offshore from "../../assets/offshore.jpeg";
import onshore from "../../assets/onshore.jpeg";
import pipeline from "../../assets/pipeline.jpg";
import windpower from "../../assets/windpower.jpeg";
import building from "../../assets/building.jpg";
import thermal from "../../assets/thermalpower.jpeg";

const Paint = () => {
	return (
		<div className='main-paint' style={{ overflowX: "hidden" }}>
			<div className='hero-paint container'>
				<div className='paint-text'>
					<h1> Leading Suppliers of </h1>
					<div id='logo'>
						<img src={international} alt='' />
					</div>
					<p>
						Industrial paint ideal for diverse environments—efficiency and
						quality in every stroke.{" "}
					</p>
					<Link to='/contact'>
						<button class='btn' role='link'>
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
				<p>International Paint</p>
			</div>
			<div className='main-about'>
				<div className='about-paint container'>
					<div className=' flex-item about-paint-des'>
						<h2> Quality Coatings for Your Needs</h2>
						<p>
							Ochean Bays Investment Limited proudly offers{" "}
							<span style={{ fontWeight: "900" }}>International Paint,</span>a
							renowned division of AkzoNobel—the world’s leading coatings
							manufacturer. With over three years of experience, we have earned
							a reputation for trust and quality.
						</p>
						<p>
							Our commitment to product development ensures that you receive
							high-quality marine and protective coating products. Whether
							you’re in the industrial sector or have specific requirements, our
							team is here to assist you. Your patronage is greatly appreciated,
							and we look forward to serving you with excellence.
						</p>
					</div>
					<div className='flex-item paint-icon-container'>
						<div className='paint-icon brush'>
							<img src={icon1} alt='' />
							<h3>
								Commercial <br /> Painting
							</h3>
						</div>
						<div className='paint-icon pallette'>
							<img src={icon2} alt='' />
							<h3>
								Industrial <br /> Painting
							</h3>
						</div>
						<div className='paint-icon cols'>
							<img src={icon3} alt='' />
							<h3>
								Residential <br /> Painting
							</h3>
						</div>
					</div>
				</div>
				<div className='container choose'>
					<h2>What We stand for</h2>
					<div className='chooseus'>
						<img src={choose1} alt='' />
						<img src={choose2} alt='' />
						<img src={choose3} alt='' />
						<img src={choose4} alt='' />
					</div>
				</div>
				<div className='paint-categ container'>
					<h2>Product Applications</h2>
					<div className='paint-categ-des '>
						<div>
							<img src={water} alt='' />
							<p>
								<h3>Water and Waste</h3>
								Long term corrosion protection to the steel and concrete used in
								the Water and Wastewater market.
							</p>
						</div>
						<div>
							<img src={building} alt='' />
							<p>
								<h3>Buildings</h3>
								Our coatings ensure that the world’s structures retain their
								safety, impact and design credentials for many years to come.
							</p>
						</div>
						<div>
							<img src={offshore} alt='' />
							<p>
								<h3>Offshore Oil and Gas</h3>
								We offer a complete coating solution range for the most
								demanding offshore environments around the world.
							</p>
						</div>
						<div>
							<img src={mining} alt='' />
							<p>
								<h3>Mining</h3>
								With an extensive track record, our coatings are proven to
								extend the design life of the production facilities and improve
								cash flow due to less downtime.
							</p>
						</div>
						<div>
							<img src={onshore} alt='' />
							<p>
								<h3>Onshore Oil and Gas Facilities</h3>
								Our extensive product range is designed to increase service life
								and minimize unplanned shutdowns.
							</p>
						</div>
						<div>
							<img src={thermal} alt='' />
							<p>
								<h3>Thermal Power</h3>
								We offer a wide range of high performance coatings that provide
								long term corrosion protection and aesthetics
							</p>
						</div>
						<div>
							<img src={pipeline} alt='' />
							<p>
								<h3>Transportation and Pipeline</h3>
								Effective corrosion protection against some of the most
								aggressive chemicals, maximizing in-service time and
								profitability
							</p>
						</div>
						<div>
							<img src={windpower} alt='' />
							<p>
								<h3>Wind Power</h3>
								We are a single source supplier of coatings for wind turbines -
								from tip to toe.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='vid container'>
				<div className='vid-container'>
					<a href={video} target='_blank' rel='noopener noreferrer'>
						<video autoPlay loop muted className='paint-video'>
							<source src={video} />
						</video>
						<p style={{ color: "var(--blue)", fontStyle: "italic" }}>
							Shipment Arriving at JKIA
						</p>
					</a>
				</div>
				<div>
					<h2>Why People Love Our Solutions</h2>
					<h3> KEBS Approved</h3>
					<p>
						Our products meet KEBS standards, ensuring quality and reliability
						for every use, giving our customers peace of mind.
					</p>

					<h3> Flexible Scheduling</h3>
					<p>
						We offer adaptable scheduling options to fit our clients' busy
						lives, making our services convenient and accessible.
					</p>
					<h3>Eco-Friendly Practices</h3>
					<p>
						Our commitment to eco-friendly solutions means a cleaner, greener
						space for everyone, reflecting our care for the environment.
					</p>
				</div>
			</div>
			<Link to='/contact'>
				<button style={{ marginLeft: "7%" }} className='btn' role='link'>
					Reach Us Here
				</button>
			</Link>
		</div>
	);
};

export default Paint;
