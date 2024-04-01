import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

const App = () => (
  <main className="min-h-screen flex flex-col">
    
    <Header />

    {/* <section className="flex-grow"> */}
      <Outlet />
    {/* </section> */}

    <Footer />

  </main>
);

export default App;