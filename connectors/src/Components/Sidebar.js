import React from 'react'

const Sidebar = () => {
  return (
    <>
      {/* Left Sidebar */}
      <div className='left-sidebar'>

        {/* Sidebar content */}
        <div className='sidebar-new'>
          <i class="bi bi-gear-fill sidebar-icon" id="settings-headers"></i>
          <span className='settings-header' id="settings-headers">SETTINGS</span>
        </div>

        <hr className='hr-tag'></hr>

        <ul className='sidebar-list'>
          <li id="sidebar-headers">PERSONAL</li>
          <li className='sidebar-content'><b>My Profile</b></li>
          <li className='sidebar-content'><b>Notifications</b></li>

          <li id="sidebar-headers">ORGANIZATION</li>
          {['General', 'Roles & Permissions', 'Teams', 'Users'].map((item, index) => (
            <li className='sidebar-content' key={index}><b>{item}</b></li>
          ))}

          <li id="sidebar-headers">COMMUNICATIONS</li>
          {['Channels', 'Quick Replies', 'Templates'].map((item, index) => (
            <li className='sidebar-content' key={index}><b>{item}</b></li>
          ))}

          <li id="sidebar-headers">KNOWLEDGE</li>
          <li className='sidebar-content'><b>Approval Process</b></li>
          <li className='sidebar-content'><b>Libraries</b></li>
          <li className='sidebar-content'><b>Templates</b></li>

          <li id="sidebar-headers">OBJECT MANAGEMENT</li>
          <li className='sidebar-content'><b>Bulk Imports</b></li>
          <li className='sidebar-content'><b>Card Layouts</b></li>
          <li className='sidebar-content'><b>Custom Fields</b></li>

          <li className='connectors'>Connectors</li>
        </ul>

      </div>
    </>
  )
}

export default Sidebar;
