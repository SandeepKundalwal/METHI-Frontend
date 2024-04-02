import { useState } from "react";
import { LeftColumn, MidColumn, RightColumn } from "../../components/";

const Dashboard = () => {

    return (
        <section className="flex flex-col flex-grow">
            <div className="flex flex-grow">

                {/* Side-Bar Section */}
                <div className="w-1/4 bg-sidebar flex-grow">
                    <LeftColumn />
                </div>    

                {/* Middle Section */}
                <div className="bg-white flex-grow">
                    <MidColumn />
                </div>
                
                {/* Health Section */}
                <div className="w-1/4 bg-white flex-grow">
                    <RightColumn />
                </div>

            </div>
        </section>
    )
}

export default Dashboard;