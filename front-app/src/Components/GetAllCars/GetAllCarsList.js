import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllCarsItem from "./GetAllCarsItem";
import { BeatLoader } from "react-spinners";
import { Row, Button } from "react-bootstrap";
import LayoutProvider from "../Layout/LayoutProvider "

function GetAllCarsList() {
    
    const [cars, setCars] = useState();
    const [show, setShow] = useState(false);
    const [search,setSearch] = useState("");

    useEffect(() => {
        if (!show) {
            axios
                .get("/api/get_all_car")
                .then((response) => setCars(response.data.cars))
                .catch((err) => console.dir(err));
        }
         else {
            axios
                .get("/api/available_car")
                .then((response) => setCars(response.data.data))
                .catch((err) => console.dir(err));
        }
    }, [cars]);
    const handleAvailableCars = () => {
        setShow(!show);
    };
    return (
        <div id="products-container">
             <LayoutProvider setSearch={setSearch} search={search} />
       
            {cars ? (
                <div id="products-list">
                    <div id="product-list-header"
                    style={{textAlign:'center',display:'flex',justifyContent:'center',margin:'55px',width:'110%',marginTop:'80px'}}
                    >
                        {/* <h1>Produts List</h1> */}
                        <Button
                        // style={{marginTop:'70px',display:'flex',justifyContent:'center',alignItems:'center'}}
                            variant="dark"
                            onClick={() => {
                                handleAvailableCars();
                            }}
                        >
                            {show ? "Retour" : "Afficher les voitures disponibles"}
                        </Button>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {cars
                        .filter((car)=>{
                            return search 
                            ? car.type
                            .toLowerCase()
                            .includes(search.toLowerCase()) 
                            :
                            (
                                <div id="spinner">
                                    <BeatLoader
                                        color="#4c4c4c"
                                        margin={9}
                                        size={30}
                                        speedMultiplier={1}
                                    />
                                </div>
                            )
                            
                        })
                        .map((car) => {
                            return (
                                <GetAllCarsItem key={car._id} {...car} />
                            );
                        })}
                    </Row>
                </div>
            ) : (
                <div id="spinner">
                    <BeatLoader
                        color="#4c4c4c"
                        margin={9}
                        size={30}
                        speedMultiplier={1}
                    />
                </div>
            )}
        </div>
    );
}

export default GetAllCarsList;