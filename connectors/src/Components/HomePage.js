import React from 'react';
import logoImage1 from '../Assets/Images/ovation.jfif';
import logoImage2 from '../Assets/Images/msd.png';
import logoImage3 from '../Assets/Images/another.png';
import logoImage4 from '../Assets/Images/plugin.png';
import logoImage5 from '../Assets/Images/profilepic.png';
import { useState } from 'react';
import "../style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomePage = () => {

  const newConnectorsData = [{
    cardicon: { logoImage2 },
    cardtitle: 'Microsoft Dynamics'
  },
  {
    cardicon: { logoImage4 },
    cardtitle: 'Custom Connector  '
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  }]

  const connectorsData = [{
    cardicon: { logoImage2 },
    cardtitle: 'Microsoft Dynamics',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: '',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  }]

  const [connectors, setConnectors] = useState(connectorsData);
  const [newConnectors, setnewConnectors] = useState(newConnectorsData);
  const [drop, setDrop] = useState(Array(connectorsData.length).fill(false));

  const handleToggle = (index) => {
    setConnectors(prevConnectors => {
      return prevConnectors.map((connector, i) => {
        if (i === index) {
          return {
            ...connector,
            isEnabled: !connector.isEnabled
          };
        }
        return connector;
      });
    });
  };

  const handleDropDown = (index) => {
    setDrop((prevDrop) => {
      const updatedDrop = [...prevDrop];
      updatedDrop[index] = !updatedDrop[index];
      return updatedDrop;
    });
  };

  return (

    <div className="first-div">

      {/* Left Sidebar */}
      <div className='left-sidebar'>

        {/* Sidebar content */}
        <div className='sidebar-new'>
          <i class="bi bi-gear-fill sidebar-icon settings-headers"></i>
          <span className='settings-headers settings-header'>SETTINGS</span>
        </div>

        <hr className='hr-tag'></hr>

        <ul className='sidebar-list'>
          <li className='sidebar-headers'>PERSONAL</li>
          <li className='sidebar-content'><b>My Profile</b></li>
          <li className='sidebar-content'><b>Notifications</b></li>

          <li className='sidebar-headers'>ORGANIZATION</li>
          {['General', 'Roles & Permissions', 'Teams', 'Users'].map((item, index) => (
            <li className='sidebar-content' key={index}><b>{item}</b></li>
          ))}

          <li className='sidebar-headers'>COMMUNICATIONS</li>
          {['Channels', 'Quick Replies', 'Templates'].map((item, index) => (
            <li className='sidebar-content' key={index}><b>{item}</b></li>
          ))}

          <li className='sidebar-headers'>KNOWLEDGE</li>
          <li className='sidebar-content'><b>Approval Process</b></li>
          <li className='sidebar-content'><b>Libraries</b></li>
          <li className='sidebar-content'><b>Templates</b></li>

          <li className='sidebar-headers'>OBJECT MANAGEMENT</li>
          <li className='sidebar-content'><b>Bulk Imports</b></li>
          <li className='sidebar-content'><b>Card Layouts</b></li>
          <li className='sidebar-content'><b>Custom Fields</b></li>

          <li className='connectors'>Connectors</li>
        </ul>

      </div>

      {/* Main Content */}
      <div className='main-section'>
        <nav className='Navbar'>

          <div>
            <img src={logoImage1} alt="Logo" className='image-1' />
            <button className='back-button'>
              <i class="bi bi-arrow-left icons-alignment"></i>
              <text className='back-label'>Back</text>
            </button>

            <span className='vertical-line1 vertical-span'>|</span>

            <b className='Navbar-header'>Connectors</b>
          </div>
          <ul className='ul-style'>
            <div className='button-div'>
              <button type="button" class="btn btn-outline-primary Navbar-buttons">JE</button>
              <button type="button" class="btn btn-outline-primary Navbar-buttons">BH</button>
              <button type="button" class="btn btn-outline-warning Navbar-buttons">SL</button>
              <button type="button" class="btn btn-outline-warning ro-button">
                RO
                <span className='orange-dot'></span>
              </button>
              <span className='vertical-line2'>|</span>

              <button type="button" class="btn btn-outline-primary call-button ">
                <i class="bi bi-telephone-plus-fill"></i>
              </button>


              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                <div class="btn-group" role="group">

                  <button
                    style={{ backgroundColor: "white", marginLeft: '7px', borderRadius: '6px 0 0 6px', height: '33px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bi bi-gear-fill search-color"></i>
                    <i class="bi bi-caret-down-fill caret-down caret-down"></i>
                  </button>


                  <div class="dropdown-menu drop-color" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                  </div>
                  <form class="form-inline my-2 my-lg-0">
                    <div className='search-bar'>
                      <input class="form-control mr-sm-2 search-placeholder" type="search" placeholder="Search" aria-label="Search" />
                      <i class="bi bi-search search-icon"></i>
                    </div>
                  </form>
                </div>
              </div>

              <div className='profile-place'>
                <img
                  src={logoImage5}
                  className='profile-imagecircle'
                  alt="Canvas Logo"
                />
                <div
                  className='green-dot'
                ></div>
              </div>
            </div>
          </ul>
        </nav>

        <div className='div-background div-margintop'>
          <span className='card-section1'><b>CONFIGURED CONNECTORS</b></span>

          <div class="container card-container">
            <div class="row">
              {connectors.map((item, index) => {
                return (
                  <div key={index} className="col-sm card-padding">
                    <div class="card card-border-shadow">
                      <div class="card-body">
                        <h7 class="card-title">
                          <img src={item.cardicon.logoImage2 || item.cardicon.logoImage3} alt="Logo" className='card-icons' />
                          <span className='card-text alignmnet'>{item.cardtitle}</span>
                        </h7>
                        <i class="bi bi-three-dots  card-one icons-alignment" onClick={() => handleDropDown(index)}></i>
                        {drop[index] && (
                          <div className="dropdown-menu dropdown-style">
                            <a className="dropdown-item" href="\configure">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        )}

                        <hr></hr>
                        <p class="card-text card-text" >
                          <b>{item.name}</b> <br />
                          <div className='desc-height'>{item.description}</div>
                        </p>
                        <hr />
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`toggleButton-${index}`}
                            checked={item.isEnabled}
                            onChange={() => handleToggle(index)}
                          />
                          <label className="form-check-label toggle-alignment" htmlFor={`toggleButton-${index}`}>
                            {item.isEnabled ? 'Enabled' : 'Disabled'} |
                          </label>

                          <a href={item.link} className='demo-link'>
                            <i class="bi bi-link  custom-space text-alignment green-color"></i>
                            Healthy
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>

        <div className='div-background'>
          <span className='card-section1'><b>NEW CONNECTORS</b></span>

          <div class="container card-container">
            <div class="row">
              {newConnectors.map((item, index) => {
                return (
                  <div key={index} className="col-sm card-padding">
                    <div class="card card-border-shadow">
                      <div class="card-body">
                        <div class="card-title new-card-title">
                          <img src={item.cardicon.logoImage2 || item.cardicon.logoImage3 || item.cardicon.logoImage4} alt="Logo" className='msd-logo' />
                        </div>
                        <span class="card-text new-card-text">{item.cardtitle}</span>
                        <br />
                        <Link to="/configure" className="btn btn-outline-secondary configure-button">
                          Configure
                        </Link>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
          </div>

        </div>

        <div className='div-background'>
          <div class="container div-end">
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;