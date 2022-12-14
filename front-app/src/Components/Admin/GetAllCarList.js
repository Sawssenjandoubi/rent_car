import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllCarItem from "./GetAllCarItem";
import { BeatLoader } from "react-spinners";
import { Row, Button } from "react-bootstrap";
import DashboardAdmin from './DashboardAdmin'
function GetAllCarList() {
    const [cars, setCars] = useState();
    const [show, setShow] = useState(false);
    const [search,setSearch] = useState("")
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
            <div>
                <DashboardAdmin setSearch={setSearch} search={setSearch} />
            </div>
            {cars ? (
                <div id="products-list">
                    <div id="product-list-header"
                    style={{textAlign:'center',display:'flex',justifyContent:'center',margin:'55px',width:'110%',marginTop:'10px'}}
                    >
{/*                        
                        <Button
                        style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                            variant="dark"
                            onClick={() => {
                                handleAvailableCars();
                            }}
                        >
                            {show ? "Retour" : "Afficher les voitures disponibles"}
                        </Button> */}
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {cars
                        .filter((car)=>{
                            return search 
                            ? car.type
                            .toLowerCase()
                            .includes(search.toLowerCase()) 
                            :<h1>Ouups</h1>
                        })
                        .map((car) => {
                            return (
                                <GetAllCarItem key={car._id} {...car} />
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

export default GetAllCarList;