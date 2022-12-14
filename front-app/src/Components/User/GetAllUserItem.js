import React from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import './style.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
    
function GetAllUserItem({ nom,prenom,tel,cin,email,ville,dateNaissance,typePermis,DateObtentionPermis}) {
    
    return (
       
             <Card style={{textAlign:'justify',width:'30%',marginTop:'50px'}}>
             <Card.Header>
                <img 
                src="https://tse4.mm.bing.net/th?id=OIP.JwkoOokhFfGdVON3cJiKMQHaEK&pid=Api&P=0" 
                alt="" 
                className="photo_profile" 
                />
            </Card.Header>
             <ListGroup variant="flush" >
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Nom & Prénom:</span>{nom} {prenom}</ListGroup.Item>
             <ListGroup.Item><span style={{fontWeight:'bold'}}> cin:</span>{cin}</ListGroup.Item>  
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Email:</span>{email} </ListGroup.Item>  
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Numèro de Tèlèphone:</span> {tel}</ListGroup.Item>   
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Ville:</span> {ville}</ListGroup.Item>  
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Date de Naissance:</span>{dateNaissance} </ListGroup.Item>  
             <ListGroup.Item><span style={{fontWeight:'bold'}}>Type de Permis:</span>{typePermis}</ListGroup.Item>  
             <ListGroup.Item><span style={{fontWeight:'bold'}}> Date Obtention du Permis: </span>{DateObtentionPermis}</ListGroup.Item>  
             </ListGroup >
            
            </Card>    
            
        
    );
}

export default GetAllUserItem;