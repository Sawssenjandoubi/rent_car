import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function ModalChangePassProvider({
  showPasswordModal,
  handleClosePasswordModal,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newPasswordObj, setNewPasswordObj] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPasswordObj({
      ...newPasswordObj,
      [e.target.name]: e.target.value,
    });
  };
  let id = localStorage.getItem("id");
  const Logout = () => {
    localStorage.clear();
    navigate('/connecter')
    }
  const handleSaveNewPassword = () => {
    swal({
      title: "vous-êtes sûr?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        axios
          .put(`/api/updateProviderPass/${id}`, newPasswordObj)
          .then((res) => {
            if (res) {
              swal(res.data.message, "", "success").then(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("isProvider");
                localStorage.removeItem("id");
                handleClosePasswordModal();
                navigate("/connecter");
              });
            }
          })
          .catch((err) => {
            console.dir(err);
            setError(err.response.data.error);
          });
      } else {
        handleClosePasswordModal();
      }
    });
  };

  return (
    <div>
      <Navbar>
        <div>
          <NavDropdown.Item onClick={handleShow}>
            Changer le passe
          </NavDropdown.Item>
          <NavDropdown.Item onClick={Logout}>Se dèconnecter</NavDropdown.Item>
        </div>
        <Modal show={show} onHide={handleClose}>
          {/* <Modal show={showPasswordModal} onHide={handleClosePasswordModal}> */}
          <Modal.Header closeButton>
            <Modal.Title>Changer Mot de passe</Modal.Title>
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
                <Form.Label controlId="floatingPassword" label="New Password">
                  <Form.Control
                    type="password"
                    placeholder="Nouveau mot de passe"
                    autoFocus
                    autocomplete
                    name="newPassword"
                  />
                </Form.Label>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label
                  controlId="floatingPassword"
                  label="Confirm New Password"
                >
                  <Form.Control
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirmer votre nouveau mot de passe"
                    autocomplete
                  />
                </Form.Label>
              </Form.Group>
            </Form>
            {error && <Form.Text style={{ color: "red" }}>{error}</Form.Text>}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button
                    variant="secondary"
                    onClick={() => {
                        handleClosePasswordModal();
                    }}
                >
                    Close
                    </Button> */}
            <Button
              variant="primary"
              onClick={() => {
                handleSaveNewPassword();
              }}
            >
              Sauvegarder
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </div>
  );
}

export default ModalChangePassProvider;
