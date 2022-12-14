import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ModalDateReservation({ CarId, disponibilite }) {
    const [show, setShow] = useState(false);
    const [Date, setDate] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    const handleDateReservation = (e) => {
        setDate({ ...Date, [e.target.name]: e.target.value });
    };
    const handleReserve = () => {
        if (!token) {
            navigate("/connecter");
        }
        axios
            .post(`/api/reservation_car/${CarId}/${idUser}`, Date, {
                headers: {
                    jwt: token,
                },
            })
            .then((res) => {
                handleClose();
            })
            .catch((err) => console.dir(err));
    };
    return (
        <div>
            {disponibilite ? (
                <Dropdown.Item variant="light" onClick={handleShow}>
                    Réserver
                </Dropdown.Item>
            ) : (
                <Dropdown.Item variant="light">
                    impossible de réserver
                </Dropdown.Item>
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form
                        onChange={(e) => {
                            handleDateReservation(e);
                        }}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>Date de début </Form.Label>
                            <Form.Control
                                type="date"
                                name="dateDebutLocation"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date fin </Form.Label>
                            <Form.Control type="date" name="dateFinLocation" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleReserve();
                        }}
                        //   onClick={handleClose}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default ModalDateReservation;
