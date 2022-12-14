import "./style.css";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import LayoutProvider from "../Layout/LayoutProvider ";
import CarItem from "./CarItem";
import { BeatLoader } from "react-spinners";
import { Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import CardProviderReservation from "./CardProviderReservation";
function Dashboard() {
    const [cars, setCars] = useState();
    const [show, setShow] = useState(false);
    // const [fullscreen, setFullscreen] = useState(true);
    // const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    let id = localStorage.getItem("id");
    // useEffect(() => {
    //   axios
    //     .get(`/api/get_user_car/${id}`)
    //     .then((res) => setCars(res.data.cars))
    //     .catch((err) => console.dir(err));
    // }, []);
    useEffect(() => {
        axios
            .get(`/api/get_user_car/${id}`)
            .then((response) => setCars(response.data.cars))
            .catch((err) => console.dir(err));
    }, [cars]);
    const handleAvailableCars = () => {
        setShow(!show);
    };
    return (
        <div className="dashboard">
            <LayoutProvider setSearch={setSearch} search={search} />
            <div
                id="product-list-header"
                style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: "55px",
                    width: "110%",
                    marginTop: "100px",
                }}
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
            {cars ? (
                cars
                    .filter((car) => (show ? car.disponibilite == true : car))
                    .filter((car) => {
                        return search
                            ? car.type
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                            : car;
                    })
                    .map((car) => {
                        return <CarItem key={car._id} {...car} />;
                    })
            ) : (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                    }}
                >
                    <SyncLoader size={15} color="#212529" />
                    Loading...
                </div>
            )}
        </div>
    );
}

export default Dashboard;
