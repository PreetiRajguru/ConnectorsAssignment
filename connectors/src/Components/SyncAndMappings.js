import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SyncMappings = () => {

    // const mappingData={
    //     cxmEntityName:'',
    //     crmEntityName:''
    // }

    // const entityField=[
    //     {
    //         entityName:'',
    //         entityField:[
    //             //option values
    //         ]
    //     }
    // ]

    const mappingData = [
        {
            cxmEntityName: 'customer',
            crmEntityName: 'product'
        },
        {
            cxmEntityName: 'contact',
            crmEntityName: 'users'
        },
        {
            cxmEntityName: 'case',
            crmEntityName: 'issues'
        },
    ]


    const cxmEntityField = [
        {
            entityName: 'customer',
            entityField: [
                { value: 'name', label: 'Customer Name' },
                { value: 'nameLegal', label: 'Customer Name Legal' },
                { value: 'street1', label: 'Street Address 1' },
                { value: 'street2', label: 'Street Address 2' },
                { value: 'city', label: 'City' },
                { value: 'state', label: 'State' },
            ],
        },
        {
            entityName: 'contact',
            entityField: [
                { value: 'field1', label: 'Field 1' },
                { value: 'field2', label: 'Field 2' },
                { value: 'field3', label: 'Field 3' },
                { value: 'field4', label: 'Field 4' },
                { value: 'field5', label: 'Field 5' },
            ],
        },
        {
            entityName: 'case',
            entityField: [
                { value: 'OvationCXM <-> Microsoft Dynamics', label: 'OvationCXM <-> Microsoft Dynamics' },
                { value: 'OvationCXM -> Microsoft Dynamics', label: 'OvationCXM -> Microsoft Dynamics' },
                { value: 'OvationCXM <- Microsoft Dynamics', label: 'OvationCXM <- Microsoft Dynamics' },
                { value: 'Do Not Sync', label: 'Do Not Sync' },
            ],
        },
    ];

    const crmEntityField = [
        {
            entityName: 'customer',
            entityField: [
                { value: 'name', label: 'Name' },
                { value: 'nameLegal', label: 'Name Legal' },
                { value: 'street1', label: 'Address 1' },
                { value: 'street2', label: 'Address 2' },
                { value: 'city', label: 'City' },
                { value: 'state', label: 'State' },
            ],
        },
        {
            entityName: 'contact',
            entityField: [
                { value: 'field1', label: 'Field No 1' },
                { value: 'field2', label: 'Field No 2' },
                { value: 'field3', label: 'Field No 3' },
                { value: 'field4', label: 'Field No 4' },
                { value: 'field5', label: 'Field No 5' },
            ],
        },
        {
            entityName: 'case',
            entityField: [
                { value: 'OvationCXM <-> Microsoft Dynamics', label: 'OvationCXM <-> Microsoft Dynamics' },
                { value: 'OvationCXM -> Microsoft Dynamics', label: 'OvationCXM -> Microsoft Dynamics' },
                { value: 'OvationCXM <- Microsoft Dynamics', label: 'OvationCXM <- Microsoft Dynamics' },
                { value: 'Do Not Sync', label: 'Do Not Sync' },
            ],
        },
    ];


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
    const [selectedCxmEntities, setSelectedCxmEntities] = useState(Array(options.cxmEntityOptions.length).fill(options.cxmEntityOptions[0].label));
    const [selectedCrmEntities, setSelectedCrmEntities] = useState(Array(options.crmEntityOptions.length).fill(options.crmEntityOptions[0].label));
    const [selectedSyncDirections, setSelectedSyncDirections] = useState(Array(options.cxmEntityOptions.length).fill(options.syncDirectionOptions[0].label));

    //custom mappings 
    const [customMappings, setCustomMappings] = useState([]);
    const [selectedCustomCxmEntities, setSelectedCustomCxmEntities] = useState(Array(options.cxmEntityOptions.length).fill(options.cxmEntityOptions[0].label));
    const [selectedCustomCrmEntities, setSelectedCustomCrmEntities] = useState(Array(options.crmEntityOptions.length).fill(options.crmEntityOptions[0].label));
    const [selectedCustomSyncDirections, setSelectedCustomSyncDirections] = useState(Array(options.cxmEntityOptions.length).fill(options.syncDirectionOptions[0].label));

    //apply to all 
    const [selectedSyncDirection, setSelectedSyncDirection] = useState(options.syncDirectionOptions[0].label);

    //CRM entity select
    const handleCrmEntityChange = (value, index) => {
        const updatedCrmEntities = [...selectedCrmEntities];
        updatedCrmEntities[index] = value;
        setSelectedCrmEntities(updatedCrmEntities);
    };

    //CXM entity select
    const handleCxmEntityChange = (value, index) => {
        const updatedCxmEntities = [...selectedCxmEntities];
        updatedCxmEntities[index] = value;
        setSelectedCxmEntities(updatedCxmEntities);
    };

    //Sync direction select
    const handleSyncDirectionChange = (value, index) => {
        const updatedSyncDirections = [...selectedSyncDirections];
        updatedSyncDirections[index] = value;
        setSelectedSyncDirections(updatedSyncDirections);
    };




    //Custom CRM entity select
    const handleCustomCrmEntityChange = (value, index) => {
        const updatedCustomCrmEntities = [...selectedCustomCrmEntities];
        updatedCustomCrmEntities[index] = value;
        setSelectedCustomCrmEntities(updatedCustomCrmEntities);
    };

    //Custom CXM entity select
    const handleCustomCxmEntityChange = (value, index) => {
        const updatedCustomCxmEntities = [...selectedCustomCxmEntities];
        updatedCustomCxmEntities[index] = value;
        setSelectedCustomCxmEntities(updatedCustomCxmEntities);
    };

    //Custom Sync direction select
    const handleCustomSyncDirectionChange = (value, index) => {
        const updatedCustomSyncDirections = [...selectedCustomSyncDirections];
        updatedCustomSyncDirections[index] = value;
        setSelectedCustomSyncDirections(updatedCustomSyncDirections);
    };

    //Sync Direction -> Apply to All select
    const handleSyncDirectionChanged = (value) => {
        setSelectedSyncDirection(value);
    };

    //Apply To All button
    const handleApplyToAll = () => {
        const updatedSyncDirections = Array(options.cxmEntityOptions.length).fill(selectedSyncDirection);
        setSelectedSyncDirections(updatedSyncDirections);
        setSelectedCustomSyncDirections(updatedSyncDirections);

    };

    //custom mapping array for select
    const handleCustomMapping = () => {
        setCustomMappings([...customMappings, {}]);
    };

    //delete custom mapping
    const handleDeleteMapping = (index) => {
        const updatedMappings = [...customMappings];
        updatedMappings.splice(index, 1);
        setCustomMappings(updatedMappings);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='sync-mappings'>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Choose the items you would like to sync and their direction</span>

                    <div style={{ marginLeft: '-23px' }}>
                        <div className='form-check'>
                            <div className='accordion accordion-style' id='accordionExample'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingOne'>
                                        <button
                                            className='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseOne'
                                            aria-expanded='false'
                                            aria-controls='collapseOne'
                                        >
                                            {/* Accordion Item #1 */}
                                            <div className='form-check'>
                                                <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                                                <label className='form-check-label' for='flexCheckDefault'>
                                                    Customer / Location
                                                </label>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseOne'
                                        className='accordion-collapse collapse'
                                        aria-labelledby='headingOne'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body'>
                                            <div className='form-group'>
                                                <label htmlFor='name' className='form-label customer-label'>
                                                    Sync Direction<span className='name-label'>*</span>
                                                </label>

                                                <div className='form-group'>

                                                    <button style={{ position: "absolute", marginTop: "5px", color: 'blue', border: 'none', background: 'none' }} onClick={handleApplyToAll} className='apply-to-all'> <i class="bi bi-arrow-clockwise"></i> Apply to All </button>

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

                                            <div className="container" style={{ marginTop: "53px", marginLeft: "-10px" }}>
                                                <div className="row">

                                                    <div className="col-sm">
                                                        <label className="form-label customer-label">
                                                            OvationCXM Field<span className='name-label'>*</span>
                                                        </label>
                                                    </div>

                                                    <div className="col-sm">
                                                        <label htmlFor="name" className="form-label customer-label">
                                                            MS Dynamics Field<span className='name-label'>*</span>
                                                        </label>
                                                    </div>

                                                    <div className="col-sm">
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
                                                                            {/* {syncOption.label} */}
                                                                            {syncOption?.label}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>


                                            <div>
                                                <hr />
                                                <span>CUSTOM FIELD MAPPINGS</span>
                                                <br />
                                                {customMappings.map((mapping, index) => (
                                                    <div key={index}>
                                                        <div className="container" style={{ marginTop: "12px" }}>
                                                            <div className="row">
                                                                <div className="col-sm" style={{ marginLeft: "-11px" }}>

                                                                    {/* custom select for CXM entity */}
                                                                    <select
                                                                        className="form-select"
                                                                        id={`cxmOptionsSelect${index}`}
                                                                        value={selectedCustomCxmEntities[index]}
                                                                        onChange={(e) => handleCustomCxmEntityChange(e.target.value, index)}
                                                                        style={{
                                                                            backgroundColor: "white",
                                                                            color: "black",
                                                                            width: "320px",
                                                                            textAlign: "left"
                                                                        }}
                                                                    >
                                                                        {options.cxmEntityOptions.map((option) => (
                                                                            <option
                                                                                key={option.value}
                                                                                value={option.label}
                                                                            >
                                                                                {option.label}
                                                                            </option>
                                                                        ))}
                                                                    </select>


                                                                </div>
                                                                <div className="col-sm" >
                                                                    <div className='form-group'>
                                                                        {/* custom select for CRM entity */}

                                                                        <select
                                                                            className="form-select"
                                                                            id={`crmOptionsSelect${index}`}
                                                                            value={selectedCustomCrmEntities[index]}
                                                                            onChange={(e) => handleCustomCrmEntityChange(e.target.value, index)}
                                                                            style={{
                                                                                backgroundColor: "white",
                                                                                color: "black",
                                                                                width: "320px",
                                                                                textAlign: "left"
                                                                            }}
                                                                        >
                                                                            {options.crmEntityOptions.map((option) => (
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
                                                                <div className="col-sm" style={{ marginTop: "42px", marginTop: "0px" }}>
                                                                    <div className='form-group'>
                                                                        {/* custom select for Sync Direction */}
                                                                        <select
                                                                            className="form-select"
                                                                            id={`syncOptionsSelect${index}`}
                                                                            value={selectedCustomSyncDirections[index]}
                                                                            onChange={(e) => handleCustomSyncDirectionChange(e.target.value, index)}
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
                                                                <div className="col-sm">

                                                                    <i class="bi bi-x-circle-fill grey-icon" onClick={() => handleDeleteMapping(index)}></i>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <button style={{ color: 'blue', border: 'none', background: 'none' }} onClick={handleCustomMapping}>
                                                    <i className="bi bi-plus"></i>
                                                    &nbsp;Add Custom Mapping
                                                </button>

                                            </div>
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
