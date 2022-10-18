import Introduction from "./Introduction";
import Skills from "./Skills";
import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="about-container">
				<Introduction />
				<Skills />
				{"Hello"}
			</div>
		</div>
	);
};

export default About;
