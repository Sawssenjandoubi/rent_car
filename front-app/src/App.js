import "./App.css";
import NavScrollExample from "./Components/Navbar/Navbar";
import "bootstrap";
import "../src/Components/Navbar/navbar.css";
import AjouterVoiture from "./Components/AjouterVoiture/AjouterVoiture";
import Contact from "./Components/ContactUs/ContactUs";
import Support from "./Components/Support/Support";
import SectionSvg from "./Components/SectionSvg/SectionSvg";
import Avis from "./Components/Avis/Avis";
import { Routes, Route } from "react-router-dom";
import PgAide from "./Components/PgAide/PgAide";
import Footerr from "./Components/footer/Footer";
import FirstSection from "./Components/first-section-home/FirstSection";
import Layout from "./Components/Navbar/Layout";
import RegisterProvider from "./Components/RegisterProvider/RegisterProvider";

import PgConnecter from "./PgConnecter/PgConnecter";
import EssaiRegister from "./Components/EssaiRegister/EssaiRegister";
import Service from "./Components/Service/Service";
import Sidebar from "./Components/Sidebar/Sidebar";
import LayoutProvider from "./Components/Layout/LayoutProvider ";
import Dashboard from "./Components/Dashboard/Dashboard";
import AfficherVoiture from "./Components/AfficherVoiture/AfficherVoiture";
import ProviderRoute from "./Components/ProviderRouter/ProviderRouter";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import UserRoute from "./Components/UserRoute/UserRoute";
import UpdateCar from "./Components/UpadateCar/UpdateCar";
import GetAllCarsList from "./Components/GetAllCars/GetAllCarsList";
import GetAllCarList from "./Components/Admin/GetAllCarList";
import GetAlCarList from "./Components/User/GetAlCarList";
import GetAllProvider from "./Components/GetAllProvider/GetAllProvider";
import DashboardAdmin from "./Components/Admin/DashboardAdmin";
import CreerCompte from "./Components/User/CreerCompte";
import DashboardUser from "./Components/User/DashboardUser";
import GetAllUserList from "./Components/User/GetAllUserList";
import Myreservation from "./Components/User/Myreservation";
import ChangerPass from "./Components/User/ChangerPass";
import CarsForAllList from "./Components/CarsForAll/CarsForAllList";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<FirstSection />} />
                    <Route path="aide" element={<PgAide />} />
                    <Route path="connecter" element={<PgConnecter />} />
                    <Route path="creercompte" element={<RegisterProvider />} />
                    <Route path="creercompteUser" element={<CreerCompte />} />
                    <Route path="Nos_service" element={<Service />} />
                    <Route path="carsforall" element={<CarsForAllList />} />
                </Route>

                {/*Route of dashboard */}

                <Route
                    path="/DashboardAdmin"
                    element={
                        <AdminRoute>
                            <DashboardAdmin />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/GetAllProvider"
                    element={
                        <AdminRoute>
                            <GetAllProvider />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/GetAllUser"
                    element={
                        <AdminRoute>
                            <GetAllUserList />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/allcarsForAdmin"
                    element={
                        <AdminRoute>
                            <GetAllCarList />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProviderRoute>
                            <Dashboard />
                        </ProviderRoute>
                    }
                />
                <Route
                    path="/DashboardForUser"
                    element={
                        <UserRoute>
                            <GetAlCarList />
                        </UserRoute>
                    }
                />

                <Route
                    path="/GetMyReservation"
                    element={
                        <UserRoute>
                            <Myreservation />
                        </UserRoute>
                    }
                />

                <Route
                    path="/Changerpass"
                    element={
                        <UserRoute>
                            <ChangerPass />
                        </UserRoute>
                    }
                />

                <Route path="/addCar" element={<AjouterVoiture />} />
                <Route
                    path="UpdateCar/:id"
                    element={
                        <ProviderRoute>
                            <UpdateCar />
                        </ProviderRoute>
                    }
                />

                <Route path="/allcar" element={<GetAllCarsList />} />

                {/* <Route path="/allprovider" element={<GetAllProvider/>} /> */}
                <Route path="/support" element={Support} />
                <Route path="/LayoutProvider" element={<LayoutProvider />} />
            </Routes>
        </div>
    );
}

export default App;
