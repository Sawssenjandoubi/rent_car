import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function GetAllProviderItem({ nom,prenom, cin, email, tel,ville,dateNaissance, nomAgence, fax, isBanned, motPass,_id}) {
    const handleBanProvider = () => {
        swal({
            title: "Vous êtes sûr ?",
            text: "this user will be banned!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willBann) => {
            if (willBann) {
                axios
                    .put(`/api/ban_provider/${_id}`)
                    .then((res) =>
                        swal(res.data.message, {
                            icon: "success",
                        })
                    )
                    .catch((err) => console.dir(err));
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div id={isBanned ? "user-item-container-banned" : "user-item-container"}>
        <h4>
            {nom} {prenom}
        </h4>
        <h5>cin: {cin} </h5>
        <h6> telephone: {tel} </h6>
        <Button
            id="button"
            onClick={() => {
                handleBanProvider();
            }}
        >
            Ban user
        </Button>
    </div>
    );
}

export default GetAllProviderItem;
