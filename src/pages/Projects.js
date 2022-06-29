import TopBanner from "../components/projects/TopBanner";
import Project from "../components/projects/Project";

const Projects = () => {
	const projects = [
		{
			name: "Chirp",
			img: "./img/social.webp",
			siteUrl: "/",
			githubUrl: "https://github.com/benleem/chirp",
			desc: "Chirp is a social media website built with tools like NextJs",
		},
		{
			name: "Google Earth Clone",
			img: "./img/earth.webp",
			siteUrl: "https://goggle-earth.netlify.app/",
			githubUrl: "https://github.com/benleem/threejs-test",
			desc: "Example",
		},
		{
			name: "Crypto Snapshot",
			img: "./img/crypto.webp",
			siteUrl: "https://cryptosnapshot.netlify.app/",
			githubUrl:
				"https://github.com/benleem/crypto_snapshot/tree/main/cryptosnapshot",
			desc: "Example",
		},
		{
			name: "Portfolio",
			img: "./img/portfolio.webp",
			siteUrl: "/",
			githubUrl: "https://github.com/benleem/portfolio-v2",
			desc: "Example",
		},
	];

	return (
		<div className="Projects">
			<TopBanner title="My Projects" />
			<div className="projects-container">
				{projects.map((project, index) => (
					<Project
						key={index}
						name={project.name}
						img={project.img}
						siteUrl={project.siteUrl}
						githubUrl={project.githubUrl}
						desc={project.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
