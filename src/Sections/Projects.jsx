import React from 'react';
import ProjectsSection from '../component/ProjectCard';

function Projects() {
    return (

        <div className="my-20 text-center pb-32 text-textColor border-b-2" id='projects'>
            <h2 className="text-4xl  mb-10 gradient">PROJECTS</h2>
            <ProjectsSection />
        </div>

    );
}

export default Projects;