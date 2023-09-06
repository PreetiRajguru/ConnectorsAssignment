import React, { useState } from 'react';
import filter from '../Assets/Images/filter.png';

const Filters = () => {

    const [signedIn, setSignedIn] = useState(false);

    const handleAddFilter = () => {
        setSignedIn(true);
    };

    const filterObjectOptions = [
        { value: 'customer', label: 'Customer' },
        { value: 'contact', label: 'Contact' },
        { value: 'case', label: 'Case' },
    ];

    const filterDirectionOptions = [
        { value: 'OvationCXM <-> Microsoft Dynamics', label: 'OvationCXM <-> Microsoft Dynamics' },
        { value: 'OvationCXM -> Microsoft Dynamics', label: 'OvationCXM -> Microsoft Dynamics' },
        { value: 'OvationCXM <- Microsoft Dynamics', label: 'OvationCXM <- Microsoft Dynamics' },
        { value: 'Do Not Sync', label: 'Do Not Sync' },
    ];

    const operatorOptions = [
        { value: 'notequal', label: 'Is Not Equal To' },
        { value: 'equal', label: 'Is Equal To' },
    ];

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
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
                { value: 'three', label: 'Three' },
                { value: 'four', label: 'Four' },
            ],
        },
    ];

    const crmEntityField = [
        {
            entityName: 'product',
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
            entityName: 'users',
            entityField: [
                { value: 'field1', label: 'Field No 1' },
                { value: 'field2', label: 'Field No 2' },
                { value: 'field3', label: 'Field No 3' },
                { value: 'field4', label: 'Field No 4' },
                { value: 'field5', label: 'Field No 5' },
            ],
        },
        {
            entityName: 'issues',
            entityField: [
                { value: 'one', label: 'One One' },
                { value: 'two', label: 'Two Two' },
                { value: 'three', label: 'Three Three' },
                { value: 'four', label: 'Four Four' },
            ],
        },
    ];

    const [formData, setFormData] = useState([
        {
            filterGroupName: '',
            filterObjectName: '',
            filterDirection: '',
            isActive: false,
            filters: [{
                operator: '',
                cxmFields: [],
                crmFields: [],
                cxmFieldName: '',
                crmFieldName: '',
            },
            ],
        }
    ]);

    const addFilterGroup = () => {
        const newFilterGroup = {
            filterGroupName: '',
            filterObjectName: '',
            filterDirection: '',
            isActive: false,
            filters: [
                {
                    operator: '',
                    cxmFields: [],
                    crmFields: [],
                    cxmFieldName: '',
                    crmFieldName: '',
                },
            ],
        };

        setFormData((prevFormData) => [...prevFormData, newFilterGroup]);
    };

    const addNewFilter = (groupIndex) => {
        const newFilter = {
            operator: '',
            cxmFields: [],
            crmFields: [],
            cxmFieldName: '',
            crmFieldName: '',
        };

        const updatedFormData = [...formData];
        updatedFormData[groupIndex].filters.push(newFilter);
        setFormData(updatedFormData);
    };

    const handleDeleteFilterGroup = (index) => {
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData.splice(index, 1);
            return updatedFormData;
        });
    };

    const handleDeleteFilterRow = (groupIndex, filterIndex) => {

        const updatedFormData = [...formData];
        const filter = updatedFormData[groupIndex];

        if (filter && filter.filters) {
            filter.filters.splice(filterIndex, 1);
            setFormData(updatedFormData);
        }
    };

    const handleFilterGroupNameChange = (e, index) => {
        const value = e.target.value;
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                filterGroupName: value,
            };
            return updatedFormData;
        });
    };

    const handleFilterObjectChange = (event, groupIndex) => {
        const value = event.target.value;

        const matchingMapping = mappingData.find((mapping) => mapping.cxmEntityName === value);

        if (matchingMapping) {
            const crmEntityName = matchingMapping.crmEntityName;

            const matchingCrmEntity = crmEntityField.find((entity) => entity.entityName === crmEntityName);

            if (matchingCrmEntity) {
                const crmFields = matchingCrmEntity.entityField;

                const matchingCxmEntity = cxmEntityField.find((entity) => entity.entityName === value);

                if (matchingCxmEntity) {
                    const cxmFields = matchingCxmEntity.entityField;

                    setFormData((prevFormData) => {
                        const updatedFormData = [...prevFormData];
                        const updatedFilterGroup = { ...updatedFormData[groupIndex] };
                        updatedFilterGroup.filterObjectName = value;

                        updatedFilterGroup.filters = updatedFilterGroup.filters || [];

                        if (updatedFilterGroup.filters.length > 0) {
                            updatedFilterGroup.filters.forEach((filter) => {
                                filter.cxmFields = cxmFields;
                                filter.crmFields = crmFields;
                            });
                        }

                        updatedFormData[groupIndex] = updatedFilterGroup;
                        return updatedFormData;
                    });
                }
            }
        } else {
            setFormData((prevFormData) => {
                const updatedFormData = [...prevFormData];
                const updatedFilterGroup = { ...updatedFormData[groupIndex] };
                updatedFilterGroup.filterObjectName = value;

                updatedFilterGroup.filters = updatedFilterGroup.filters || [];

                updatedFormData[groupIndex] = updatedFilterGroup;
                return updatedFormData;
            });
        }
    };

    const handleFilterDirectionChange = (event, index) => {
        const value = event.target.value;
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                filterDirection: value,
            };
            return updatedFormData;
        });
    };

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

    const handleOperatorChange = (event, groupIndex, filterIndex) => {
        const selectedOperator = event.target.value;

        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            const updatedFilterGroup = { ...updatedFormData[groupIndex] };

            updatedFilterGroup.filters = updatedFilterGroup.filters || [];

            if (!updatedFilterGroup.filters[filterIndex]) {
                updatedFilterGroup.filters[filterIndex] = {
                    operator: '',
                    cxmFields: [],
                    crmFields: [],
                    cxmFieldName: '',
                    crmFieldName: '',
                };
            }

            updatedFilterGroup.filters[filterIndex].operator = selectedOperator;

            updatedFormData[groupIndex] = updatedFilterGroup;
            return updatedFormData;
        });
    };

    const handleFieldChange = (event, groupIndex, filterIndex) => {
        const selectedValue = event.target.value;
        const selectedLabel = event.target.options[event.target.selectedIndex].text;

        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            const updatedFilterGroup = { ...updatedFormData[groupIndex] };

            updatedFilterGroup.filters = updatedFilterGroup.filters || [];

            if (!updatedFilterGroup.filters[filterIndex]) {
                updatedFilterGroup.filters[filterIndex] = {
                    operator: '',
                    cxmFields: [],
                    crmFields: [],
                    cxmFieldName: '',
                    crmFieldName: '',
                };
            }

            updatedFilterGroup.filters[filterIndex].cxmFields = [
                {
                    value: selectedValue,
                    label: selectedLabel,
                },
            ];
            updatedFilterGroup.filters[filterIndex].cxmFieldName = selectedValue;

            updatedFormData[groupIndex] = updatedFilterGroup;
            return updatedFormData;
        });
    };

    const handleCrmFieldChange = (event, groupIndex, filterIndex) => {
        const selectedValue = event.target.value;

        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            const updatedFilterGroup = { ...updatedFormData[groupIndex] };

            updatedFilterGroup.filters = updatedFilterGroup.filters || [];

            if (!updatedFilterGroup.filters[filterIndex]) {
                updatedFilterGroup.filters[filterIndex] = {
                    operator: '',
                    cxmFields: [],
                    crmFields: [],
                    cxmFieldName: '',
                    crmFieldName: '',
                };
            }

            updatedFilterGroup.filters[filterIndex].crmFieldName = selectedValue;

            updatedFormData[groupIndex] = updatedFilterGroup;
            return updatedFormData;
        });
    };

    return (
        <div>{!signedIn ?

            //first part
            <div className="filters-container">
                <img
                    src={filter}
                    alt="Logo"
                    className='filter-logo'
                />

                <div className='filter-title'><span id='filter-header'> No Filter Groups</span></div>

                <div className='filter-text'>

                    <span>
                        <div> If no filter groups are added, all the configured content will </div>
                        <span className='span-tab'>
                            be sync'd. If you would like to add conditional filtering to </span>
                        <div><span className='span-tab-text'>
                            each sync, select Add Filter Group Below.</span></div>
                    </span>


                    <div>
                        <button
                            type="button"
                            className="btn btn-outline-secondary button-add-filter"
                            onClick={handleAddFilter}
                        >
                            <i className="bi bi-plus-lg"></i> Add Filter Group
                        </button>
                    </div>
                </div>

            </div> :

            //second part
            <div className='filter-screen'>

                {formData.map((filterGroup, groupIndex) => (

                    <div className="card" key={groupIndex} id="filter-group-card">

                        <div className="card-body">

                            <label htmlFor="name" className="form-label">
                                Filter Group Name<span className='name-label'>*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="filter-group-name"
                                    placeholder="Enter a Filter Group Name"
                                    required
                                    value={filterGroup.filterGroupName}
                                    onChange={(e) => handleFilterGroupNameChange(e, groupIndex)}
                                />
                            </label>

                            <label htmlFor="name" className="form-label filter-object-label">
                                Filter Object<span className='name-label'>*</span>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleFilterObjectChange(e, groupIndex)}
                                    value={filterGroup.filterObjectName}
                                >
                                    {filterObjectOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label htmlFor="name" className="form-label">
                                Filter Direction<span className='name-label'>*</span>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleFilterDirectionChange(e, groupIndex)}
                                    value={filterGroup.filterDirection}
                                >
                                    {filterDirectionOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <input
                                className="form-check-input "
                                type="checkbox"
                                value=""
                                id="active-checkbox"
                                onChange={(e) => handleCheckboxChange(e, groupIndex)}
                                checked={filterGroup.isActive}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault" id='active-label'>
                                Active
                            </label>

                            <i className="bi bi-trash delete-filter-group" onClick={() => handleDeleteFilterGroup(groupIndex)}></i>

                        </div>

                        <div className="card" id='filter-card'>

                            <div className="card-body">

                                <div className='inner-card-title'>
                                    Sync this field if
                                    <select className="form-select " aria-label="Default select example" id='inner-card-title-text'>
                                        <option >All</option>
                                    </select>
                                    of the following match:
                                </div>

                                <hr></hr>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm select-field-text">
                                            Field
                                        </div>
                                        <div class="col-sm select-operator-text">
                                            Operator
                                        </div>
                                        <div class="col-sm select-comparison-text">
                                            Comparison Value
                                        </div>
                                    </div>
                                </div>

                                {filterGroup.filters.map((filter, filterIndex) => (

                                    <div key={filterIndex}>

                                        <div className='custom-filters'>

                                            {/* Column 1 */}
                                            <div className='field-column'>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    value={filter.cxmFieldName || ''}
                                                    onChange={(e) => handleFieldChange(e, groupIndex, filterIndex)}
                                                >
                                                    <option value="" disabled>Select a Field</option>
                                                    {formData[groupIndex].filterObjectName &&
                                                        cxmEntityField
                                                            .find((entity) => entity.entityName === formData[groupIndex].filterObjectName)
                                                            .entityField.map((field, index) => (
                                                                <option key={index} value={field.value}>
                                                                    {field.label}
                                                                </option>
                                                            ))}
                                                </select>
                                            </div>

                                            {/* Column 2 */}
                                            <div className='operator-column'>
                                                <select
                                                    className="form-select "
                                                    aria-label="Default select example"
                                                    onChange={(e) => handleOperatorChange(e, groupIndex, filterIndex)}
                                                    value={filter.operator}
                                                    id='operator-select'
                                                >
                                                    {operatorOptions.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Column 3 */}
                                            <div className='crm-column'>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id='crm-select'
                                                    value={filter.crmFieldName}
                                                    onChange={(e) => handleCrmFieldChange(e, groupIndex, filterIndex)}
                                                >
                                                    <option value="" disabled>
                                                        Select a CRM Field
                                                    </option>
                                                    {filter.crmFields.map((field, index) => (
                                                        <option key={index} value={field.value}>
                                                            {field.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Column 4 */}
                                            <div className='delete-column'>
                                                <i
                                                    className="bi bi-x-circle-fill"
                                                    id='delete-filter'
                                                    onClick={() => handleDeleteFilterRow(groupIndex, filterIndex)}
                                                ></i>
                                            </div>
                                        </div>

                                    </div>

                                ))}

                            </div>

                            <button className='add-custom-mapping' id='add-filter-button'
                                onClick={() => addNewFilter(groupIndex)}
                            >
                                <i className="bi bi-plus"></i>
                                Add Filter
                            </button>
                        </div>

                    </div>

                ))}

                <button
                    className='add-custom-mapping'
                    id='add-filter-group-button'
                    onClick={addFilterGroup}
                >
                    <i className="bi bi-plus"></i>
                    Add Filter Group
                </button>
            </div>

        }</div>
    );
}

export default Filters;