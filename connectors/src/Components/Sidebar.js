import React from 'react';
import * as constantObjects from '../Constants/ConstantObjects';

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
          {constantObjects.SidebarData.map((section, sectionIndex) => (
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
