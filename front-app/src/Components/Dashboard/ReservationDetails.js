import React, { useState, useEffect } from "react";
import axios from "axios";
import CarItem from './CarItem'
import GetAllUserItem from '../User/GetAllUserItem'
function ReservationDetails({ carId}) {
  const [details, setDetails] = useState();
  useEffect(() => {
    axios
      .get(`/api/get_user_reservation/${carId}`)
      .then((response) => setDetails(response.data.data))
      // setDetails(response.data.details)
      // console.log(response.data.data)
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div>
      <p>Details</p>
      {/* {details.map((detail) => {
          return  <GetAllUserItem key={detail.carId} {...detail}/>
        })}  */}
        
  {/* <p>{details[0]}</p> */}
      
    </div>
  );
}

export default ReservationDetails;
