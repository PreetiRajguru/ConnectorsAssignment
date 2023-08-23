import React from 'react'

const Sidebar = () => {

  const SidebarData = [
    {
      title: "PERSONAL",
      items: [
        { item1: "My Profile" },
        { item2: "Notifications" }
      ]
    },
    {
      title: "ORGANIZATION",
      items: [
        { item1: "General" },
        { item2: "Roles & Permissions" },
        { item3: "Teams" },
        { item4: "Users" }]
    },
    {
      title: "COMMUNICATIONS",
      items: [
        { item1: "Channels" },
        { item2: "Quick Replies" },
        { item3: "Templates" }]
    },
    {
      title: "KNOWLEDGE",
      items: [
        { item1: "Approval Process" },
        { item2: "Libraries" },
        { item3: "Templates" }]
    },
    {
      title: "OBJECT MANAGEMENT",
      items: [
        { item1: "Bulk Imports" },
        { item2: "Card Layouts" },
        { item3: "Custom Fields" }]
    }
  ]

  return (
    <>
      {/* Left Sidebar */}
      <div className='left-sidebar'>

        {/* Sidebar content */}
        <div className='sidebar-new'>
          <i className="bi bi-gear-fill sidebar-icon" id="settings-headers"></i>
          <span className='settings-header' id="settings-headers">SETTINGS</span>
        </div>

        <hr className='hr-tag'></hr>

        <ul className='sidebar-list'>
          {SidebarData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <li id="sidebar-headers">{section.title}</li>
              {section.items.map((item, index) => (
                <li className='sidebar-content' key={index}><b>{item.item1 || item.item2 || item.item3 || item.item4}</b></li>
              ))}
            </div>
          ))}
          <li className='connectors'>Connectors</li>
        </ul>

      </div>
    </>
  )
}

export default Sidebar;
