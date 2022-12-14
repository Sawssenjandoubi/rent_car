import React from "react";
import { Card, Col, Button, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function GetMyreservationItem({_id}) {
 
    const navigate = useNavigate();
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");
   
    const handleBuy = () => {
        if (!token) {
            navigate("/connecter");
        }
        axios
            .post(
                `/api/reservation_car?id=${_id}&userId=${idUser}`,
                {},
                {
                    headers: {
                        jwt: token,
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.dir(err));
    };
    return (
        <Col>
            <Card id="card-item">
                <div id="dorpdown">
                    <Button
                        id="dropdown-button-drop"
                        variant="light"
                       
                    >
                       annuler
                    </Button>
                </div>
                <div>
                    {/* <Card.Img
                        id="card-image"
                        variant="top"
                        src={img}
                        width="150"
                    /> */}
                    <Card.Body>
                        {/* <Card.Title>{type}  </Card.Title>
                        <Card.Subtitle> {prix} TND </Card.Subtitle> */}
                       
                       
                    </Card.Body> 
                </div>
            </Card>
        </Col>
    );
}

export default GetMyreservationItem;