import React, { useContext } from "react";
import "./style.css";
import 'bootstrap';
import { ImUsers } from "react-icons/im";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MdOutlineAdd,MdDashboard,MdOutlineHomeRepairService} from "react-icons/md"

const SidebarAdmin = () => {
  
  return (
    <div className="sidebar">
      
      <div className="menu">
        <ul className="nav__list">
        
          <li className="nav__item">
            <Link to={"/allcarsForAdmin "}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                
              <MdDashboard/>
              </span>
              <h5 style={{ color: "white", textAlign: "center" ,fontWeight:"bold",margin:'10px'}}>
                
               Dashboard {" "} {" "}
              </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/GetAllProvider "}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                  <ImUsers />
              </span>
              <h5 style={{ color: "white", textAlign: "center" ,margin:'10px' ,fontWeight:"bold"}}>
                Locateurs
              </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/GetAllUser"}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                
              <ImUsers />
              </span>
              <h5 style={{ color: "white", textAlign: "center",fontWeight:"bold",margin:'10px' }}>Utilisateurs</h5>
            </Link>
          </li>
        </ul>
     
      </div>
    </div>
  );
};
export default SidebarAdmin;
