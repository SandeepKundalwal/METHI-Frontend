import { Todo, Progress, Done } from "./index.js"
import { todos, inprogress, done } from "../../constants";

const MidColumn = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="py-4 px-4 font-semibold text-[30px] font-montserrat text-black">
                METHI Project
            </div>

            {/* Columns Container */}
            <div className="flex flex-grow justify-between">
                
                {/* TODO Column */}
                <div className="w-1/3 ml-4 mt-2 mr-2">
                    <div className="bg-todo flex-grow">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            To Do
                        </div>
                    </div>

                    <div className="bg-card p-2">
                        {todos.map((todo) => {
                            return (
                                <div key={todo.id} className="block m-1 max-w-sm p-6  border border-black rounded-lg shadow hover:bg-sidebar dark:bg-card dark:border-gray-700 dark:hover:bg-todo cursor-pointer">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{todo.title}</h5>
                                    <p className="font-normal text-black dark:text-black">{todo.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-inprogress">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            {/* Content of the In Progress column */}
                            In Progress
                        </div>
                    </div>

                    <div className="bg-card p-2">
                    {inprogress.map((ip) => {
                            return (
                                <div key={ip.id} className="block m-1 max-w-sm p-6  border border-black rounded-lg shadow hover:bg-sidebar dark:bg-card dark:border-gray-700 dark:hover:bg-inprogress cursor-pointer">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{ip.title}</h5>
                                    <p className="font-normal text-black dark:text-black">{ip.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                
                {/* Done Column */}
                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-done ">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            {/* Content of the Done column */}
                            Done
                        </div>                        
                    </div>

                    <div className="bg-card p-2">
                    {done.map((d) => {
                            return (
                                <div key={d.id} className="block m-1 max-w-sm p-6  border border-black rounded-lg shadow hover:bg-sidebar dark:bg-card dark:border-gray-700 dark:hover:bg-done cursor-pointer">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{d.title}</h5>
                                    <p className="font-normal text-black dark:text-black">{d.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MidColumn;