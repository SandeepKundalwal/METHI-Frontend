import { projects } from "../../constants";
import { useState, useEffect } from "react";

const LeftColumn = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    }

    return (
        <div className="flex justify-center py-8">
            <ul className="font-montserrat justify-center items-center">
                {projects.map((project) => {
                    return (
                    <li 
                        key={project.id}
                        className={`py-6 text-xl ${selectedProject && project.id === selectedProject ? 'text-black font-bold' : 'text-gray-600 font-semibold'} cursor-pointer`}
                        onClick={() => handleProjectClick(project.id)}
                    >
                        {project.label}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default LeftColumn;