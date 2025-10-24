import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import ExperienceList from '../../components/ExperienceList/ExperienceList';
import './About.css';
import { FaPaintBrush, FaCode, FaReact, FaWordpress } from 'react-icons/fa';
import { motion } from 'framer-motion';

const personalInfo = {
    name: "Eric Nacif",
    bio: `I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my home office, in a quiet interior of São Paulo, Brazil.`,
    links: {
        instagram: "https://instagram.com/seuperfil",
        github: "https://github.com/ericnacif",
        email: "mailto:naciferic7@gmail.com"
    }
};
const skillsData = [
    { icon: <FaPaintBrush />, title: "Interface & Design", description: "Briefing, wireframe, UI, UX e branding." },
    { icon: <FaCode />, title: "HTML & CSS", description: "Responsive websites with fast loading." },
    { icon: <FaReact />, title: "React.js", description: "Build your system with modernjs." },
    { icon: <FaWordpress />, title: "WordPress", description: "Create your e-commerce and blog with PHP." }
];
const experienceListsData = {
    hadExperiences: {
        title: "I've had experiences with",
        items: ["Firebase Database", "MySQL Database", "GIT, GitHub, Bitbucket", "Coding PHP", "Figma, Adobe XD, Sketch", "CSS Preprocessors", "Digital Marketing", "Coding Python (Django)"]
    },
    haveYearsExperience: {
        title: "I have years of experience with",
        items: ["Coding HTML5", "Coding CSS3", "Coding WordPress", "Coding JavaScript", "Using Elementor", "Using Adobe Package", "Creating Brand and Logo", "Creating User Interface"]
    },
    workAndStudy: {
        title: "I work and study about",
        items: ["Coding React.js", "Coding CSS3", "Coding JavaScript", "Studying TypeScript", "Studying Node.js basics", "Studying API RESTful", "Studying User Experience"]
    }
};

const About = () => {
    return (
        <section id="sobre" className="container about-section">
            <div className="about-header-content">
                <h2 className="section-title">Sobre mim</h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="about-bio"
                >
                    <h3>{personalInfo.name}</h3>
                    <p>{personalInfo.bio}</p>
                    <div className="about-links">
                        <a href={personalInfo.links.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a href={personalInfo.links.email}>EMAIL</a>
                    </div>
                </motion.div>
            </div>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </div>
            <div className="experience-lists-grid">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <ExperienceList {...experienceListsData.hadExperiences} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <ExperienceList {...experienceListsData.haveYearsExperience} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <ExperienceList {...experienceListsData.workAndStudy} />
                </motion.div>
            </div>
        </section>
    );
};
export default About;