import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo3 from "../../assets/logo3.png";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";
import phone from "../../assets/whitephone.png";
import email from "../../assets/whitemail.png";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	const toggleMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	const closeMobileMenu = () => setMobileMenu(false);

	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = "tel:+254710466533";
	};

	const handleEmailClick = (event) => {
		event.preventDefault();
		window.location.href = "mailto:info@ocheanbays.com";
	};

	return (
		<div className='navbar' style={{ overflowX: "hidden" }}>
			<div className='top-nav container'>
				<div className='top-nav-icon'>
					<img src={email} alt='' />
					<a href='mailto:info@ocheanbays.com' onClick={handleEmailClick}>
						info@ocheanbays.com
					</a>
				</div>
				<div className='top-nav-icon'>
					<img src={phone} alt='' />
					<a href='tel:+254710466533' onClick={handlePhoneClick}>
						+254-721-720-955
					</a>
				</div>
				<div className='top-nav-icon'>
					<p>
						<span>OPEN</span> Mon - Friday 8:00 - 17:00
					</p>
				</div>
			</div>
			<nav className={scrolling ? "navbar-scroll" : "container"}>
				<div className='logo'>
					<img src={logo3} alt='' />
					<h5>Ochean Bays Investment Limited</h5>
				</div>
				<ul className={mobileMenu ? "mobile-menu" : "hide-menu"}>
					<li onClick={closeMobileMenu}>
						<NavLink to='/' activeClassName='active'>
							Home
						</NavLink>
					</li>
					<li onClick={closeMobileMenu}>
						<NavLink to='/about' activeClassName='active'>
							About
						</NavLink>
					</li>
					<li onClick={closeMobileMenu}>
						<NavLink to='/services' activeClassName='active'>
							Services
						</NavLink>
					</li>
					<li onClick={closeMobileMenu}>
						<NavLink to='/projects' activeClassName='active'>
							Projects
						</NavLink>
					</li>
					<li onClick={closeMobileMenu}>
						<NavLink to='/contact' activeClassName='active'>
							Contact
						</NavLink>
					</li>
				</ul>
				<img src={menu} alt='' className='menu-icon' onClick={toggleMenu} />
			</nav>
		</div>
	);
};

export default Navbar;
