import React from 'react';
import logoImage5 from '../Assets/Images/profilepic.png';
import logoImage1 from '../Assets/Images/ovation.jfif';

const Navbar = () => {
    return (
        <>
            <nav className='Navbar'>

                <div>
                    <img src={logoImage1} alt="Logo" className='image-1' />
                    <button className='back-button'>
                        <i className="bi bi-arrow-left icons-alignment"></i>
                        <text className='back-label'>Back</text>
                    </button>

                    <span className='vertical-line1 vertical-span'>|</span>

                    <b className='Navbar-header'>Connectors</b>
                </div>
                <ul className='ul-style'>
                    <div className='button-div'>
                        <button type="button" className="btn btn-outline-primary" id="navbar-buttons">JE</button>
                        <button type="button" className="btn btn-outline-primary" id="navbar-buttons">BH</button>
                        <button type="button" className="btn btn-outline-warning" id="navbar-buttons">SL</button>
                        <button type="button" className="btn btn-outline-warning" id="ro-button">
                            RO
                            <span id="orange-dot"></span>
                        </button>
                        <span id="vertical-line-buttons">|</span>

                        <button type="button" className="btn btn-outline-primary" id="call-button">
                            <i className="bi bi-telephone-plus-fill"></i>
                        </button>


                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">

                            <div className="btn-group" role="group">

                                <button
                                    style={{ backgroundColor: "white", marginLeft: '7px', borderRadius: '6px 0 0 6px', height: '33px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                    id="btnGroupDrop1"
                                    type="button"
                                    className="btn btn-secondary dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-gear-fill search-color"></i>
                                    <i className="bi bi-caret-down-fill caret-down caret-down"></i>
                                </button>


                                <div className="dropdown-menu drop-color" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                </div>
                                <form className="form-inline my-2 my-lg-0">
                                    <div className='search-bar'>
                                    <input className="form-control mr-sm-2" id="search-placeholder" type="search" placeholder="Search" aria-label="Search" />
                                        <i className="bi bi-search search-icon"></i>
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
        </>
    )
}

export default Navbar
