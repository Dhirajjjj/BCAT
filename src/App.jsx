import Mainlayout from "./layout/mainlayout";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Taskboard from "./pages/Taskboard";
import Tabs from "./components/Tabs";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" component={<Mainlayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task-board" element={<Taskboard />} />
          <Route path="/people" element={<Users />} />
        </Routes>
        <Tabs />
    </>
  );
}

export default App;

