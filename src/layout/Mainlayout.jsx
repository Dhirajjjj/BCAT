import {Outlet, Navigate} from 'react-router-dom';

import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

function Mainlayout() {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                    <Navigate from="/" to="/dashboard"/> 
                </main>
                </div>
            </div>    
        </div>
    );
}

export default Mainlayout;