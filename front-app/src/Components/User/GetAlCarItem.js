import React, { useState } from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ModalDateReservation from "./ModalDateReservation";
function GetAlCarItem({ type, prix, kilometrage, image, disponibilite, _id }) {
    const navigate = useNavigate();
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col>
            <Card id="card-item">
                <div>
                    <DropdownButton
                        id="dropdown-button-drop"
                        size="sm"
                        variant="light"
                        title=""
                    >
                        <ModalDateReservation
                            CarId={_id}
                            disponibilite={disponibilite}
                        />
                        <Dropdown.Item eventKey="1"></Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    <Card.Img
                        id="card-image"
                        variant="top"
                        src={image}
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>{type}</Card.Title>
                        <Card.Subtitle> {prix} TND/Jour </Card.Subtitle>
                        <Card.Text>{kilometrage} Km</Card.Text>
                        {disponibilite ? (
                            <Card.Footer
                                style={{ color: "green", fontWeight: "bold" }}
                            >
                                Disponible
                            </Card.Footer>
                        ) : (
                            <Card.Footer
                                style={{ color: "red", fontWeight: "bold" }}
                            >
                                Non Disponible
                            </Card.Footer>
                        )}
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
}

export default GetAlCarItem;
