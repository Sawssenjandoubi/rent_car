import React, { useState, useEffect } from "react";
import axios from "axios";
import CarItem from "./CarItem";
import GetAllUserItem from "../User/GetAllUserItem";
import { Card, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";
function ReservationDetails({ carId ,disponibilite}) {
    const [userDetails, setUserDetails] = useState();
    const [dateDetails, setDateDetails] = useState();
    useEffect(() => {
        axios
            .get(`/api/get_user_reservation/${carId}`)
            .then((response) => {
                if (response) {
                    console.log(response.data.data);
                    setUserDetails(response.data.data.user);
                    setDateDetails(response.data.data);
                }
            })
            .catch((err) => console.dir(err));
    }, []);

    return (
         <Card id="card-item"
        style={{width:'100%',
               display:'flex',
               justifyContent:'center',
               
            }}
        
        >{!disponibilite ?
            (
            <Card.Body
            style={{
            //    width
             
                textAlign:'justify',
                margin:'80px',
                padding:'0 30px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between'
                
                }}>
            <h5
            //  style={{textAlign:'center',margin:'20px'}}
             >Details</h5>
            <Card.Subtitle >Nom du client :{userDetails?.nom} 
            </Card.Subtitle>
            <Card.Subtitle
           
            > 
            Prénom du client :  {userDetails?.prenom} </Card.Subtitle>
            <Card.Subtitle
             
            >  
            Télèphone : {userDetails?.tel} 
            </Card.Subtitle>
            <Card.Subtitle
           
            > 
             Date dèbut de location:{dateDetails?.dateDebutLocation}
              </Card.Subtitle>
              <Card.Subtitle
             
            > 
             Date fin de location : {dateDetails?.dateFinLocation} 
             </Card.Subtitle>
            </Card.Body>
        ): <h6> Pas encore réservèe </h6> }
        </Card>
    );
}

export default ReservationDetails;
