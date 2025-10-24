import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

const projectsData = [
    // Mantenha seus dados aqui
    { title: "BeDigital", description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Facilisis bix, facilisis biro.", tags: ["WEBSITE", "FIGMA", "CSS"] },
    { title: "ReDesign Apps", description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Facilisis bix, facilisis biro.", tags: ["WEBSITE", "FIGMA", "CSS"] },
    { title: "BeDigital", description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Facilisis bix, facilisis biro.", tags: ["WEBSITE", "FIGMA", "CSS"] },
    { title: "Cloning Website", description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Facilisis bix, facilisis biro.", tags: ["WEBSITE", "FIGMA", "CSS"] }
];

const Projects = () => {
    return (
        <section id="projetos" className="container">
            <h2 className="section-title">Projetos</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;