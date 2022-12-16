import React, { useContext } from "react";
import "./style.css";
import 'bootstrap'
import Dashboard from "../SectionSvg/dashboard.svg";
import addcar from "../SectionSvg/addcar.svg";
import parametres from "../SectionSvg/parametres.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MdOutlineAdd,MdDashboard,MdOutlineHomeRepairService} from "react-icons/md"

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className="sidebar__content"> */}
      <div className="menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={"/dashboard"}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                {/* <img className="logo_dashboard" src={Dashboard} style={{fill:"success"}} /> */}
                <MdDashboard/>
              </span>
              <h5  style={{ color: "white", textAlign: "center" ,fontWeight:"bold",margin:'10px'}}> Dashboard </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/addCar"}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                {/* <img className="logo_dashboard" src={addcar} /> */}
                <MdOutlineAdd/>
              </span>
              <h5 style={{ color: "white", textAlign: "center" ,fontWeight:"bold",margin:'10px'}}>
                {" "}
                Ajouter Voiture{" "}
              </h5>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/allcar"}>
              <span style={{ color: "white",margin:'50px',fontSize:'45px'}}>
                {/* <img className="logo_dashboard" src={parametres} /> */}
               <MdOutlineHomeRepairService/>
              </span>
              <h5 style={{ color: "white", textAlign: "center" ,fontWeight:"bold",margin:'10px'}}> Services </h5>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Sidebar;
