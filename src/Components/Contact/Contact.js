import React from "react";
import "./Contact.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import address from "../../assets/address.png";
import fax from "../../assets/fax.png";
import nextred from "../../assets/nextred.png";
import contact from "../../assets/contact.png";
import { Link } from "react-router-dom";

const Contact = () => {
	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = "tel:+254710466533";
	};
	const handleEmailClick = (event) => {
		event.preventDefault();
		window.location.href = "mailto: info@ocheanbays.com";
	};
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "ccba0077-edda-4e49-896b-049941269f18");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	return (
		<>
			<div className='hero-container container '>
				<div className='hero-text '>
					<h1 className='hero-heading'>
						Feel Free to <span className='highlighted'>Contact</span> Ochean Bay
						Limited
					</h1>
					<p className='hero-subheading'>
						For further information about our company and the services we offer,
						please feel free to email or call us. Ochean Bays Limited is here
						for you.
					</p>
					<div className='hero-buttons'>
						<Link to='/contact'>
							{" "}
							<button className='hero-btn order-btn'>Contact Us</button>{" "}
						</Link>
					</div>
				</div>
				<div className='heroo-image'>
					<img src={contact} alt='Professional team' />
				</div>
			</div>

			<div className='next'>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<img src={nextred} alt='' />
				<Link to='/about'>
					<p>Contact</p>
				</Link>
			</div>
			<div className='contact container'>
				<div className='contact-col text'>
					<h2>Let's Talk!</h2>
					<p>
						Connect with us today! We're here to help with any questions,
						feedback, or inquiries. Contact us via phone, email, or the form
						below. Feel free to visit our office at the address provided.
					</p>
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
							14 Mtitio Andei Road Kilimani <br /> Nairobi, Kenya
						</li>
					</ul>
				</div>
				<div className='contact-col'>
					<form onSubmit={onSubmit}>
						<label> Name</label>
						<input type='text' name='name' placeholder='First Name' required />
						<input type='text' name='name' placeholder='Last Name' required />
						<label>Phone Number</label>
						<input
							type='tel'
							name='phone'
							placeholder='+254 712-345-678'
							required
						/>
						<label>Message</label>
						<textarea
							name='message'
							rows='6'
							placeholder='What can we help you with?'
							required
						/>
						<button type='submit' className='btn dar-btn'>
							{" "}
							Submit Now
						</button>
					</form>
					<span>{result}</span>
				</div>
			</div>
		</>
	);
};

export default Contact;
