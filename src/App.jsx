import { Header, Dashboard, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

const App = () => (
  <main className="relative">
    
    <Header />

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Outlet />
    </section>

    <section className="padding">
      <Footer />
    </section>

  </main>
);

export default App;