import React from "react";
import "./Partners.css";
import minwater from "../../assets/minwater.png";
import minagric from "../../assets/minagric.png";
import mininterior from "../../assets/mininterior.png";
import minlands from "../../assets/minlands.png";
import jocust from "../../assets/jaramogi.png";
import kpa from "../../assets/kpa.png";
import ketraco from "../../assets/ketraco.png";
import { useEffect } from "react";
import { useRef } from "react";

const Partners = () => {
	const partners = [
		{ id: "minwater", src: minwater, name: "Ministry of Water" },
		{ id: "minagric", src: minagric, name: "Ministry of Agriculture" },
		{ id: "mininterior", src: mininterior, name: "Ministry of Interior" },
		{ id: "minlands", src: minlands, name: "Ministry of Lands" },
		{
			id: "jocust",
			src: jocust,
			name: "Jaramogi Oginga Odinga University of Science and Technology",
		},
		{ id: "kpa", src: kpa, name: "Kenya Ports Authority" },
		{
			id: "ketraco",
			src: ketraco,
			name: "Kenya Electricity Transmission Company",
		},
	];
	const extendedPartners = [
		{ id: "minwater", src: minwater, name: "Ministry of Water" },
		{ id: "minagric", src: minagric, name: "Ministry of Agriculture" },
		{ id: "mininterior", src: mininterior, name: "Ministry of Interior" },
		{ id: "minlands", src: minlands, name: "Ministry of Lands" },
		{
			id: "jocust",
			src: jocust,
			name: "Jaramogi Oginga Odinga University of Science and Technology",
		},
		{ id: "kpa", src: kpa, name: "Kenya Ports Authority" },
		{
			id: "ketraco",
			src: ketraco,
			name: "Kenya Electricity Transmission Company",
		},
	];

	const slideRef = useRef();
	const totalSlides = partners.length * 3;
	const visibleSlides = 5;

	useEffect(() => {
		const interval = setInterval(() => {
			let newTransformValue = parseInt(
				slideRef.current.style.transform
					.replace("translateX(", "")
					.replace("%)", ""),
				10
			);
			if (newTransformValue === -(100 * (totalSlides / visibleSlides))) {
				slideRef.current.style.transition = "none";
				slideRef.current.style.transform = `translateX(-${
					100 / visibleSlides
				}%)`;
				setTimeout(() => {
					slideRef.current.style.transition = "transform 1s ease-in-out";
					slideRef.current.style.transform = `translateX(-${
						200 / visibleSlides
					}%)`;
				}, 50);
			} else {
				slideRef.current.style.transform = `translateX(${
					newTransformValue - 100 / visibleSlides
				}%)`;
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [totalSlides]);

	return (
		<div className='partners-container'>
			<div className='partner-logos' ref={slideRef}>
				{extendedPartners.map((partner, index) => (
					<div className='slide' key={index}>
						<img src={partner.src} alt={partner.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Partners;
