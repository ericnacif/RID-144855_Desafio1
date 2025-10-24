// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion'; // 1. Importe o motion
import './ProjectCard.css';
import projectImage from '../../assets/project-placeholder.png';

const ProjectCard = ({ title, description, tags }) => {
    return (
        // 2. Troque 'div' por 'motion.div' e adicione as propriedades de animação
        <motion.div
            className="project-card"
            whileHover={{ y: -10, scale: 1.02 }} // y: -10 move 10px para cima
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src={projectImage} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;