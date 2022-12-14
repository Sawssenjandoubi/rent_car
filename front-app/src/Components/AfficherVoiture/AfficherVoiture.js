import React, { useState, useEffect, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { Button, Form, Modal, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
function AfficherVoiture({ title, owner, text, photos, _id, userId, createdAt }) {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    //LOCAL STATE
    const [updatedBlog, setUpdatedBlog] = useState({});
    const [show, setShow] = useState(false);
    //CLOSE MODAL
    const handleClose = () => setShow(false);
    //CLOSE SHOW
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setUpdatedBlog({ ...updatedBlog, [e.target.name]: e.target.value });
    };
    const handelUpdateBlog = () => {
        axios
            .put(
                `https://gmc-blog.herokuapp.com/api/user/blog/update?id=${_id}`,
                updatedBlog,
                {
                    headers: {
                        jwt: token,
                    },
                }
            )
            .then((res) => {
                res && handleClose();
            });
    };
    const handleDelete = () => {
        axios
            .delete(`/api/user/blog/delete?_id=${_id}`, {
                headers: {
                    jwt: token,
                },
            })
            .then((res) => {
                toast.dark(`${res.data.message} ✔️`);
            })
            .catch((err) => console.dir(err));
    };
    const date = createdAt.slice(0, 10);
    const hour = createdAt.slice(11, 16);
    const [width, setWidth] = useState(0);
    const carrousel = useRef();
    useEffect(() => {
        setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    }, []);
    return (
        <div>
            <Col>
                <Card style={{ minHeight: " 364px" }}>
                    {id === userId && (
                        <div id="drop-btn">
                            <DropdownButton
                                id={`dropdown-button-drop`}
                                size="sm"
                                variant="light"
                                title=""
                            >
                                <Dropdown.Item
                                    eventKey="1"
                                    onClick={() => {
                                        handleShow();
                                    }}
                                >
                                    Update Blog
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item
                                    eventKey="2"
                                    onClick={() => {
                                        handleDelete();
                                    }}
                                >
                                    Delete Blog
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                    )}

                    <div>
                        <motion.div ref={carrousel} className="carrousel">
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                whileTap={{ cursor: "grabbing" }}
                                className="inner-carrousel"
                            >
                                {photos.map((photo) => {
                                    return (
                                        <motion.div
                                            className="blog-item-image"
                                            key={photo.url}
                                        >
                                            <Card.Img
                                                className="img"
                                                variant="top"
                                                bsPrefix="card-img"
                                                src={photo.url}
                                                alt="image-house"
                                                style={{
                                                    objectFit: "cover",
                                                    cursor: "zoom-in",
                                                }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>

                    <Card.Body>
                        <Card.Title as="h4">{title}</Card.Title>
                        <Card.Subtitle as="h6">{owner}</Card.Subtitle>
                        <br />
                        <Card.Text as="q">
                            {text.slice(0, 100)}...
                            <Card.Link as={Link} to={`/blog/${_id}`}>
                                read more
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {date} at {hour}&nbsp;
                    </Card.Footer>
                </Card>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    >
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Blog's Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="write yor blog's name here"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Image : </Form.Label>
                            <Form.Control
                                type="text"
                                name="imgUrl"
                                placeholder="paste your image url here"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Blog :</Form.Label>
                            <Form.Control name="text" as="textarea" rows={5} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelUpdateBlog}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AfficherVoiture