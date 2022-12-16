import React, { useEffect, useState } from "react";
import { Card, Col, Button, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function GetMyreservationItem({ _id }) {
    const navigate = useNavigate();
    const [myReservations, setMyReservations] = useState();
    // console.log(myReservations);
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    const handleRetour=()=>{
        navigate('/DashboardForUser')
    }
    useEffect(() => {
        axios
            .get(
                `/api/my_reservation/${idUser}`,
                {},
                {
                    headers: {
                        jwt: token,
                    },
                }
            )
            .then((res) => {
                if (res) {
                    setMyReservations(res.data.data);
                }
            })
            .catch((err) => console.dir(err));
    }, []);

    return (
        <div>
        <Col>
            {myReservations?.map((reser) => (
                <Card id="card-item">
                    {/* <div id="dorpdown">
                        <Button id="dropdown-button-drop" variant="light">
                            annuler
                        </Button>
                    </div> */}
                    <div>
                        {reser.car.image.map((img) => (
                            <Card.Img src={img} width="150" />
                        ))}
                        
                        <Card.Body
                        style={{textAlign:'justify',
                        padding:'auto',
                        margin:'20px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                        >
                           <h6>Prix : {reser.car.prix}TND/Jour </h6>
                           <h6> Date début de location: {reser.dateDebutLocation} </h6>
                           <h6>Date fin de location: {reser.dateFinLocation}</h6>
                        </Card.Body>
                    </div>
                </Card>
            ))}
        </Col>
        <div
            style={{
            width:'140%',
            margin:'20px',
            padding:'0 30px',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center'
              
              }}
          >
    <Button size="small"
    onClick={handleRetour}  >
       Retour
       </Button>
    </div>
   
        </div>
    );
}

export default GetMyreservationItem;
