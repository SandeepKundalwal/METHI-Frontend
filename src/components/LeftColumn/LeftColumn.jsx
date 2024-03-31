import { projectSideTabs } from "../../constants";

const LeftColumn = () => {
    return (
        <div className="flex justify-center py-8">
            {/* Content of the left column */}
            <ul className="font-palanquin items-center">
                {projectSideTabs.map((project) => {
                    return (<li 
                                key={project.id}
                                className="py-6 text-xl text-gray-600 hover:text-black hover:font-bold font-semibold cursor-pointer"
                            >
                        {project.label}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default LeftColumn;