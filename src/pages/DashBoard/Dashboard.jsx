import { LeftColumn, MidColumn, RightColumn } from "../../components/";

const Dashboard = () => {
    return (
        <section className="flex flex-grow">
            {/* Side-Bar Section */}
            <div className="w-1/5 bg-sidebar">
                <LeftColumn />
            </div>    

            <div className="flex-grow bg-white">
                <MidColumn />
            </div>
                
            <div className="w-1/5 bg-white">
                <RightColumn />
            </div>
        </section>
    )
}

export default Dashboard;