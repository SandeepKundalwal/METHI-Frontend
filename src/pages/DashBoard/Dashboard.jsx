import { LeftColumn, MidColumn, RightColumn } from "../../components/";

const Dashboard = () => {
    return (
        <section className="flex flex-col flex-grow">
            {/* Side-Bar Section */}
            <div className="flex flex-grow">

            
                <div className="w-1/4 bg-sidebar flex-grow">
                    <LeftColumn />
                </div>    

                <div className="bg-white flex-grow">
                    <MidColumn />
                </div>
                    
                <div className="w-1/4 bg-white flex-grow">
                    <RightColumn />
                </div>
            </div>
        </section>
    )
}

export default Dashboard;