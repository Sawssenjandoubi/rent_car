import React , { useEffect, useState }  from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
function UpdateCar() {
    const navigate = useNavigate();
    const [car, setCar] = useState({});
    const [newCarData, setNewCarData] = useState({});
    const [newFile, setNewFile] = useState();
    let { id } = useParams();
    const handleReturn=() =>{
        navigate('/dashboard')
    }
    // useEffect(() => {
    //     axios
    //         .get(`/api/get_user_car/${id}`)
    //         .then((res) => setCar(res.data.car))
    //         .catch((err) => console.dir(err));
    // }, [id]);

    const handleChange = (e) => {
        setNewCarData({
            ...newCarData,
            [e.target.name]: e.target.value,
        });
    };
    const handleFile = (e) => {
        setNewFile(e.target.files);
    };
    const handleUpdateCar = () => {
        let newCarFormData = new FormData();
        if (newCarFormData.type) {
            newCarFormData.append("type", newCarData.type);
        }
        if (newCarData.prix) {
            newCarFormData.append("prix", newCarData.prix);
        }
        if (newCarData.kilometrage) {
            newCarFormData.append("kilometrage", newCarData.kilometrage);
        }
        if (newCarData.disponibilite) {
            newCarFormData.append("disponibilite", newCarData.disponibilite);
        }
        
        if (newFile) {
            for (let i = 0; i < newFile.length; i++) {
                newCarFormData.append("image", newFile[i]);
            }
        }
        axios
            .post(`/api/update_car/${id}`, newCarFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res) {
                    navigate("/dashboard");
                }
                swal(res.data.message, "", "success").then(() => {
                    navigate("/dashboard");
                });
            })
            .catch((err) => {
                console.dir(err);
            });
    };
    return (
        <div>
            <h1 style={{margin:'20px'}}>Modifier Votre Voiture</h1>
            <Form noValidate id="add-product-container" style={{width:'95%',margin:'20px'}}>
            <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Type de voiture</Form.Label>
            <Form.Control
                            // required
                            // type="text"
                            // placeholder="Type de voiture"
                           
                            // name="type"
                            // defaultValue={car.type}
                            // onChange={(e) => {
                            //     handleChange(e);
                            // }}
                            required
                            type="text"
                            placeholder="Type de voiture"
                            name="type"
                            defaultValue={car.type}
                            onChange={(e) => {
                                handleChange(e);
                            }}




                          
                        />
                         <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>Modifier l'image</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="State"
                            required
                            onChange={(e) => {
                                handleFile(e);
                            }}
                            multiple
                        />
                         <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
            
                    <Form.Group as={Col} md="2" controlId="validationCustom03">
                        <Form.Label>kilometrage</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="kilometrage"
                            name="kilometrage"
                            defaultValue={car.kilometrage}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>       
            </Row>
            
            <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="validationCustom02">
                        <Form.Label>Prix (TND)</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            min={0}
                            placeholder="Prix"
                            name="prix"
                            defaultValue={car.prix}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                        
                    </Form.Group>       
                   
                    <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                    >
                        <Form.Label>disponibilite</Form.Label>
                        <InputGroup hasValidation>
                       <select md="4"
                       name="disponibilite" 
                        onChange={(e) => {
                                handleChange(e);
                            }}>
                            <option>Sélectionner une option</option>
                            <option  value="true"  name="disponibilite" >Oui</option>
                            <option  value="false"  name="disponibilite">Non</option>
                        </select>
                        </InputGroup>
                        
                    </Form.Group>


 

                    </Row>
                    <Button
                    type="button"
                    variant="warning"
                    onClick={() => {
                        handleUpdateCar();
                    }}
                >
                Modifier
                </Button>
            </Form>
            <div
            
            style={{
                width:'188%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            
            >
                <Button
                onClick={handleReturn}
                
                >
                    Retour</Button>
            </div>
        </div>
    );
}

export default UpdateCar;