import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import notification from '../SectionSvg/notification.svg'
import search from "../SectionSvg/search.svg"
import { FiSearch } from "react-icons/fi";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalChangePassProvider from '../ModalChangePassProvider/ModalChangePassProvider'
const TopNav = ({setSearch,search}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            {/* <img src={search}/> */}
            <FiSearch/>
          </span>
        </div>
        
        <div className="top__nav-right">
          <span className="notification">
            <img src={notification} style={{width:'100%'}}/>
            {/* <span className="badge" >1</span>  */}
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
              <div >
             
              
        <ModalChangePassProvider/>
      
              </div>
            </NavDropdown>
        
        </Navbar>
            </div>
            </div>
    </div>
  );
};

export default TopNav;