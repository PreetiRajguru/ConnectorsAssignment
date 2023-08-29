import React, { useState } from 'react';

const SyncMappings = () => {

  const mappingData = [
    {
      cxmEntityName: 'Customer',
      crmEntityName: 'Product'
    },
    {
      cxmEntityName: 'Contact',
      crmEntityName: 'Users'
    },
    {
      cxmEntityName: 'Case',
      crmEntityName: 'Issues'
    },
  ]

  const cxmEntityField = [
    {
      entityName: 'Customer',
      entityField: [
        { value: 'name', label: 'Customer Name', isCustomField: false },
        { value: 'nameLegal', label: 'Customer Name Legal', isCustomField: false },
        { value: 'street1', label: 'Street Address 1', isCustomField: false },
        { value: 'street2', label: 'Street Address 2', isCustomField: false },
        { value: 'city', label: 'City', isCustomField: false },
        { value: 'state', label: 'State', isCustomField: true },
      ],
    },
    {
      entityName: 'Contact',
      entityField: [
        { value: 'field1', label: 'Field 1' },
        { value: 'field2', label: 'Field 2' },
        { value: 'field3', label: 'Field 3' },
        { value: 'field4', label: 'Field 4' },
        { value: 'field5', label: 'Field 5' },
      ],
    },
    {
      entityName: 'Case',
      entityField: [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
      ],
    },
  ];

  const crmEntityField = [
    {
      entityName: 'Product',
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
      entityName: 'Users',
      entityField: [
        { value: 'field1', label: 'Field No 1' },
        { value: 'field2', label: 'Field No 2' },
        { value: 'field3', label: 'Field No 3' },
        { value: 'field4', label: 'Field No 4' },
        { value: 'field5', label: 'Field No 5' },
      ],
    },
    {
      entityName: 'Issues',
      entityField: [
        { value: 'one', label: 'One One' },
        { value: 'two', label: 'Two Two' },
        { value: 'three', label: 'Three Three' },
        { value: 'four', label: 'Four Four' },
      ],
    },
  ];

  const syncOptions = [

    { value: 'OvationCXM <-> Microsoft Dynamics', label: 'OvationCXM <-> Microsoft Dynamics' },
    { value: 'OvationCXM -> Microsoft Dynamics', label: 'OvationCXM -> Microsoft Dynamics' },
    { value: 'OvationCXM <- Microsoft Dynamics', label: 'OvationCXM <- Microsoft Dynamics' },
    { value: 'Do Not Sync', label: 'Do Not Sync' },
    ,
  ];

  const [formData, setFormData] = useState(mappingData.map((e) => ({

    cxmEntityName: e.cxmEntityName,
    crmEntityName: e.crmEntityName,
    syncDirection: '', //for apply to all option and display the select options by mapping another object in the select
    mappings: cxmEntityField.filter(s => s.entityName == e.cxmEntityName)[0].entityField.map((cxm) => ({
      cxmFieldLabel: cxm.label,
      cxmFieldName: cxm.value,
      crmFieldLabel: '', //update this using handle onchange function
      crmFieldName: '', //update this using handle onchange function
      syncDirection: '', //update this using handle onchange function and display the select options by mapping another object in the select
      crmField: crmEntityField.filter(s => s.entityName == e.crmEntityName)[0]?.entityField,
      cxmField: cxmEntityField.filter(s => s.entityName == e.cxmEntityName)[0]?.entityField,
      isCustomField: cxm.isCustomField //actual custom mapping row /section
    }))

  })));


  // Apply To All button
  const handleApplyToAll = (mappingIndex) => {
    alert(mappingIndex);
  }

  //add new custom mapping
  const [customRows, setCustomRows] = useState([]);

  // Function to add a new custom row
  const addCustomRow = () => {
    const newRow = {
      // Set default values for your custom row fields
      fieldName: '',
      fieldValue: '',
    };

    // Add the new row to the customRows array
    setCustomRows([...customRows, newRow]);
  };

  // Function to handle changes in the field name
  const handleFieldNameChange = (e, index) => {
    const updatedCustomRows = [...customRows];
    updatedCustomRows[index].fieldName = e.target.value;
    setCustomRows(updatedCustomRows);
  };

  // Function to handle changes in the field value
  const handleFieldValueChange = (e, index) => {
    const updatedCustomRows = [...customRows];
    updatedCustomRows[index].fieldValue = e.target.value;
    setCustomRows(updatedCustomRows);
  };

  // Function to delete a custom row
  const deleteCustomRow = (index) => {
    const updatedCustomRows = [...customRows];
    updatedCustomRows.splice(index, 1);
    setCustomRows(updatedCustomRows);
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

            {formData.map((mapping, index) => (
              <div className='form-check' key={index}>
                <div className='accordion accordion-style' id={`accordionExample${index}`}>
                  <div className='accordion-item'>

                    <h2 className='accordion-header' id={`headingOne${index}`}>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded='false'
                        aria-controls={`collapseOne${index}`}
                      >
                        {/* Accordion Item */}
                        <div className='form-check'>
                          <input className='form-check-input' type='checkbox' value='' id={`flexCheckDefault${index}`} />
                          <label className='form-check-label' htmlFor={`flexCheckDefault${index}`}>
                            {mapping.cxmEntityName} / {mapping.crmEntityName}
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className='accordion-collapse collapse'
                      aria-labelledby={`headingOne${index}`}
                      data-bs-parent={`#accordionExample${index}`}
                    >

                      <div className='accordion-body'>

                        <div className='form-group'>
                          <label htmlFor={`name${index}`} className='form-label customer-label'>
                            Sync Direction<span className='name-label'>*</span>
                          </label>

                          <div className='form-group'>

                            <button
                              style={{ position: "absolute", marginTop: "5px", color: 'blue', border: 'none', background: 'none' }}
                              onClick={() => handleApplyToAll(index)}
                              className='apply-to-all'
                            >
                              <i class="bi bi-arrow-clockwise"></i> Apply to All
                            </button>

                            <select
                              className="form-select"
                              id={`syncDirectionOptions${index}`}
                              // value={data.selectedSyncDirection}
                              // onChange={(e) => handleSyncDirectionChanged(e.target.value)}
                              style={{
                                backgroundColor: "white",
                                color: "black",
                                width: "320px",
                                textAlign: "left"
                              }}
                            >
                              {syncOptions && syncOptions.map((option) => (
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


                          {mapping.mappings.map((cxmData, index) => (

                            <div className='row' key={cxmData.value} style={{ marginTop: "12px" }}>

                              <div className='col-sm'>
                                <label htmlFor={`name${index}`} className='form-label customer-label' style={{ color: "black" }}>
                                  {cxmData.cxmFieldLabel}
                                </label>
                              </div>

                              <div className='col-sm'>
                                <div className='form-group'>
                                  <select
                                    className="form-select"
                                    id={`crmEntityDropdown${index}`}
                                    // value={customMappings[index].customCrmEntities[index]}
                                    // onChange={(e) => handleCrmEntityChange(e.target.value, index, index)}
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                      width: "320px",
                                      textAlign: "left"
                                    }}
                                  >
                                    {cxmData.crmField.map((a) => (
                                      <option
                                        key={a.value}
                                        value={a.label}
                                      >
                                        {a.label}
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
                                    // value={customMappings[mappingIndex].customSyncDirections[index]}
                                    // onChange={(e) => handleSyncDirectionChange(e.target.value, index, mappingIndex)}
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                      width: "320px",
                                      textAlign: "left"
                                    }}
                                  >
                                    {syncOptions && syncOptions.map((option) => (
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

                            </div>

                          ))}

                        </div>


                        {/* custom mappings */}
                        <div>
                          <hr />
                          <span>CUSTOM FIELD MAPPINGS</span>
                          <br />

                          {customRows.map((row, index) => (
                            <div key={index}>

                              <div className="container" style={{ marginTop: "12px" }}>
                                <div className="row">
                                  <div className="col-sm" style={{ marginLeft: "-11px", marginRight: "46px" }}>
                                    <select
                                      className="form-select"
                                      id={`cxmOptionsSelect${index}`}
                                      onChange={(e) => handleFieldNameChange(e, index)}
                                      style={{
                                        backgroundColor: "white",
                                        color: "black",
                                        width: "320px",
                                        textAlign: "left"
                                      }}
                                    >
                                      <option value="">Select an OvationCXM Field </option>
                                      {mapping.mappings[0]?.cxmField.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.label}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>

                                  </div>
                                  <div className="col-sm" style={{ marginRight: "42px" }}>
                                    <div className='form-group'>
                                      <select
                                        className="form-select"
                                        id={`crmOptionsSelect${index}`}
                                        // value={customMappings[mappingIndex].customCrmEntities[index]}
                                        onChange={(e) => handleFieldNameChange(e, index)}
                                        // onChange={(e) => handleCustomCrmEntityChange(e.target.value, index, mappingIndex)}
                                        style={{
                                          backgroundColor: "white",
                                          color: "black",
                                          width: "320px",
                                          textAlign: "left"
                                        }}
                                      >
                                        <option value="">Select an MS Dynamics Field</option>
                                        {mapping.mappings[0]?.crmField.map((option) => (
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
                                      <select
                                        className="form-select"
                                        id={`syncOptionsSelect${index}`}
                                        // value={customMappings[mappingIndex].customSyncDirections[index]}
                                        onChange={(e) => handleFieldNameChange(e, index)}
                                        // onChange={(e) => handleCustomSyncDirectionChange(e.target.value, index, mappingIndex)}
                                        style={{
                                          backgroundColor: "white",
                                          color: "black",
                                          width: "320px",
                                          textAlign: "left"
                                        }}
                                      >
                                        {syncOptions && syncOptions.map((option) => (
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
                                    <i class="bi bi-x-circle-fill grey-icon" onClick={() => deleteCustomRow(index)} style={{ cursor: "pointer" }}></i>
                                  </div>
                                </div>
                              </div>

                            </div>
                          ))}

                          <button style={{ color: 'blue', border: 'none', background: 'none', marginTop: "10px" }} onClick={addCustomRow}>
                            <i className="bi bi-plus"></i>
                            &nbsp;Add Custom Mapping
                          </button>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SyncMappings;