import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Row } from "react-bootstrap";
// import GetAlCarItem from "./GetAlCarItem";
import GetMyreservationItem from "./GetMyreservationItem";
function Myreservation() {
    const id = localStorage.getItem("id");
    const [myList, setMyList] = useState();
    useEffect(() => {
        axios
            .get(`/api/my_reservation/${id}`)
            .then((res) => {setMyList(res.data.data);
                // console.log(res.data.data);
                // 
            })
            .catch((err) => console.dir(err));
    }, [myList]);
    return (
        <div>
            <div id="products-container">
                {myList ? (
                    <div id="products-list">
                        <div id="product-list-header">
                            <h1>Mes Locations</h1>
                        </div>
                        <Row xs={1} md={2} className="g-4">
                            {myList.map((product) => {
                                return (
                                    <GetMyreservationItem
                                        key={product._id}
                                        {...product.product}
                                        
                                    />
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
        </div>
    );
}

export default Myreservation;