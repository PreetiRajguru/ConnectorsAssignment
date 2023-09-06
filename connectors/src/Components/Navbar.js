import React from 'react';
import logoImage5 from '../Assets/Images/profilepic.png';
import logoImage1 from '../Assets/Images/ovation.png';

const Navbar = () => {
    
    return (
        <>
            <nav id="navbar">
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
                        <button type="button" class="btn btn-outline-primary" id="navbar-buttons">JE</button>
                        <button type="button" class="btn btn-outline-primary" id="navbar-buttons">BH</button>
                        <button type="button" class="btn btn-outline-warning" id="navbar-buttons">SL</button>
                        <button type="button" class="btn btn-outline-warning" id="ro-button">
                            RO
                            <span id="orange-dot"></span>
                        </button>
                        <span id="vertical-line-buttons">|</span>

                        <button type="button" class="btn btn-outline-primary" id="call-button">
                            <i class="bi bi-telephone-plus-fill"></i>
                        </button>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                            <div class="btn-group" role="group">

                                <button
                                    id="dropdown-button"
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
                                    <input class="form-control mr-sm-2" id="search-placeholder" type="search" placeholder="Search" aria-label="Search" />
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
        </>
    )
}

export default Navbar;
