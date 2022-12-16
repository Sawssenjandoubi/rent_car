import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap'
import './style.css'
function GetAllCarItem({ type, prix, kilometrage, image, disponibilite,_id}) {
    
    return (
        <div className="row">
        <Col
        //  style={{display:'flex',justifyContent:'center',alignItems:'center',float:'left'}}
         >
            <Card id="card-item">
            
                <div>
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
                    </div>
                    <Card.Body >
                        <Card.Title>Type : {type}</Card.Title>
                        <Card.Subtitle>Prix : {prix} TND/jour </Card.Subtitle>
                        <Card.Text style={{fontWeight:'bold'}}>Kilométrage : {kilometrage} Km</Card.Text>
                        {disponibilite === "oui" ? (
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
        </div>
    );
}

export default GetAllCarItem;