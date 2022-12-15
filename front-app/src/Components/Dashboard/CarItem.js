import React, { useState } from "react";
import { Card, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CardProviderReservation from "./CardProviderReservation";

// import './style.css'
function CarItem({ type, image, kilometrage, prix, disponibilite, _id }) {
    const [show, setShow] = useState(false);
    const handleDelete = () => {
        axios
            .delete(`/api/delete_car/${_id}`)
            .then((res) => console.log(res))
            .catch((err) => console.dir(err));
    };
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <div>
            <Col style={{ marginTop: "50px" }}>
                <Card id="card-item">
                    <div id="dorpdown">
                        <DropdownButton
                            id="dropdown-button-drop"
                            size="sm"
                            variant="light"
                            title=""
                        >
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to={`/UpdateCar/${_id}`}
                            >
                                Modifier
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                                eventKey="2"
                                onClick={() => {
                                    handleDelete();
                                }}
                            >
                                Supprimer
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <Card.Img
                            id="card-image"
                            variant="top"
                            src={image}
                            width="150%"
                        />
                        <Card.Body>
                            <Card.Subtitle
                                style={{ textAlign: "center", margin: "20px" }}
                            >
                                Type : {type}
                            </Card.Subtitle>
                            <Card.Subtitle
                                style={{ textAlign: "center", margin: "20px" }}
                            >
                                Prix : {prix} TND/jour{" "}
                            </Card.Subtitle>
                            {/* <Card.Text>Disponibilité : {disponibilite}</Card.Text> */}
                            <Card.Subtitle
                                style={{ textAlign: "center", margin: "20px" }}
                            >
                                kilométrage : {kilometrage}
                            </Card.Subtitle>
                            {disponibilite ? (
                                <Card.Footer
                                    style={{
                                        color: "green",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Disponible
                                </Card.Footer>
                            ) : (
                                <Card.Footer
                                    style={{ color: "red", fontWeight: "bold" }}
                                >
                                    non disponible
                                </Card.Footer>
                            )}
                            <Button variant="dark" onClick={() => handleShow()}>
                                {show ? "Hide" : "Show"}
                            </Button>
                            {show ? (
                                <CardProviderReservation carid={_id} />
                            ) : null}
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
}
export default CarItem;
