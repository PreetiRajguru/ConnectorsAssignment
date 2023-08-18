import React from 'react';

const GeneralDetails = ({ generalDetails, setGeneralDetails, generalDetailsErrors, setGeneralDetailsErrors }) => {

    const GeneralDetailsData = [{
        desc: "Microsoft Dynamics is a line of enterprise Resource Planning and customer relationship management software applications. Microsoft markets Dynamics applications through a network of reselling partners who provide specialized services. ",
        link1: '#',
        link2: '#',
    }]

    const clearValidationError = () => {
        setGeneralDetailsErrors({});
    };

    const handleClearName = () => {
        setGeneralDetails({ ...generalDetails, name: ""});
    };

    const getInput = (e) => {
        clearValidationError({});
        setGeneralDetails({ ...generalDetails, name: e.target.value });
    }

    const inputStyle = {
        border: generalDetailsErrors.generalDetails ? '1px solid red' : '1px solid #ced4da',
    };

    return (
        <div className='heading-text'>

            {GeneralDetailsData.map((item, index) => {
                return (
                    <div key={index}>

                        <span>
                            {item.desc}
                        </span>

                        <br /><br />
                        <a href={item.link1} className='links'>Learn More  <i className="bi bi-chevron-right"></i></a>

                        <br /><br />
                        <a href={item.link2} className='links'>Get Help Setting Up Connector   <i className="bi bi-chevron-right"></i></a><br /><br />

                    </div>)
            })}

            <span><b>GENERAL DETAILS</b></span><br /><br />

            <form>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name<span className='name-label'>*</span>
                    </label>
                    <div className="input-icon">
                        <input
                            type="text"
                            className="form-control name-input"
                            id="name"
                            style={inputStyle}
                            placeholder="My New Connector"
                            value={generalDetails.name}
                            onChange={(e) => getInput(e)}
                            required
                        />
                        <button onClick={handleClearName} className='cross-button'>
                            <i
                                className="bi bi-x input-icon-icon"
                            />
                        </button>
                        {generalDetailsErrors.generalDetails && <div className="invalid-feedback">{generalDetailsErrors.generalDetails}</div>}
                    </div>
                </div>

                <div className="form-group">
                    <div className="mb-3">
                        <br />
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea
                            className="form-control name-input"
                            id="desc"
                            rows="3"
                            placeholder="My Description"
                            value={generalDetails.description}
                            onChange={(e) => setGeneralDetails({ ...generalDetails, description: e.target.value })}
                        ></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default GeneralDetails;
