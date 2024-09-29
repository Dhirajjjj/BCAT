
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom

function Sidebar() {
  return (
    <>
      <div id="hs-application-sidebar" className="hs-overlay ...">
        <div className="relative flex flex-col h-full max-h-full">
          <div className="h-full overflow-y-auto ...">
            <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap">
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link className="p-2 flex items-center ..." to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="p-2 flex items-center ..." to="/users">
                    
                    Learning
                  </Link>
                </li>
                <li>
                  <Link className="p-2 flex items-center ..." to="/account">
                    
                    Insights
                  </Link>
                </li>
                <li>
                  <Link className="p-2 flex items-center ..." to="/projects">
                    
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;



