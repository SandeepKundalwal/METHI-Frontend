import { LeftColumn, MidColumn, RightColumn } from "../../components/";

const Dashboard = () => {
    return (
        <section className="h-full w-full">
            {/* Side-Bar Section */}
            <div className="flex flex-grow">
                <div className=" bg-sidebar w-full lg:w-1/4">
                    <LeftColumn />
                </div>
                

                <div className="w-full lg:w-2/4 bg-white p-4">
                    <MidColumn />

                    
                </div>
                
                <div className="w-full lg:w-1/4 bg-white p-4">
                    <RightColumn />
                </div>
            </div>
        </section>

        // <section>Hello</section>
    )
}

export default Dashboard;