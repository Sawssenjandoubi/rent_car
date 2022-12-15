import React from "react";
/*import Router from "../../routes/Router";*/
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";


const LayoutProvider = ({setSearch,search}) => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="main__layout">
        <TopNav setSearch={setSearch} search={search} />
      </div>
      
    </div>
  );
};

export default LayoutProvider ;