import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import LayoutProvider from '../Layout/LayoutProvider '
import "./style.css";
import { PulseLoader } from "react-spinners";
import 'react-bootstrap'
function AjouterVoiture() {
  const [newCar, setNewCar] = useState();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [newFile, setNewFile] = useState();
  const id = localStorage.getItem("id");
  const isBanned = localStorage.getItem("isBanned")
  console.log({isBanned})
  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleFile = (e) => {
    setNewFile(e.target.files);
    console.log("file",newFile)
};

const saveNewCar = (e) => {
  let carFormData = new FormData();
  carFormData.append("type", newCar.type);
  carFormData.append("kilometrage", newCar.kilometrage);
  carFormData.append("userId", newCar.userId);
  carFormData.append("prix", newCar.prix);
  carFormData.append("disponibilite", newCar.disponibilite);
  for (let i = 0; i < newFile.length; i++) {
    carFormData.append("image", newFile[i]);
  }
  axios
            .post(`/api/add_car/${id}`, carFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                swal(res.data.message, "success").then(() => {
                    navigate("/dashboard");
                });
            })
            .catch((err) => {
                console.dir(err);
            });
    };
  // const handleSubmit = async () => {
  //   setLoading(true);
  //   await axios
  //     .post(`/api/add_car/${id}`, newCar)
  //     .then((response) => {
  //       if (response) {
  //         setLoading(false);
  //         swal("Succèes!", "voiture ajoutée avec succèes.", "success").then(
  //           (result) => {
  //             if (result) {
  //               navigate("/dashboard");
  //             }
  //           }
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       if (error) {
  //         setLoading(false);
  //         setRegisterError(error.response.data.error);
  //       }
  //     });
  // };

  useEffect(() => {
    setTimeout(() => {
      setRegisterError("");
    }, 15000);
  }, [registerError]);

  return (
    <div className="Auth-form-container-register" style={{width:'100%',display:'flex',justifyContent:'center',margin:'50px',alignItems:'center'}}>
      <LayoutProvider/>
     
      <form
        className="Auth-form"
        // onChange={handleChange}
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
         
          padding: "20px",

          width:'40%',
          position:'relative',
         

          display:'flex',
          justifyContent:'center',
          alignItems:'center', 
          // width:'100%',
          margin:'20px',
          
        


        }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Ajouter Voiture</h3>

          <div className="form-group mt-3">
            <label>Type *</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g fiat "
              name="type"
              onChange={(e) => {
                handleChange(e);
            }}
            />
            {registerError && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {registerError}
              </span>
            )}
          </div>
          <div className="form-group mt-3">
            <label>photo rèelle *</label>
            <input
              type="file"
              className="form-control mt-1"
              placeholder="e.g mettez une photo reélle"
              name="image"
              autoComplete=""
              onChange={(e) => {
                handleFile(e);
            }}
            multiple
            />
            {registerError && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {registerError}
              </span>
            )}
          </div>
          <div className="form-group mt-3">
            <label>kilomètrage *</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="e.g 160000"
              name="kilometrage"
              autoComplete=""
              onChange={(e) => {
                handleChange(e);
            }}
            />
            {registerError && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {registerError}
              </span>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Prix *</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Email Address"
              name="prix"
              autoComplete=""
              onChange={(e) => {
                handleChange(e);
            }}
            />
            {registerError && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {registerError}
              </span>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Disponibilité *</label>
            <select
              name="disponibilite"
              className="form-control mt-1"
              autoComplete=""
              onChange={(e) => {
                handleChange(e);
            }}
            >
              <option>Sélectioner une option</option>
              <option value="true">oui</option>
              <option value="false">non</option>
            </select>

            {registerError && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {registerError}
              </span>
            )}
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              // onClick={() => {
              //   handleSubmit();
              // }}
              onClick={(e) => {
                saveNewCar(e);
            }}
            >
              {loading ? (
                <PulseLoader size={8} color={"#ffffff"} />
              ) : (
                "Ajouter Voiture"
              )}
            </button>
          </div>
          {registerError && (
            <span style={{ color: "red", fontSize: "0.8em" }}>
              {registerError}
            </span>
          )}
        </div>
      </form>
   
    </div>
  );
}

export default AjouterVoiture;
