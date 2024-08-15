import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollButton.css"; // Ensure this path is correct

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check visibility on component mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`scroll-to-top ${visible ? "visible" : ""}`}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</div>
	);
};

export default ScrollToTopButton;
