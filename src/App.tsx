import Sidebar from "@comps/Sidebar";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-[1500px] mx-auto bg-primary">
        <Sidebar />
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
