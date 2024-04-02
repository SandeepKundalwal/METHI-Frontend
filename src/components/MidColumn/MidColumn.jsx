import { Card } from "..";
import { todos, inprogress, done } from "../../constants";

const MidColumn = () => {
    return (
        <div className="w-full flex flex-col p-4">
            <div className="py-4 px-4 font-semibold text-[30px] font-montserrat text-black">
                METHI Project
            </div>

            {/* Columns Container */}
            <div className="flex flex-grow justify-between">
                
                {/* TODO Column */}
                <div className="w-1/3 ml-4 mt-2 mr-2">
                    <div className="bg-dark-blue flex-grow">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            To Do
                        </div>
                    </div>

                    <div className="bg-card p-4">
                        {todos.map((card) => (
                            <div key={card.id} className={`block m-1 max-w-sm p-6 rounded-lg shadow dark:bg-white bg-white hover:bg-dark-blue cursor-pointer`}>
                                <h5 className="mb-2 text-xl font-montserrat font-bold tracking-tight text-black dark:text-black">{card.title}</h5>
                                <p className="font-montserrat text-[14px] text-black dark:text-black">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-light-purple">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            In Progress
                        </div>
                    </div>

                    <div className="bg-card p-4">
                        {inprogress.map((card) => (
                            <div key={card.id} className={`block m-1 max-w-sm p-6 rounded-lg shadow dark:bg-white bg-white hover:bg-light-purple cursor-pointer`}>
                                <h5 className="mb-2 text-xl font-montserrat font-bold tracking-tight text-black dark:text-black">{card.title}</h5>
                                <p className="font-montserrat text-[14px] text-black dark:text-black">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
                {/* Done Column */}
                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-light-green">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            Done
                        </div>                        
                    </div>

                    <div className="bg-card p-4">
                        {done.map((card) => (
                            <div key={card.id} className={`block m-1 max-w-sm p-6 rounded-lg shadow dark:bg-white bg-white hover:bg-light-green cursor-pointer`}>
                                <h5 className="mb-2 text-xl font-montserrat font-bold tracking-tight text-black dark:text-black">{card.title}</h5>
                                <p className="font-montserrat text-[14px] text-black dark:text-black">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MidColumn;