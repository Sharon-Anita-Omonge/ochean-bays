import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<Slider {...settings} className='slider'>
			<div>
				<h3>Dependable Staff</h3>
				<p>
					Ochean Bays Investment Limited has been more than a developer in the
					JOCUST gabion project—they have acted as a true partner. The MD, vice
					MD of operations, project manager and superintendent at the company
					all rolled up their sleeves and sought solutions instead of
					sidestepping substantial complications"
				</p>
				<h5>
					Micah Origa
					<br />
					Administration and Human Resources
				</h5>
			</div>
			<div>
				<h3>Excellent Cleaners</h3>
				<p>
					"The quality of cleaning is excellent. They are dependable. A morning
					appointment is very important to me and they always keep that time
					frame. I also feel very confident that my office is secure during
					their visits. Ochean Bays is not inexpensive but the quality of
					service and peace of mind is worth the extra expense I may pay."
				</p>
				<h5>
					Pretty Kirui
					<br />
					Small Business Owner
				</h5>
			</div>
			<div>
				<h3>Professional from start to finish</h3>
				<p>
					"Working with Ochean Byas Investment Limited has been a game-changer
					for our large corporation. Their meticulous attention to detail,
					punctuality, and exceptional customer service set them apart. From
					spotless offices to pristine common areas, they consistently exceed
					our expectations. Their reliability and professionalism make them an
					invaluable partner. I highly recommend Ochean Bays Investment to any
					big company seeking top-tier cleaning services."
				</p>
				<h5>
					Manager
					<br />
					Kenya Ports Authority
				</h5>
			</div>
		</Slider>
	);
};

export default TestimonialCarousel;
