import React from "react";
import { Line } from "react-chartjs-2";
import "./aboutUs.css";
import Card from "./card";
import { Developers } from "./developers";

function aboutUs() {
	const data = {
		labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
		datasets: [
			{
				label: "No of users",
				data: [100, 210, 298, 312, 400, 450, 600, 728],
				borderColor: ["rgba(255,0,0,1)"],
				backgroundColor: ["rgba(255,255,255,0)"],
				pointColor: ["rgba(255,255,255,0)"],
				pointBackgroundColor: ["rgba(255,255,255,0)"],
			},
		],
	};
	const options = {
		title: {
			dislay: true,
			text: "User count",
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 1000,
						stepSize: 200,
					},
				},
			],
		},
	};

	return (
		<div className="container">
			<div className="main-container">
				<div className="title">
					<h2 className="main-container-heading">About Us</h2>
					<p id="para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						varius sit amet elit quis convallis. Mauris a diam leo. Curabitur
						semper quam eu tortor finibus, id ultrices nisi consequat.
						Vestibulum hendrerit auctor diam a scelerisque. Fusce facilisis
						dapibus mi, non auctor ligula accumsan sit amet. Ut ultricies diam
						vitae leo imperdiet posuere. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Praesent varius sit amet elit quis convallis.
						Mauris a diam leo. Curabitur semper quam eu tortor finibus, id
						ultrices nisi consequat. Vestibulum hendrerit auctor diam a
						scelerisque. Fusce facilisis dapibus mi, non auctor ligula accumsan
						sit amet. Ut ultricies diam vitae leo imperdiet posuere. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Praesent varius sit
						amet elit quis convallis. Mauris a diam leo. Curabitur semper quam
						eu tortor finibus, id ultrices nisi consequat. Vestibulum hendrerit
						auctor diam a scelerisque. Fusce facilisis dapibus mi, non auctor
						ligula accumsan sit amet. Ut ultricies diam vitae leo imperdiet
						posuere.
					</p>
				</div>
				<div className="row">
					<div className="col-md-6 mt-5">
						{" "}
						<Line data={data} options={options} />
					</div>
					<div className="col-md-6 mt-5">
						{" "}
						<Line data={data} options={options} />
					</div>
				</div>
				<h2 className="card-container-heading">Team of developers</h2>
				<div className="card-container">{Developers.map(Card)}</div>
			</div>
		</div>
	);
}

export default aboutUs;
