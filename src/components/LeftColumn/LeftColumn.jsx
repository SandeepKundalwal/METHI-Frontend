import { NavLink } from "react-router-dom";
import { projects } from "../../constants";
import { useState, useEffect } from "react";

const LeftColumn = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    // const [projects, setProjects] = useState([]);

    // useEffect = (() => {
    //     const fetchProjects = async () => {
    //         try {
    //           const response = await axios.get('/projects');
    //           setProjects(response.data);
    //         } catch (error) {
    //           console.error('Error fetching projects:', error);
    //         }
    //       };
      
    //       fetchProjects();
    // }, [])

    // const handleProjectClick = async () => {
    //     try {
    //         // Fetch data related to the selected project from the database
    //         const response = await axios.get(`/projects/${projectId}`);
    //         const projectData = response.data;
      
    //         setSelectedProject(projectData);
    //     } catch (error) {
    //         console.error('Error fetching project data:', error);
    //     }
    // };

    const handleProjectClick = (projectId) => {
        projects.forEach(function (item) {
            if(item.id === projectId){
                setSelectedProject(item);
            }
        });
    }

    return (
        <div className="flex justify-center py-8">
            <ul className="font-montserrat justify-center items-center">
                {projects.map((project) => {
                    return (
                    <li 
                        key={project.id}
                        className={`py-6 text-xl ${selectedProject && project.id === selectedProject.id ? 'text-black font-bold' : 'text-gray-600 font-semibold'} cursor-pointer`}
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