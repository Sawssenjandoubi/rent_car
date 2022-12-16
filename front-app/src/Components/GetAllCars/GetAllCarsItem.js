import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalDateReservation from "../User/ModalDateReservation"

function GetAllCarsItem({ type, prix, kilometrage, image, disponibilite,_id}) {
    
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
                        <Dropdown.Item
                            eventKey="1"
                          
                        >

                          <ModalDateReservation CarId={_id } disponibilite={disponibilite}/>
                        </Dropdown.Item>
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
                        
                        {disponibilite  ? (
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

export default GetAllCarsItem;