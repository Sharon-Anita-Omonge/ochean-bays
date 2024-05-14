import React from "react";
import "./HeroSlider.css";
import Slider from "react-slick";
import cleaning from "../../assets/clean1.jpeg";
import painting from "../../assets/inducat.jpeg";
import road from "../../assets/road5.webp";
import plant from "../../assets/hplant.jpeg";
import kisima from "../../assets/kisima5.jpeg";

const HeroSlider = () => {
	const images = [cleaning, painting, plant, kisima, road];
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		centerMode: false,
		centerPadding: "0px",
	};

	return (
		<div className='hero-slider' style={{ overflowX: "hidden" }}>
			<div className='about-hero'>
				<h1 className='about-title container'>WELCOME HOME</h1>
				<div className='overlay'></div>
				<Slider {...settings} style={{ overflowX: "hidden" }}>
					{images.map((image, index) => (
						<div key={index}>
							<img src={image} alt={`Slide ${index}`} className='about-image' />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default HeroSlider;
