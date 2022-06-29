import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ name, img, siteUrl, githubUrl, desc }) => {
	return (
		<div className="project">
			<div className="project-card">
				<img src={img} alt="project" />
				<div className="centered-items">
					<p className="project-name">{name}</p>
					<p className="description">{desc}</p>
					<div className="links">
						<a href={siteUrl} target="_blank" rel="noreferrer">
							Live Site
						</a>
						<a href={githubUrl} target="_blank" rel="noreferrer">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
