import React from 'react';
import logoImage2 from '../Assets/Images/msd.png';
import logoImage3 from '../Assets/Images/another.png';
import logoImage4 from '../Assets/Images/plugin.png';
import { useState } from 'react';
import "../style.css";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

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

      <Sidebar />

      {/* Main Content */}
      <div className='main-section'>
        <Navbar />

        <div className='div-background div-margintop'>
          <span className='card-configured-connectors'><b>CONFIGURED CONNECTORS</b></span>

          <div class="container card-container">
            <div class="row">
              {connectors.map((item, index) => {
                return (
                  <div key={index} className="col-sm" id="card-padding">
                    <div class="card card-border-shadow">
                      <div class="card-body">
                        <h7 class="card-title">
                          <img src={item.cardicon.logoImage2 || item.cardicon.logoImage3} alt="Logo" className='card-icons' />
                          <span className='card-text alignmnet'>{item.cardtitle}</span>
                        </h7>
                        <i class="bi bi-three-dots  card-one icons-alignment" onClick={() => handleDropDown(index)}></i>
                        {drop[index] && (
                          <div className="dropdown-menu" id="dropdown-style">
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
                          <div>
                            <b>{item.name}</b>
                          </div>
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
          <span className='card-configured-connectors'><b>NEW CONNECTORS</b></span>

          <div class="container card-container">
            <div class="row">
              {newConnectors.map((item, index) => {
                return (
                  <div key={index} className="col-sm" id="card-padding">
                    <div class="card card-border-shadow">
                      <div class="card-body">
                        <div class="card-title new-card-title">
                          <img src={item.cardicon.logoImage2 || item.cardicon.logoImage3 || item.cardicon.logoImage4} alt="Logo" className='msd-logo' />
                        </div>
                        <span class="card-text new-card-text">{item.cardtitle}</span>
                        <div className='spacing-links'>
                          <Link to="/configure" className="btn btn-outline-secondary" id="configure-button">
                            Configure
                          </Link>
                        </div>

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