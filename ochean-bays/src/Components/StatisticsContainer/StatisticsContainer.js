import React from "react";
import "./StatisticsContainer.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Statistic = ({ value, suffix, description }) => {
	return (
		<div style={{ backgroundColor: "var(--blue)" }}>
			<VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
				{({ isVisible }) => (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "40px",
							width: "150px",
						}}
					>
						<h4>
							{isVisible ? (
								<CountUp
									end={value}
									duration={2}
									style={{ fontSize: "40px" }}
								/>
							) : null}
						</h4>
						<span style={{ fontSize: "40px" }}>{suffix}</span>
					</div>
				)}
			</VisibilitySensor>

			<p>{description}</p>
		</div>
	);
};

const StatisticsContainer = () => {
	return (
		<div className='stat container'>
			<Statistic value={5} suffix='+' description='years of experience' />
			<Statistic value={150} suffix='+' description='projects completed' />
			<Statistic value={200} suffix='+' description='satisfied clients' />
			<Statistic value={50} suffix='+' description='active workers' />
		</div>
	);
};

export default StatisticsContainer;
