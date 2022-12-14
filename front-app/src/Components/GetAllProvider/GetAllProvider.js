import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllProviderItem from "./GetAllProviderItem";
import { BeatLoader } from "react-spinners";



function GetAllProvider() {
    const [providers, setProviders] = useState();
   useEffect(() => {
        axios
            .get("/api/get_all_provider")
            .then((res) => setProviders(res.data.data))
            .catch((err) => console.dir(err));
    }, [providers]);

    return (
        <div>
          
            {providers ? (
                <div id="users-list-container">
                    { providers.map((provider) => {
                        return <GetAllProviderItem key={provider._id} {...provider} />;
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

export default GetAllProvider;