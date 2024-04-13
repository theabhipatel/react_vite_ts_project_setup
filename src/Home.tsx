import { Route, Routes } from "react-router-dom";
import Dashboard from "@screens/dashboard/Dashboard";
import Whiteboard from "@screens/whiteboard/Whiteboard";
import Login from "@screens/login/Login";

const Home = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/whiteboard" element={<Whiteboard />} />
    </Routes>
  );
};
export default Home;
