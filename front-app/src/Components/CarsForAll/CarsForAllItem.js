import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import ModalDateReservation from "../User/ModalDateReservation"
import "./Style.css"
function CarsForAllItem({ type, prix, kilometrage, image, disponibilite,_id}) {
    const navigate = useNavigate();
    const handleReserve =() =>{
        navigate('/connecter')
    }
    return (
        <Col >
        {/* style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50%'}} */}
            <Card id="card-item" style={{marginRight:'70px'}}>
                {disponibilite ?(
                <div>
            <DropdownButton
                        id="dropdown-button-drop"
                        size="sm"
                        variant="light"
                        title=""
                    >
                        <Dropdown.Item
                            eventKey="1"
                         onClick={handleReserve } 
                        >
                     
                        Réserver
                        </Dropdown.Item>
                       </DropdownButton>
                </div>
                ):
                (
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
                     
                       non disponible
                        </Dropdown.Item>
                       </DropdownButton>
                </div>  
                )
            }
                <div className='petitephoto'>
                    <Card.Img
                        id="card-image"
                        variant="top"
                        src={image}
                        width="150"
                    />
                    <div>
                        <img className='zoomImage' src={image} width='300' height="200"/>
                    </div>
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

export default CarsForAllItem;