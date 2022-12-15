import React, { useEffect, useState } from "react";
import axios from "axios";
import GetAllUserItem from "./GetAllUserItem";
import { BeatLoader } from "react-spinners";
import DashboardAdmin from "../Admin/DashboardAdmin";
import TopNav from "../TopNav/TopNav";

function GetAllUserList() {
    const [users, setUsers] = useState();
    useEffect(() => {
        axios
            .get("/api/get_all_user")
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.dir(err));
    }, [users]);

    return (
        <div>
            {/* <div>
                <DashboardAdmin/>
            </div> */}
        
            {users ? (
                <div id="users-list-container">
                    {users.map((user) => {
                        return <GetAllUserItem key={user._id} {...user} />;
                    })}
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

export default GetAllUserList;