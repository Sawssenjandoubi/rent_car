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
        <Col>
            {myReservations?.map((reser) => (
                <Card id="card-item">
                    <div id="dorpdown">
                        <Button id="dropdown-button-drop" variant="light">
                            annuler
                        </Button>
                    </div>
                    <div>
                        {reser.car.image.map((img) => (
                            <Card.Img src={img} width="150" />
                        ))}
                        <Card.Body>{reser.dateFinLocation}</Card.Body>
                    </div>
                </Card>
            ))}
        </Col>
    );
}

export default GetMyreservationItem;
