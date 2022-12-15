import React, { useContext ,useState  } from "react";
import "./style.css";
import 'bootstrap';
import { ImUsers } from "react-icons/im";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MdOutlineAdd,MdDashboard,MdOutlineHomeRepairService} from "react-icons/md"

const SidebarUser = () => {
 
  return (
    <div className="sidebar">
      
      <div className="menu">
        <ul className="nav__list">
          {/* <li className="nav__item">
            <Link to={"/allcar"}>
              <span style={{ color:"white"}}>
                <MdDashboard/>
              </span>
              <h5 style={{ color:"white", textAlign: "center" }}>
              {" "}
                 Dashboard {" "}</h5>
            </Link>
          </li> */}
          <li className="nav__item">
            <Link to={"/DashboardForUser "}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                
              <MdDashboard/>
              </span>
              <h5 style={{ color: "white", textAlign: "center" ,fontWeight:"bold",margin:'10px'}}>
                
               Dashboard {" "} {" "}
              </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/GetMyReservation "}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                  <ImUsers />
              </span>
              <h5 
              style={{ color: "white", textAlign: "center" ,margin:'10px' ,fontWeight:"bold"}}
              
              >
                Consulter Profil
              </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/Changerpass"}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                
              <ImUsers />
              </span>
              <h5 
              style={{ color: "white", textAlign: "center",fontWeight:"bold",margin:'10px' }}
            
              >
                Modifier pass
              </h5>
            </Link>
          </li>
        </ul>
     
      </div>
    </div>
  );
};
export default SidebarUser;
