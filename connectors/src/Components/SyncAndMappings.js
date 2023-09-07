import React, { useState } from 'react';

const SyncMappings = ({ syncAndMappings, setSyncAndMappings, syncAndMappingsErrors, setSyncAndMappingsErrors }) => {

  const mappingData = [
    {
      cxmEntityName: 'Customer/Location',
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
      entityName: 'Customer/Location',
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
  ];

  const [formData, setFormData] = useState(mappingData.map((e) => ({
    cxmEntityName: e.cxmEntityName,
    crmEntityName: e.crmEntityName,
    syncDirection: '',
    isActive: false,
    mappings: cxmEntityField.filter(s => s.entityName == e.cxmEntityName)[0].entityField.map((cxm) => ({
      cxmFieldLabel: cxm.label,
      cxmFieldName: cxm.value,
      crmFieldLabel: '',
      crmFieldName: '',
      syncDirection: '',
      crmField: crmEntityField.filter(s => s.entityName == e.crmEntityName)[0]?.entityField,
      cxmField: cxmEntityField.filter(s => s.entityName == e.cxmEntityName)[0]?.entityField,
      isCustomField: cxm.isCustomField,
    })),
  })));

  const handleCheckboxChange = (event, index) => {
    const checked = event.target.checked;
    setFormData((prevFormData) => {
        const updatedFormData = [...prevFormData];
        updatedFormData[index] = {
            ...updatedFormData[index],
            isActive: checked,
        };
        return updatedFormData;
    });
};

  const addCustomRow = (index) => {
    const selectedMapping = formData[index];
    const crmEntityName = selectedMapping.crmEntityName;
    const cxmEntityName = selectedMapping.cxmEntityName;

    const crmEntity = crmEntityField.find((entity) => entity.entityName === crmEntityName);
    const cxmEntity = cxmEntityField.find((entity) => entity.entityName === cxmEntityName);

    const newRow = {
      cxmFieldLabel: '',
      cxmFieldName: '',
      crmFieldLabel: '',
      crmFieldName: '',
      syncDirection: '',
      crmField: crmEntity ? crmEntity.entityField.map((field) => ({ label: field.label, value: field.value })) : [],
      cxmField: cxmEntity ? cxmEntity.entityField.map((field) => ({ label: field.label, value: field.value })) : [],
      isCustomField: true,
    };

    const updatedFormData = [...formData];
    updatedFormData[index].mappings.push(newRow);
    setFormData(updatedFormData);
  };

  const handleApplyToAll = (mappingIndex) => {
    const selectedSyncDirection = formData[mappingIndex].syncDirection;
    const updatedFormData = formData.map((mapping, index) => {
      if (index === mappingIndex) {
        const updatedMappings = mapping.mappings.map((m) => ({
          ...m,
          syncDirection: selectedSyncDirection,
        }));

        return { ...mapping, mappings: updatedMappings };
      } else {
        return mapping;
      }
    });
    setFormData([...updatedFormData]);
  };

  console.log(formData);

  const handleCustomSyncDirectionChange = (index, innerIndex, selectedSyncDirection) => {
    const updatedFormData = [...formData];
    const mapping = updatedFormData[index];
    const selectedField = mapping.mappings.filter(s => s.isCustomField)[innerIndex];
    selectedField.syncDirection = selectedSyncDirection;
    updatedFormData[index] = mapping;
    setFormData(updatedFormData);
  };

  const handleCustomCxmFieldChange = (index, innerIndex, value) => {
    const updatedFormData = [...formData];
    const mapping = updatedFormData[index];
    const selectedField = mapping.mappings.filter(s => s.isCustomField)[innerIndex];

    // label for cxmFieldName in the cxmEntityField array
    const cxmEntity = cxmEntityField.find(entity => entity.entityName === mapping.cxmEntityName);
    if (cxmEntity) {
      const cxmField = cxmEntity.entityField.find(field => field.value === value);
      if (cxmField) {
        selectedField.cxmFieldName = value;
        selectedField.cxmFieldLabel = cxmField.label;
      } else {
        // when the selected cxmFieldName is not found
        selectedField.cxmFieldName = '';
        selectedField.cxmFieldLabel = '';
      }
    } else {
      // when the cxmEntity is not found
      selectedField.cxmFieldName = '';
      selectedField.cxmFieldLabel = '';
    }
    updatedFormData[index] = mapping;
    setFormData(updatedFormData);
  };

  const handleCustomCrmFieldChange = (index, innerIndex, value) => {
    const updatedFormData = [...formData];
    const mapping = updatedFormData[index];
    const selectedField = mapping.mappings.filter(s => s.isCustomField)[innerIndex];

    // label for crmFieldName in the crmEntityField array
    const crmEntity = crmEntityField.find(entity => entity.entityName === mapping.crmEntityName);
    if (crmEntity) {
      const crmField = crmEntity.entityField.find(field => field.value === value);
      if (crmField) {
        selectedField.crmFieldName = value;
        selectedField.crmFieldLabel = crmField.label;
      } else {
        // when the selected crmFieldName is not found
        selectedField.crmFieldName = '';
        selectedField.crmFieldLabel = '';
      }
    } else {
      //  when the crmEntity is not found
      selectedField.crmFieldName = '';
      selectedField.crmFieldLabel = '';
    }
    updatedFormData[index] = mapping;
    setFormData(updatedFormData);
  };

  // delete a custom row
  const deleteCustomRow = (index, innerIndex) => {
    const updatedFormData = [...formData];
    const mapping = updatedFormData[index];

    if (mapping && mapping.mappings) {
      const customMappings = mapping.mappings.filter((m) => m.isCustomField);

      const customIndexToDelete = mapping.mappings.indexOf(customMappings[innerIndex]);
      mapping.mappings.splice(customIndexToDelete, 1);
      setFormData(updatedFormData);
    }
  };

  const handleSyncDirectionChanged = (index, selectedSyncDirection) => {
    const updatedFormData = [...formData];
    updatedFormData[index].syncDirection = selectedSyncDirection;
    setFormData(updatedFormData);
  };

  const handleSyncDirectionChange = (mappingIndex, innerIndex, selectedSyncDirection) => {
    const updatedFormData = [...formData];
    updatedFormData[mappingIndex].mappings[innerIndex].syncDirection = selectedSyncDirection;
    setFormData(updatedFormData);
  };

  const handleCrmChange = (mappingIndex, innerIndex, selectedCrm) => {
    const updatedFormData = [...formData];
    const crmEntityName = updatedFormData[mappingIndex].crmEntityName;

    const selectedCrmField = crmEntityField
      .find(entity => entity.entityName === crmEntityName)
      .entityField.find(field => field.label === selectedCrm);

    if (selectedCrmField) {
      updatedFormData[mappingIndex].mappings[innerIndex].crmFieldName = selectedCrmField.value;
      updatedFormData[mappingIndex].mappings[innerIndex].crmFieldLabel = selectedCrmField.label;
    } else {
      // when the selectedCrm is not found
      updatedFormData[mappingIndex].mappings[innerIndex].crmFieldName = '';
      updatedFormData[mappingIndex].mappings[innerIndex].crmFieldLabel = '';
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='sync-mappings'>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Choose the items you would like to sync and their direction</span>

          <div className='accordion-place'>

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
                          <input className='form-check-input' type='checkbox' value='' id={`flexCheckDefault${index}`}  onChange={(e) => handleCheckboxChange(e, index)}
                                checked={mapping.isActive} />
                          <label className='form-check-label' htmlFor={`flexCheckDefault${index}`}>
                            {mapping.cxmEntityName}
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
                              onClick={() => handleApplyToAll(index)}
                              className='apply-to-all apply-to-all-button'
                            >
                              <i className="bi bi-arrow-clockwise"></i> Apply to All
                            </button>


                            <select
                              className="form-select apply-all-select"
                              id={`syncDirectionOptions${index}`}
                              value={mapping.syncDirection}
                              onChange={(e) => handleSyncDirectionChanged(index, e.target.value)}
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

                        <div className="container accordion-row ">

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

                          {mapping.mappings
                            .filter((c) => !c.isCustomField)
                            .map((cxmData, innerIndex) => (

                              <div className='row' key={cxmData.value} id="cxm-row">

                                <div className='col-sm'>
                                  <label htmlFor={`name${index}`} className='form-label customer-label cxm-label'>
                                    {cxmData.cxmFieldLabel}
                                  </label>
                                </div>

                                <div className='col-sm'>
                                  <div className='form-group'>
                                    <select
                                      className="form-select select-fields"
                                      id={`crmEntityDropdown${index}`}
                                      onChange={(e) => handleCrmChange(index, innerIndex, e.target.value)}
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
                                      className="form-select select-fields"
                                      id={`syncDirectionDropdown${index}`}
                                      value={cxmData.syncDirection}
                                      onChange={(e) => handleSyncDirectionChange(index, innerIndex, e.target.value)}
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

                          {mapping.mappings
                            .filter((c) => c.isCustomField)
                            .map((cxmData, innerIndex) => (
                              <div key={innerIndex}>

                                <div className="container custom-mapping-container">
                                  <div className="row">
                                    <div className="col-sm custom-mapping-row">
                                      <select
                                        className="form-select select-fields"
                                        id={`cxmEntityDropdown${index}`}
                                        value={cxmData.cxmFieldName}
                                        onChange={(e) => handleCustomCxmFieldChange(index, innerIndex, e.target.value)}
                                      >
                                        <option value="">Select an OvationCXM Field </option>
                                        {cxmData.cxmField.map((option) => (
                                          <option
                                            key={option.value}
                                            value={option.value}
                                          >
                                            {option.label}
                                          </option>
                                        ))}
                                      </select>

                                    </div>
                                    <div className="col-sm custom-crm-select">
                                      <div className='form-group custom-crm-place'>
                                        <select
                                          className="form-select select-fields"
                                          id={`crmEntityDropdown${index}`}
                                          value={cxmData.crmFieldName}
                                          onChange={(e) => handleCustomCrmFieldChange(index, innerIndex, e.target.value)}
                                        >
                                          <option value="">Select an MS Dynamics Field</option>
                                          {cxmData.crmField.map((option) => (
                                            <option
                                              key={option.value}
                                              value={option.value}
                                            >
                                              {option.label}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-sm custom-sync-select">
                                      <div className='form-group'>
                                        <select
                                          className="form-select select-fields"
                                          id={`syncOptionsSelect${innerIndex}`}
                                          value={cxmData.syncDirection}
                                          onChange={(e) => handleCustomSyncDirectionChange(index, innerIndex, e.target.value)}
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
                                      <i class="bi bi-x-circle-fill grey-icon delete-row"
                                        onClick={() => deleteCustomRow(index, innerIndex)}
                                      ></i>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            ))}
                          <button className='add-custom-mapping' onClick={() => addCustomRow(index)}>
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