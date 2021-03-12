import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./card.css";

function Card(props) {
	const [name] = useState(props.name || "Your Name");
	const [branch] = useState(props.branch || "Your branch");
	const [github] = useState(props.github || "github-id");
	const [linkedin] = useState(props.linkedin || "linkedin-id");

	return (
		<div className="profile-card" key={props.id}>
			<div className="upper-container">
				<div className="image-container">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3umoGu1IEy0NajIE-eEeva--aJwQlgJZa-w&usqp=CAU"
						alt=""
					/>
				</div>
			</div>
			<div className="lower-container">
				<h3>{name}</h3>
				<h4>{branch}</h4>

				<div className="icon-container">
					<a href={github} target="_blank" rel="noreferrer noopener">
						<FaGithub className="icon-links fa-2x github-icon" />
					</a>
					<a href={linkedin} target="_blank" rel="noreferrer noopener">
						<FaLinkedin className="icon-links fa-2x linkedin-icon" />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Card;
