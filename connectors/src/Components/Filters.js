import React, { useState } from 'react';
import filter from '../Assets/Images/filter.png';

const Filters = () => {

    const [signedIn, setSignedIn] = useState(false);

    const handleAddFilter = () => {
        setSignedIn(true);
    };

    const handleDelete = (index) => {
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData.splice(index, 1);
            return updatedFormData;
        });
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

    const handleFilterObjectChange = (event, index) => {
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
                        updatedFormData[index] = {
                            ...updatedFormData[index],
                            filterObjectName: value,
                            filters: {
                                ...updatedFormData[index].filters,
                                cxmFields: cxmFields,
                                crmFields: crmFields,
                            },
                        };
                        return updatedFormData;
                    });
                }
            }
        } else {
            setFormData((prevFormData) => {
                const updatedFormData = [...prevFormData];
                updatedFormData[index] = {
                    ...updatedFormData[index],
                    filterObjectName: value,
                    filters: {
                        ...updatedFormData[index].filters,
                        cxmFields: [],
                        crmFields: [],
                    },
                };
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

    const handleOperatorChange = (event, index) => {
        const selectedOperator = event.target.value;
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                filters: {
                    ...updatedFormData[index].filters,
                    operator: selectedOperator,
                },
            };
            return updatedFormData;
        });
    };

    const handleFieldChange = (event, index) => {
        const selectedValue = event.target.value;
        const selectedLabel = event.target.options[event.target.selectedIndex].text;

        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                filters: {
                    ...updatedFormData[index].filters,
                    cxmFields: [
                        {
                            value: selectedValue,
                            label: selectedLabel,
                        },
                    ],
                    cxmFieldName: selectedValue,
                },
            };
            return updatedFormData;
        });
    };

    const handleCrmFieldChange = (event, index) => {
        const selectedValue = event.target.value;

        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                filters: {
                    ...updatedFormData[index].filters,
                    crmFieldName: selectedValue,
                },
            };
            return updatedFormData;
        });
    };

    const addFilterGroup = () => {
        const newFilterGroup = {
            filterGroupName: '',
            filterObjectName: '',
            filterDirection: '',
            isActive: false,
            filters: {
                operator: '',
                cxmFields: [],
                crmFields: [],
                cxmFieldName: '',
                crmFieldName: '',
            }
        };

        setFormData((prevFormData) => [...prevFormData, newFilterGroup]);
    };

    // const addNewFilter = (index) => {

    //     const newFilter = {
    //             operator: '',
    //             cxmFields: [],
    //             crmFields: [],
    //             cxmFieldName: '',
    //             crmFieldName: '',
    //     };

    //     const updatedFormData = [...formData];
    //     updatedFormData[index].filters.push(newFilter);
    //     setFormData(updatedFormData);
    // };

    const [formData, setFormData] = useState([
        {
            filterGroupName: '',
            filterObjectName: '',
            filterDirection: '',
            isActive: false,
            filters: {
                operator: '',
                cxmFields: [],
                crmFields: [],
                cxmFieldName: '',
                crmFieldName: '',
            }
        }
    ]);

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

    return (
        <div>{!signedIn ?

            //first part
            <div className="filters-container">
                <img
                    src={filter}
                    alt="Logo"
                    style={{
                        height: "110px",
                        width: "150px",
                        marginTop: "7%",
                        marginLeft: "45%",
                    }}
                />
                <div style={{
                    marginTop: "1%",
                    marginLeft: "45%",
                }}><span style={{ fontSize: "20px" }}> No Filter Groups</span>
                </div>

                <div style={{
                    marginTop: "1%",
                    marginLeft: "36%",
                    color: "grey"
                }}>

                    <span>
                        If no filter groups are added, all the configured content will <br />
                        <span style={{ marginLeft: "6px" }}>
                            be sync'd. If you would like to add conditional filtering to </span><br />
                        <span style={{ marginLeft: "59px" }}>
                            each sync, select Add Filter Group Below.</span>
                    </span>

                    <br />

                    <button type="button" className="btn btn-outline-secondary" onClick={handleAddFilter}
                        style={{
                            marginTop: "2%",
                            marginLeft: "13%",
                            width: "auto"
                        }}>
                        <i class="bi bi-plus-lg"></i> Add Filter Group</button>
                </div>
            </div> :

            //second part
            <div style={{ marginLeft: "20px" }}>
                {formData.map((filterGroup, index) => (
                    <div className="card" key={index} style={{ backgroundColor: "#ebf3f9", borderBlockColor: "#4ca8ee", width: "950px", marginTop: "20px" }}>
                        <div className="card-body">

                            <label htmlFor="name" className="form-label">
                                Filter Group Name<span className='name-label'>*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name-input"
                                    placeholder="Enter a Filter Group Name"
                                    required
                                    style={{ width: "230px", marginRight: "18px" }}
                                    value={filterGroup.filterGroupName}
                                    onChange={(e) => handleFilterGroupNameChange(e, index)}
                                />
                            </label>

                            <label htmlFor="name" className="form-label" style={{ marginRight: "18px" }}>
                                Filter Object<span className='name-label'>*</span>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleFilterObjectChange(e, index)}
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
                                    onChange={(e) => handleFilterDirectionChange(e, index)}
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
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ marginLeft: "15px", marginTop: "35px" }}
                                onChange={(e) => handleCheckboxChange(e, index)}
                                checked={filterGroup.isActive}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault" style={{ marginLeft: "10px" }}>
                                Active
                            </label>

                            <i class="bi bi-trash" style={{ marginLeft: "25px", cursor: "pointer", fontSize: "24px", color: "grey" }} onClick={() => handleDelete(index)}></i>

                        </div>


                        <div className="card" style={{ backgroundColor: "#f8f6f6", borderBlockColor: "grey", width: "920px", marginLeft: "13px", marginBottom: "20px" }}>
                            <div className="card-body">

                                <div style={{ display: "flex", alignItems: "center" }}>
                                    Sync this field if
                                    <select class="form-select" aria-label="Default select example" style={{ width: "80px", marginLeft: "15px", marginRight: "15px" }}>
                                        <option selected>All</option>
                                    </select>
                                    of the following match:
                                </div>

                                <hr></hr>

                                <label htmlFor="name" className="form-label" style={{ marginRight: "18px" }}>
                                    Field
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={filterGroup.filters.cxmFieldName || ''}
                                        onChange={(e) => handleFieldChange(e, index)}
                                    >
                                        <option value="" disabled>Select a Field</option>
                                        {formData[index].filterObjectName &&
                                            cxmEntityField
                                                .find((entity) => entity.entityName === formData[index].filterObjectName)
                                                .entityField.map((field, index) => (
                                                    <option key={index} value={field.value}>
                                                        {field.label}
                                                    </option>
                                                ))}
                                    </select>
                                </label>

                                <label htmlFor="name" className="form-label" style={{ marginRight: "18px" }}>
                                    Operator
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => handleOperatorChange(e, index)}
                                        value={filterGroup.filters.operator}
                                    >
                                        {operatorOptions.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label htmlFor="name" className="form-label" style={{ marginRight: "18px" }}>
                                    Comparison Value
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        style={{ width: "430px" }}
                                        value={filterGroup.filters.crmFieldName}
                                        onChange={(e) => handleCrmFieldChange(e, index)}
                                    >
                                        <option value="" disabled>
                                            Select a CRM Field
                                        </option>
                                        {filterGroup.filters.crmFields.map((field, index) => (
                                            <option key={index} value={field.value}>
                                                {field.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <i class="bi bi-x-circle-fill"
                                    style={{ color: "grey", marginLeft: "22px" }}
                                ></i>

                            </div>

                            <button className='add-custom-mapping' style={{
                                color: "blue",
                                border: "none",
                                background: "none",
                                marginTop: "-14px",
                                marginLeft: "-792px",
                            }}
                            // onClick={() => addNewFilter(index)}
                            >
                                <i className="bi bi-plus"></i>
                                &nbsp;Add Filter
                            </button>
                        </div>

                    </div>
                ))}

                <button
                    className='add-custom-mapping'
                    style={{
                        color: "blue",
                        border: "none",
                        background: "none",
                        marginTop: "14px",
                        marginBottom: "-5px"
                    }}
                    onClick={addFilterGroup}
                >
                    <i className="bi bi-plus"></i>
                    &nbsp;Add Filter Group
                </button>
            </div>
        }</div>
    );
}

export default Filters;