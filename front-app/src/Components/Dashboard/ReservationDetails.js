import React, { useState, useEffect } from "react";
import axios from "axios";
import CarItem from "./CarItem";
import GetAllUserItem from "../User/GetAllUserItem";
function ReservationDetails({ carId }) {
    const [userDetails, setUserDetails] = useState();
    const [dateDetails, setDateDetails] = useState();
    useEffect(() => {
        axios
            .get(`/api/get_user_reservation/${carId}`)
            .then((response) => {
                if (response) {
                    console.log(response.data.data);
                    setUserDetails(response.data.data.user);
                    setDateDetails(response.data.data);
                }
            })
            .catch((err) => console.dir(err));
    }, []);

    return (
        <div>
            <p>Details</p>
            <h1> {userDetails?.nom} </h1>
            <h1> {userDetails?.prenom} </h1>
            <h2> {userDetails?.tel} </h2>
            <h5> {dateDetails?.dateDebutLocation} </h5>
            <h5> {dateDetails?.dateFinLocation} </h5>
        </div>
    );
}

export default ReservationDetails;
