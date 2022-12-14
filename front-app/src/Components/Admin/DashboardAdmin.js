import React from 'react'
import AfficherVoiture from '../AfficherVoiture/AfficherVoiture'

import SidebarAdmin from './SidebarAdmin'
import TopNavbarAdmin from './TopNavbarAdmin'
function DashboardAdmin({setSearch,search}) {
  return (
    <div>
        <SidebarAdmin/>
        <TopNavbarAdmin setSearch={setSearch} search={search}/>
          
    </div>
  )
}

export default DashboardAdmin