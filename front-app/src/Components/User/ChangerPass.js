import React, { useContext ,useState  } from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ChangerPass() {
    const [newPasswordObj, setNewPasswordObj] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setNewPasswordObj({
          ...newPasswordObj,
          [e.target.name]: e.target.value,
        });
      };
      const handleClosePasswordModal=()=>{
        console.log('close')
      }
      let id = localStorage.getItem("id");
      const handleRetour=()=>{
        navigate('/DashboardForUser')
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
              .put(`/api/updateUserPass/${id}`, newPasswordObj)
              .then((res) => {
                if (res) {
                  swal(res.data.message, "", "success").then(() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("isUser");
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
          <div
             style={{
              
            margin:'20px',
            padding:'0 30px',
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center'
              
              }}
          >
    <Button size="small"
    onClick={handleRetour}  >
       Retour
       </Button>
    </div>
   
   <div 

        style={{
        width: '700px',
        margin: 'auto',
        marginTop:'60px',
        padding:'30px',
        border: '3px solid grey',
        borderRadius:'10px'
        }}
   >
   
    <Form.Label htmlFor="inputPassword5">Nouveau Mot de passe</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        name="newPassword"
        onChange={(e) => {
            handleChange(e);
          }}
      />
      <Form.Text id="passwordHelpBlock" muted>
      Votre mot de passe doit comporter entre 8 et 20 caractères, 
      contenir des lettres et des chiffres et ne doit pas contenir d'espaces,
       de caractères spéciaux .
      </Form.Text>
      <Form.Label htmlFor="inputPassword5">Confirmer votre nouveau mot de passe</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        name="confirmNewPassword"
        onChange={(e) => {
            handleChange(e);
          }}
          
      />
      <Form.Text id="passwordHelpBlock" muted>
      Votre mot de passe doit comporter entre 8 et 20 caractères, 
      contenir des lettres et des chiffres et ne doit pas contenir d'espaces,
       de caractères spéciaux .
      </Form.Text>
      
      <br></br>
      {error && <Form.Text style={{ color: "red" }}>{error}</Form.Text>}
      <br></br>
      <Button
              variant="primary"
              onClick={() => {
                handleSaveNewPassword();
              }}
            >
              Sauvegarder
            </Button>
      
   </div>
   </div> 
  )
}

export default ChangerPass