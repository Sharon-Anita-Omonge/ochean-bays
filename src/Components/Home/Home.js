import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import Partners from "../Partners/Partners";
import construction from "../../assets/construction.png";
import planthire from "../../assets/planthire.png";
import well from "../../assets/well.png";
import paint from "../../assets/paintbucket.png";
import cleaning from "../../assets/cleaning.png";
import realestate from "../../assets/realestate.png";
import bara1 from "../../assets/bara1.jpeg";
import estate3 from "../../assets/estate3.jpg";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import address from "../../assets/address.png";
import fax from "../../assets/fax.png";
import ober7 from "../../assets/ober7.jpg";
import culvert3 from "../../assets/culvert3.jpg";
import TestimonialCarousel from "../Testimonials/Testimonials";
import StatisticsContainer from "../StatisticsContainer/StatisticsContainer";
import affordable from "../../assets/chmoney.png";
import material from "../../assets/chmaterial.png";
import cert from "../../assets/chcert.png";
import availabilty from "../../assets/chavailable.png";
import integrity from "../../assets/chintegrity.png";
import quick from "../../assets/chquick.png";
import kenyagrace12 from "../../assets/kenyagrace12.jpg";
import kisumu from "../../assets/kisumu1.jpg";
import geta from "../../assets/geta3.jpg";
import gabion from "../../assets/gabion.jpg";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = "tel:+254710466533";
	};
	const handleEmailClick = (event) => {
		event.preventDefault();
		window.location.href = "mailto: info@ocheanbays.com";
	};

	return (
		<div className='home'>
			<div className='hero'>
				<HeroSection />
			</div>
			<div className=' emp container' style={{ marginTop: "5%" }}>
				<div className='emp-left'></div>
				<h2>Mastering Diverse Disciplines</h2>
			</div>
			<div className='container about-home' data-aos='fade-left'>
				<p>
					Ochean Bays Limited is your all-in-one partner for reliable and
					comprehensive solutions. From expert cleaning services and quality
					construction projects to borehole drilling and premium paint supply,
					we deliver excellence across every industry we serve. Trust us to
					elevate your standards and bring your visions to life.
				</p>
				<p>
					<span>Borehole Drilling:</span>
					Harnessing the earth's natural water resources with state-of-the-art
					technology.
				</p>

				<p>
					<span>Cleaning Services:</span>
					Delivering spotless environments through meticulous cleaning
					practices.
				</p>

				<p>
					<span>International Brand Paint Supply:</span> Providing high-quality
					International Brand Paint products to meet diverse painting needs.{" "}
				</p>

				<p>
					<span>Road Construction</span>
					Crafting durable roadways that connect communities and enhance
					mobility.{" "}
				</p>
				<p>
					While these are our primary services, we also offer a range of other
					solutions tailored to the unique needs of our clients. From
					infrastructure development to culvert building, we handle each project
					with the same level of expertise and attention to detail Choose Ochean
					Bays Investment Limited for your next project and experience the
					pinnacle of construction excellence.
				</p>
			</div>
			<div
				className=' emp container'
				data-aos='fade-right'
				style={{ marginTop: "5%" }}
			>
				<div className='emp-left'></div>
				<h2>Our Work History</h2>
			</div>
			<div className='stat container'>
				<StatisticsContainer />
			</div>
			<h4 className='container' style={{ marginTop: "10%" }}>
				We do it all
			</h4>
			<div className=' emp container' data-aos='fade-right'>
				<div data-aos='fade-left' className='emp-left'></div>
				<h2>Why Choose Us?</h2>
			</div>
			<div className='choose-home container'>
				<div className='chose-div'>
					<img src={availabilty} alt='' />
					<div>
						<h3>Availability</h3>
						<p>
							We guarantee round-the-clock availability to swiftly meet your
							needs with prompt, efficient, and professional service.
						</p>
					</div>
				</div>
				<div data-aos='fade-right' className='chose-div'>
					<img src={material} alt='' />
					<div>
						<h3>Best Materials</h3>
						<p>
							Our company prides itself on providing top-tier services,
							utilizing only the finest materials to ensure superior quality and
							customer satisfaction.
						</p>
					</div>
				</div>
				<div className='chose-div' data-aos='fade-left'>
					<img src={affordable} alt='' />
					<div>
						<h3>Affordable Price</h3>

						<p>
							We offer competitive pricing without compromising on quality,
							ensuring you receive the best value for our comprehensive range of
							services.
						</p>
					</div>
				</div>
				<div className='chose-div' data-aos='fade-right'>
					<img src={quick} alt='' />
					<div>
						<h3>Quick & Efficent</h3>
						<p>
							Swift, efficient, and professional – our commitment to excellence
							ensures your needs are met promptly and effectively.
						</p>
					</div>
				</div>
				<div className='chose-div' data-aos='fade-left'>
					<img src={integrity} alt='' />
					<div>
						<h3>Full Integrity</h3>
						<p>
							Integrity is our cornerstone. We consistently uphold high ethical
							standards, ensuring trust and transparency in all our endeavors.
						</p>
					</div>
				</div>
				<div className='chose-div' data-aos='fade-right'>
					<img src={cert} alt='' />
					<div>
						<h3>Certification</h3>
						<p>
							Our company holds esteemed certifications including tax
							compliance, business permits, AGPO, and NCA for road, water, and
							electrical works, ensuring credible and authorized operations.
						</p>
					</div>
				</div>
			</div>
			<div
				className=' emp container'
				data-aos='fade-right'
				style={{ marginTop: "10%" }}
			>
				<div className='emp-left'></div>
				<h2>Our Main Services</h2>
			</div>

			<div className='container' data-aos='fade-left'>
				<div className='serv container'>
					<div className='link-container'>
						<Link to='/construction'>
							<img src={construction} alt='' />
							<h4>Construction</h4>
						</Link>
					</div>

					<div className='link-container'>
						<Link to='/planthire'>
							<img src={planthire} alt='' />
							<h4>Plant Hire</h4>
						</Link>
					</div>

					<div className='link-container'>
						<Link to='/borehole'>
							<img src={well} alt='' />
						</Link>
						<h4>Borehole Drilling</h4>
					</div>

					<div className='link-container'>
						<Link to='/paint'>
							<img src={paint} alt='' />
						</Link>
						<h4>International Brand Paint Supply</h4>
					</div>
					<div className='link-container'>
						<Link to='/cleaning'>
							<img src={cleaning} alt='' />
							<h4>Cleaning Services</h4>
						</Link>
					</div>

					<div className='link-container'>
						<Link to='/realestate'>
							<img src={realestate} alt='' />
							<h4>Realestate</h4>
						</Link>
					</div>
				</div>
			</div>
			<div
				style={{ marginTop: "5%" }}
				className=' emp container'
				data-aos='fade-right'
			>
				<div className='emp-left'></div>
				<h2>Our Projects</h2>
			</div>
			<div
				className='projo container'
				data-aos='fade-left'
				style={{ marginTop: "5%" }}
			>
				<div style={{ marginTop: "5%" }} className='proj '>
					<Link to='dreamhome'>
						<div className='cont hover-container'>
							<img src={estate3} alt='' />
							<h4>Kitengela Dream Home</h4>
							<p>Kitengela, Kenya</p>
						</div>
					</Link>
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
							<h4>Box culvert construction</h4>
							<p>Narok, Kenya</p>
						</div>
					</Link>
					<Link to='/nationalhousing'>
						<div className='cont'>
							<img src={kisumu} alt='' />
							<h4>
								Tower Construction <br /> National Housing
							</h4>
							<p>Kisumu, Kenya</p>
						</div>
					</Link>
					<Link to='/kenyagrace'>
						<div className='cont'>
							<img src={kenyagrace12} alt='' />
							<h4>
								Kenya Grace <br /> Water Project
							</h4>
							<p>Kisumu, Kenya</p>
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
					<Link to='/jocust'>
						<div className='cont'>
							<img src={gabion} alt='' />
							<h4>
								Gabion Construction <br /> JOCUST
							</h4>
							<p>Kisumu, Kenya</p>
						</div>
					</Link>
				</div>
				<div className='container'>
					<NavLink to='/projects'>
						<button className='btn' id='link'>
							VIEW OUR PROJECTS
						</button>
					</NavLink>
				</div>
			</div>

			<div
				style={{ marginTop: "10%" }}
				className=' emp container'
				data-aos='fade-right'
			>
				<div className='emp-left'></div>
				<h2>Our Partners</h2>
			</div>
			<div className='partner-slider  container' data-aos='fade-left'>
				<Partners />
			</div>
			<div style={{ marginTop: "10%" }} className=' emp container'>
				<div className='emp-left'></div>
				<h2>Our Client Testimonials</h2>
			</div>
			<TestimonialCarousel data-aos='fade-right' />
			<div
				style={{ marginTop: "10%" }}
				className=' emp container'
				data-aos='fade-right'
			>
				<div className='emp-left'></div>
				<h2>Contact Us</h2>
			</div>
			<div className='build container' data-aos='fade-right'>
				<div className='prj'>
					<div>
						<div className='tact'>
							<h2>Let's Talk!</h2>
							<ul>
								<li>
									<img src={email} alt='' />
									<a href='	info@ocheanbays.com' onClick={handleEmailClick}>
										info@ocheanbays.com
									</a>
								</li>
								<li>
									<img src={phone} alt='' />
									<a href='tel:+254710466533' onClick={handlePhoneClick}>
										+254-721-720-955
									</a>
								</li>
								<li>
									<img src={fax} alt='' />
									P.O BOX 8966-00100 Nairobi.
								</li>
								<li>
									<img src={address} alt='' />
									14 Mtitio Andei Road Kilimani
									<br />
									Nairobi, Kenya
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='reach' data-aos='fade-left'>
					{" "}
					<h4>REACH US</h4>
					<h2>NEED TO TALK?</h2>
					<NavLink to='/contact'>
						<button className='btn' id='link'>
							CONTACT US
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Home;
