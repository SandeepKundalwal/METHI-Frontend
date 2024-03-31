import {Todo, Progress, Done} from "./index.js"

const MidColumn = () => {
    return (
        <>
            <div className="w-full">
                {/* Content of the left column */}
                Project METHI Board

                <div className="flex flex-wrap flex-grow justify-between">
                    <div className="w-full bg-slate-200 lg:w-1/3 p-4">
                        <Todo />
                    </div>

                    <div className="w-full bg-slate-300 lg:w-1/3 p-4">
                        <Progress />
                    </div>

                    <div className="w-full bg-slate-400 lg:w-1/3 p-4">
                        <Done />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MidColumn;