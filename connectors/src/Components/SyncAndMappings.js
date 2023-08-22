import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SyncMappings = () => {

    const options = {
        crmEntityOptions: [
            { value: 'name', label: 'Customer Name' },
            { value: 'nameLegal', label: 'Customer Name Legal' },
            { value: 'street1', label: 'Street Address 1' },
            { value: 'street2', label: 'Street Address 2' },
            { value: 'city', label: 'City' },
            { value: 'state', label: 'State' },
        ],
        cxmEntityOptions: [
            { value: 'field1', label: 'Field 1' },
            { value: 'field2', label: 'Field 2' },
            { value: 'field3', label: 'Field 3' },
            { value: 'field4', label: 'Field 4' },
            { value: 'field5', label: 'Field 5' },
        ],
        syncDirectionOptions: [
            { value: 'OvationCXM <-> Microsoft Dynamics', label: 'OvationCXM <-> Microsoft Dynamics' },
            { value: 'OvationCXM -> Microsoft Dynamics', label: 'OvationCXM -> Microsoft Dynamics' },
            { value: 'OvationCXM <- Microsoft Dynamics', label: 'OvationCXM <- Microsoft Dynamics' },
            { value: 'Do Not Sync', label: 'Do Not Sync' },
        ],
    };

    //creating arrays of state variables
    const [selectedCrmEntities, setSelectedCrmEntities] = useState(Array(options.crmEntityOptions.length).fill(options.crmEntityOptions[0].label));
    const [selectedSyncDirections, setSelectedSyncDirections] = useState(Array(options.syncDirectionOptions.length).fill(options.syncDirectionOptions[0].label));

    //CRM entity dropdown
    const handleCrmEntityChange = (value, index) => {
        const updatedCrmEntities = [...selectedCrmEntities];
        updatedCrmEntities[index] = value;
        setSelectedCrmEntities(updatedCrmEntities);
    };

    //sync direction dropdown
    const handleSyncDirectionChange = (value, index) => {
        const updatedSyncDirections = [...selectedSyncDirections];
        updatedSyncDirections[index] = value;
        setSelectedSyncDirections(updatedSyncDirections);
    };

    const [selectedSyncDirection, setSelectedSyncDirection] = useState(
        options.syncDirectionOptions[0].label
    );
    const handleSyncDirectionChanged = (value) => {
        setSelectedSyncDirection(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleApplyToAll = () => {
        alert();
    };

    return (
        <div className='sync-mappings'>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Choose the items you would like to sync and their direction</span>

                    <div style={{ marginLeft: '-23px' }}>
                        <div className='form-check'>
                            <div class='accordion accordion-style' id='accordionExample'>
                                <div class='accordion-item'>
                                    <h2 class='accordion-header' id='headingOne'>
                                        <button
                                            class='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseOne'
                                            aria-expanded='false'
                                            aria-controls='collapseOne'
                                        >
                                            {/* Accordion Item #1 */}
                                            <div class='form-check'>
                                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                                                <label class='form-check-label' for='flexCheckDefault'>
                                                    Customer / Location
                                                </label>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseOne'
                                        class='accordion-collapse collapse'
                                        aria-labelledby='headingOne'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div class='accordion-body'>
                                            <div className='form-group'>
                                                <label htmlFor='name' className='form-label customer-label'>
                                                    Sync Direction<span className='name-label'>*</span>
                                                </label>

                                                <div className='form-group'>

                                                    <Link style={{ position: "absolute", marginTop: "5px" }} onClick={handleApplyToAll} className='apply-to-all'> <i class="bi bi-arrow-clockwise"></i> Apply to All </Link>

                                                    {/* <div className="dropdown" style={{ marginTop: "-30px", position: "absolute" }}>
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            id="dropdownMenuButton"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            style={{ backgroundColor: "white", color: "black", marginTop: "25px", width: "300px", textAlign: "left" }}
                                                        >
                                                            {selectedSyncDirection}
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                                            {options.syncDirectionOptions.map((option) => (
                                                                <a
                                                                    key={option.value}
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    onClick={() => handleSyncDirectionChanged(option.label)}
                                                                >
                                                                    {option.label}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div> */}

                                                    <select
                                                        className="form-select"
                                                        id="syncDirectionOptions"
                                                        value={selectedSyncDirection}
                                                        onChange={(e) => handleSyncDirectionChanged(e.target.value)}
                                                        style={{
                                                            backgroundColor: "white",
                                                            color: "black",
                                                            width: "320px",
                                                            textAlign: "left"
                                                        }}
                                                    >
                                                        {options.syncDirectionOptions.map((option) => (
                                                            <option
                                                                key={option.value}
                                                                value={option.label}
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>



                                            <div class="container" style={{ marginTop: "53px", marginLeft: "-10px" }}>
                                                <div class="row">

                                                    <div class="col-sm">
                                                        <label className="form-label customer-label">
                                                            OvationCXM Field<span className='name-label'>*</span>
                                                        </label>
                                                    </div>

                                                    <div class="col-sm">
                                                        <label htmlFor="name" className="form-label customer-label">
                                                            MS Dynamics Field<span className='name-label'>*</span>
                                                        </label>
                                                    </div>

                                                    <div class="col-sm">
                                                        <label htmlFor="name" className="form-label customer-label">
                                                            Sync Direction<span className='name-label'>*</span>
                                                        </label>
                                                    </div>

                                                </div>

                                                {options.cxmEntityOptions.map((option, index) => (
                                                    <div className='row' key={option.value} style={{ marginTop: "12px" }}>
                                                        <div className='col-sm'>
                                                            <label htmlFor='name' className='form-label customer-label'>
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                        <div className='col-sm'>
                                                            <div className='form-group'>

                                                                <select
                                                                    className="form-select"
                                                                    id={`crmEntityDropdown${index}`}
                                                                    value={selectedCrmEntities[index]}
                                                                    onChange={(e) => handleCrmEntityChange(e.target.value, index)}
                                                                    style={{
                                                                        backgroundColor: "white",
                                                                        color: "black",
                                                                        width: "320px",
                                                                        textAlign: "left"
                                                                    }}
                                                                >
                                                                    {options.crmEntityOptions.map((crmOption) => (
                                                                        <option
                                                                            key={crmOption.value}
                                                                            value={crmOption.label}
                                                                        >
                                                                            {crmOption.label}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className='col-sm'>
                                                            <div className='form-group'>
                                                                
                                                                <select
                                                                    className="form-select"
                                                                    id={`syncDirectionDropdown${index}`}
                                                                    value={selectedSyncDirections[index]}
                                                                    onChange={(e) => handleSyncDirectionChange(e.target.value, index)}
                                                                    style={{
                                                                        backgroundColor: "white",
                                                                        color: "black",
                                                                        width: "320px",
                                                                        textAlign: "left"
                                                                    }}
                                                                >
                                                                    {options.syncDirectionOptions.map((syncOption) => (
                                                                        <option
                                                                            key={syncOption.value}
                                                                            value={syncOption.label}
                                                                        >
                                                                            {syncOption.label}
                                                                            {/* {syncOption?.label} */}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <hr></hr>

                                            <span>
                                                CUSTOM FIELD MAPPINGS
                                            </span>
                                            <br>
                                            </br>
                                            <span style={{ color: "blue" }}>
                                                <i class="bi bi-plus"></i>
                                                &nbsp;Add Custom Mapping
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SyncMappings;
