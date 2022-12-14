const express = require("express");
const route = express.Router();
const route_add_provider = require("../routes/add_provider");
const route_login = require("../routes/login");
const route_add_car = require("../routes/add_car");
const route_add_admin = require("../routes/add_admin");
const upload = require("../middlewares/uploads")
const verify = require("../middlewares/verifyToken");
//ADD PROVIDER
route.post("/add_provider", route_add_provider);
//LOGIN
route.post("/login", route_login);
//ADD NEW CAR
route.post("/add_car/:id", upload.array("image", 20), route_add_car);
//GET PROVIDER CAR
route.get("/get_user_car/:id", require("../routes/getUserCar"));
//UPDATE CAR: /api/update_car/:id

route.post("/update_car/:id", upload.array("image", 10),require("../routes/UpdateCar"));


// DELETE CAR : /api/delete_car
route.delete("/delete_car/:id", require("../routes/DeleteCar"));

//GET CARS : /api/get_all_car
route.get("/get_all_car", require("../routes/GetAllCar"));

//ADD ADMIN
route.post("/add_admin", route_add_admin);

//GET PROVIDER LIST : /api/getAllProvider
route.get("/get_all_provider",require("../routes/getAllProvider"));

//GET USER LIST : /api/getAllUser
route.get("/get_all_user",require("../routes/GetAllUser"));

//Ban User : /api/ban_provider
route.put("/ban_provider/:id", require("../routes/BanProvider"));

//UPDATE PROVIDER PASS
route.put("/updateProviderPass/:id", require("../routes/UpdateProviderPass"));
//ADD USER
route.post("/add_user",  require("../routes/add_user"));

//GET AVAILABLE CARS : /api/available_car
route.get("/available_car", require("../routes/AvailabeCar"));

//USER RESERVATION : /api/reservation_car
route.post("/reservation_car", verify, require("../routes/reservation"));

//GETUSER RESERVATION FOR PROVIDER : /api/get_user_reservation
route.get("/get_user_reservation/:id",require("../routes/GetUserReservation"));

//USER GET HIS RESERVATION: /api/my_reservation
route.get("/my_reservation/:id", require("../routes/Myreservation"));

//UPDATE USER PASS
route.put("/updateUserPass/:id", require("../routes/UpdateUserPass"));

module.exports = route;
