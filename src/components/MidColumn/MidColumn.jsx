import { Card } from "../index"
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
                    <div className="bg-todo flex-grow">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            To Do
                        </div>
                    </div>

                    <div className="bg-card p-4">
                        {todos.map((card) => {
                            return (
                                <Card key={card.id} card={card} cardColor={'todo'} />
                            )
                        })}
                    </div>
                </div>


                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-inprogress">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            In Progress
                        </div>
                    </div>

                    <div className="bg-card p-4">
                        {inprogress.map((card) => {
                            return (
                                <Card key={card.id} card={card} cardColor={'inprogress'} />
                            )
                        })}
                    </div>
                </div>

                
                {/* Done Column */}
                <div className="w-1/3 ml-2 mt-2 mr-2">
                    <div className="bg-done ">
                        <div className="justify-center items-start font-montserrat text-black text-xl font-semibold p-2">
                            Done
                        </div>                        
                    </div>

                    <div className="bg-card p-4">
                        {done.map((card) => {
                            return (
                                    <Card key={card.id} card={card} cardColor={'done'} />
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MidColumn;