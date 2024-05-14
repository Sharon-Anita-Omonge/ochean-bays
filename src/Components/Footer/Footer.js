import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className='container ft'>
			<div className='footer'>
				<div className='lg'>
					<img src={logo2} alt='' className='logo' />
					<h5>Ochean Bays Investment Limited</h5>
				</div>
				<div className='link-list'>
					<h4>COMPANY</h4>
					<Link to='/' className='link'>
						Home
					</Link>
					<Link to='/about' className='link'>
						About
					</Link>
					<Link to='/services' className='link'>
						Services
					</Link>
					<Link to='/projects' className='link'>
						Projects
					</Link>
					<Link to='/contact' className='link'>
						Contact
					</Link>
				</div>
				<div className='link-list'>
					<h4>SERVICES</h4>
					<Link to='/paint' className='link'>
						International Paint
					</Link>
					<Link to='/cleaning' className='link'>
						Cleaning Services
					</Link>
					<Link to='/construction' className='link'>
						Construction
					</Link>
					<Link to='/realestate' className='link'>
						Real Estate
					</Link>
					<Link to='/planthire' className='link'>
						Plant Hire
					</Link>
					<Link to='/borehole' className='link'>
						Borehole
					</Link>
				</div>
				<div className='link-list'>
					<h4>PROJECTS</h4>
					<Link to='/culvert' className='link'>
						Narok Box Culvert
					</Link>
					<Link to='/nationalhousing' className='link'>
						National Housing
					</Link>
					<Link to='/mamboleo' className='link'>
						Mamboleo Road
					</Link>
					<Link to='/jocust' className='link'>
						JOCUST Gabion
					</Link>
					<Link to='/dreamhome' className='link'>
						Dream Home
					</Link>
					<Link to='/oberborehole' className='link'>
						Ober Kamoth
					</Link>
					<Link to='/kenyagrace' className='link'>
						Kenya Grace
					</Link>
					<Link to='/geta' className='link'>
						Geta Primary
					</Link>
				</div>

				<div className='location'>
					<h4>OFFICE</h4>
					<p>
						14 Mtito Andei Rd, Kilimani, <br /> Nairobi, Kenya
					</p>
				</div>
			</div>
			<div className='copyright'>
				&copy; {currentYear} Ochean Bays Investment Limited, All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
