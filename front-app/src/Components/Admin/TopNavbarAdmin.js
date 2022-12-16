import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import notification from '../SectionSvg/notification.svg'
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FiSearch } from "react-icons/fi";

const TopNavbarAdmin = ({setSearch,search}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate('/connecter')
    }
    const handleChange = (e) => {
      setSearch(e.target.value)
     console.log(search)
     
  };
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        
         <div className="search__box" >
          <input
           type="text" 
           placeholder="rechercher par type"
           onChange={(e)=>{handleChange(e)}}
           />
          <span>
            <FiSearch/>
          </span>
        </div> 
        
        <div className="top__nav-right">
          <span className="notification">
            <img src={notification} style={{width:'100%'}}/>
           
          </span>
          <div className="all">
          <div className="profile">
          
            <Link to="">
              <img src="https://tse4.mm.bing.net/th?id=OIP.JwkoOokhFfGdVON3cJiKMQHaEK&pid=Api&P=0" alt="" />
              <span className="badge" style={{color:'green'}}>.</span>
              
            </Link>
            
          </div>
         
          
        </div>
      </div>
      <div className="dropdown" style={{width:'11%'}} >
      <Navbar > 
        <Navbar.Toggle  />
      
            <NavDropdown >
              <NavDropdown.Item onClick={Logout}>Se dèconnecter</NavDropdown.Item> 
            </NavDropdown>
        
        </Navbar>
            </div>
            </div>
    </div>
  );
};

export default TopNavbarAdmin;