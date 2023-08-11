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

  const connectorsData = [{
    cardicon: { logoImage2 },
    cardtitle: 'Microsoft Dynamics',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum.',
    isEnabled: false,
    dropdown: false
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    isEnabled: false,
    dropdown: false
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: '',
    isEnabled: false,
    dropdown: false
  }]

  const [connectors, setConnectors] = useState(connectorsData);
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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-gear-fill settings-headers" viewBox="0 0 16 16" style={{ verticalAlign: 'middle', marginRight: '-3px' }}>
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4-.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
          <span className='settings-headers' style={{ verticalAlign: 'middle' }}>SETTINGS</span>
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

          <li style={{ color: 'blue', textAlign: 'left' }}>Connectors</li>
        </ul>

      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <nav className='Navbar'>

          <div>
            <img src={logoImage1} alt="Logo" className='image-1' />
            <button className='back-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left icons-alignment" viewBox="0 0 16 16" transform="translate(0, 2)">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
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
              <button style={{ width: '40px', height: '33px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, position: 'relative' }} type="button" class="btn btn-outline-warning ">
                RO
                <span className='orange-dot'></span>
              </button>
              <span className='vertical-line2'>|</span>

              <button type="button" class="btn btn-outline-primary call-button ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="grey" className="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path
                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-caret-down-fill caret-down" viewBox="0 0 23 23">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>


                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" style={{ backgroundColor: "grey" }}>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                  </div>
                  <form class="form-inline my-2 my-lg-0">
                    <div style={{ position: 'relative' }}>
                      <input class="form-control mr-sm-2 search-placeholder" type="search" placeholder="Search" aria-label="Search" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-search search-icon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
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
                  <div key={index} className="col-sm " style={{ padding: "6px" }}>
                    <div class="card " style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                      <div class="card-body">
                        <h7 class="card-title">
                          <img src={item.cardicon.logoImage2 || item.cardicon.logoImage3} alt="Logo" className='card-icons' />
                          <span className='card-text alignmnet'>{item.cardtitle}</span>
                        </h7>

                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDropDown(index)} width="16" height="16" fill="currentColor" class="bi bi-three-dots card-one icons-alignment" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
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
                          <div style={{ height: "40px" }}>{item.description}</div>
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

                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-link custom-space text-alignment" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                          </svg>
                          <span>Healthy</span>
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

          <div class="container" style={{marginTop:"25px"}}>
          <div class="row" >
            <div class="col">
              {/* card 1 */}
              <div class="card card-style2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div class="card-body">
                  <div class="card-title card-title2">
                    <img src={logoImage2} alt="Logo" className='msd-logo' />
                  </div>
                  <span class="card-text card-text2">Microsoft Dynamics</span>
                  <br />
                  <Link to="/configure" className="btn btn-outline-secondary configure-button">
                    Configure
                  </Link>
                </div>
              </div>
            </div>

             {/* 2 card */}
             <div class="col" style={{ padding: "0" }}>
                <div class="card card-style2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                  <div class="card-body">
                    <div class="card-title card-title2">
                      <img src={logoImage4} alt="Logo" className='card-logos2' />
                      <br /><br /><br />
                    </div>
                    <span class="card-text card-text2">Custom Connector</span>
                    <br />
                    <Link to="/configure" className="btn btn-outline-secondary configure-button">
                      Configure
                    </Link>
                  </div>
                </div>
              </div>


           {/* 3 card */}
           <div class="col">
                <div class="card card-style2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                  <div class="card-body">
                    <div class="card-title card-title2">
                      <img src={logoImage3} alt="Logo" className='card-logos2' />
                      <br /><br /><br />
                    </div>
                    <span class="card-text card-text2">Another Connector</span>
                    <br />
                    <Link to="/configure" className="btn btn-outline-secondary configure-button">
                      Configure
                    </Link>
                  </div>
                </div>
              </div>


             {/* 4 card */}
             <div class="col" style={{ padding: "0" }}>
                <div class="card card-style2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                  <div class="card-body">
                    <div class="card-title card-title2">
                      <img src={logoImage3} alt="Logo" className='card-logos2' />
                      <br /><br /><br />
                    </div>
                    <span class="card-text card-text2">Another Connector</span>
                    <br />
                    <Link to="/configure" className="btn btn-outline-secondary configure-button">
                      Configure
                    </Link>
                  </div>
                </div>
              </div>

              {/* 5 card */}
              <div class="col">
                <div class="card card-style2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                  <div class="card-body">
                    <div class="card-title card-title2">
                      <img src={logoImage3} alt="Logo" className='card-logos2' />
                      <br /><br /><br />
                    </div>
                    <span class="card-text card-text2">Another Connector</span>
                    <br />
                    <Link to="/configure" className="btn btn-outline-secondary configure-button">
                      Configure
                    </Link>
                  </div>
                </div>
              </div>
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