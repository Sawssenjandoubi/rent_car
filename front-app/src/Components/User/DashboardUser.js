import React from 'react'
import TopNavbarAdmin from '../Admin/TopNavbarAdmin'
import SidebarUser from './SidebarUser'
function DashboardUser({search,setSearch}) {
  return (
    <div>
       <TopNavbarAdmin search={search} setSearch={setSearch}/>
       <SidebarUser/>
    </div>
  )
}

export default DashboardUser