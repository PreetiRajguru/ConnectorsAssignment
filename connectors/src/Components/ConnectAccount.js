import React, { useState, useEffect } from 'react';

const ConnectAccount = ({ connectAccount, setConnectAccount, connectAccountErrors, setConnectAccountErrors }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [initialValues, setInitialValues] = useState({});

    const [dynamicsValid, setDynamicsValid] = useState(false);
    const [ovationValid, setOvationValid] = useState(false);
    const [secretValid, setSecretValid] = useState(false);

    useEffect(() => {
        setInitialValues(connectAccount);
    }, [connectAccount]);


    const handleSignIn = () => {
        setSignedIn(true);
    };

    const handleDisconnect = () => {
        setSignedIn(false);
        setConnectAccount(initialValues);
        setConnectAccountErrors({});
    };

    const clearValidationError = (fieldName) => {
        setConnectAccountErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: undefined,
        }));
    };

    const isValidURL = (url) => {
        const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        return pattern.test(url);
    };

    const getInput = (e, fieldName) => {
        const value = e.target.value;
        clearValidationError(fieldName);
        setConnectAccount({ ...connectAccount, [fieldName]: value });

        if (fieldName === 'dynamics') {
            setDynamicsValid(value.trim() !== '' && isValidURL(value));
        } else if (fieldName === 'ovation') {
            setOvationValid(value.trim() !== '');
        } else if (fieldName === 'secret') {
            setSecretValid(value.trim() !== '');
        }
    };


    const getInputStyle = (hasError) => ({
        border: hasError ? '1px solid red' : '1px solid #ced4da',
    });

    const [open, setOpen] = useState(false);
    const icon = <i className="bi bi-chevron-down arrow-position dropdown" onClick={() => { setOpen(!open) }}></i>;

    const [openInput, setOpenInput] = useState(false);
    const toggle = <input className="form-check-input toggle-buttons" type="checkbox" id={`toggleButton-3`} onChange={(e) => setConnectAccount({ ...connectAccount, toggle3: e.target.value })} onClick={() => { setOpenInput(!openInput) }}
    />

    const AccountData = [{
        url: "https://ovationcxm.msdynamics.com",
        acc: 'jmith@ovationcxm.com',
        apikey: '2xo4jdajh5541as3',
        apisecret: '**********',
    }]

    return (
        <div className='connect-account-data'>
            <span ><b>CONNECT YOUR ACCOUNT</b></span>

            <form className='form-top'>

                {!signedIn ? (
                    <form className='form-top'>
                        <div className="form-group">
                            <label htmlFor="dynamics" className="form-label">
                                Dynamics CRM URL<span className='name-label'>*</span><i class="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title="Dynamics CRM URL"></i>
                            </label>
                            <div className="input-icon">
                                <input
                                    type="text"
                                    className="form-control name-input"
                                    id="dynamics"
                                    style={getInputStyle(connectAccountErrors.dynamics)}
                                    placeholder="https://example.com"
                                    value={connectAccount.dynamics}
                                    onChange={(e) => getInput(e, "dynamics")}
                                    required
                                />
                                {connectAccountErrors.dynamics && <div className="invalid-feedback">{connectAccountErrors.dynamics}</div>}
                            </div>
                        </div>

                        <div className="form-group field-input">
                            <label htmlFor="ovation" className="form-label">
                                OvationCXM API Key<span className='name-label'>*</span><i class="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title="OvationCXM API Key"></i>
                            </label>
                            <div className="input-icon">
                                <input
                                    type="text"
                                    className="form-control name-input"
                                    id="ovation"
                                    style={getInputStyle(connectAccountErrors.ovation)}
                                    value={connectAccount.ovation}
                                    onChange={(e) => getInput(e, "ovation")}
                                    required
                                />
                                {connectAccountErrors.ovation && <div className="invalid-feedback">{connectAccountErrors.ovation}</div>}
                            </div>
                        </div>

                        <div className="form-group field-input">
                            <label htmlFor="secret" className="form-label">
                                OvationCXM API Secret<span className='name-label'>*</span><i class="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title="OvationCXM API Secret"></i>
                            </label>

                            <div className="input-icon">
                                <input
                                    type="text"
                                    className="form-control name-input"
                                    id="secret"
                                    style={getInputStyle(connectAccountErrors.secret)}
                                    value={connectAccount.secret}
                                    onChange={(e) => getInput(e, "secret")}
                                    required
                                />
                                {connectAccountErrors.secret && <div className="invalid-feedback">{connectAccountErrors.secret}</div>}
                            </div>
                        </div>

                        <label htmlFor="account" className="form-label field-input">
                            Connect your Account<span className='name-label'>*</span>
                        </label><br />
                        <button className='btn btn-outline-secondary me-2' id="account" onClick={handleSignIn} disabled={!dynamicsValid || !ovationValid || !secretValid}>Sign In</button><br />
                    </form>
                ) : (
                    <div>

                        <i class="bi bi-check-circle-fill acc-icon"></i>
                        <span className='acc-connected'>Account Connected</span>
                        <button className='btn btn-outline-secondary text-center acc-disconnect' onClick={handleDisconnect}>Disconnect Account</button>
                        <hr className='acc-hr'></hr>

                        {AccountData.map((item, index) => {
                            return (
                                <div key={index}>

                                    <div className="container acc-container">
                                        <div className="row">

                                            <div className="w-100 acc-grid-top"></div>
                                            <div className="col acc-grid-url">URL</div>
                                            <div className="col acc-grid.item">{item.url}</div>
                                            <hr className='acc-grid-hr'></hr>

                                            <div className="w-100 acc-spacing"></div>
                                            <div className="col acc-item">Account</div>
                                            <div className="col acc-desc ">{item.acc}</div>
                                            <hr className='acc-grid-hr'></hr>

                                            <div className="w-100 acc-spacing"></div>
                                            <div className="col acc-item">API Key</div>
                                            <div className="col acc-desc ">{item.apikey}</div>
                                            <hr className='acc-grid-hr'></hr>

                                            <div className="w-100 acc-spacing"></div>
                                            <div className="col acc-item">API Secret</div>
                                            <div className="col acc-desc ">{item.apisecret}</div>
                                        </div>
                                    </div>
                                </div>)
                        })}

                        <span className='acc-text'>Form</span>

                    </div>
                )}

                <div className='toggle-top'>
                    <div className='toggle-icon'>
                        {icon} <span onClick={() => { setOpen(!open) }} className='dropdown toggle-text'>Additional configuration</span><br />
                    </div>
                    {open && <div className=" form-switch">
                        <input
                            className="form-check-input toggle-space"
                            type="checkbox"
                            id={`toggleButton-1`}
                            onChange={(e) => setConnectAccount({ ...connectAccount, toggle1: e.target.value })}
                        />
                        <label className="form-check-label toggle-alignment toggle-button-label" htmlFor={`toggleButton-1`}>
                            Register Webhooks in Microsoft Dynamics<i class="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title="Register Webhooks in Microsoft Dynamics"></i>
                        </label><br />

                        <input
                            className="form-check-input toggle-space"
                            type="checkbox"
                            id={`toggleButton-2`}
                            onChange={(e) => setConnectAccount({ ...connectAccount, toggle2: e.target.value })}
                        />
                        <label className="form-check-label toggle-alignment toggle-button-label" htmlFor={`toggleButton-2`}>
                            Register Custom Fields in Microsoft Dynamics<i class="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title=" Register Custom Fields in Microsoft Dynamics"></i>
                        </label><br />
                        {toggle}
                        <label className="form-check-label toggle-alignment toggle-button-label" htmlFor={`toggleButton-3`}>
                            Service Provider Mode<i className="bi bi-info-circle info-icon" data-toggle="tooltip" data-placement="right" title="Service Provider Mode"></i>
                        </label>
                        {openInput && <div className=" form-switch">
                            <div className="form-group orgid-label">
                                <label htmlFor="orgid" className="form-label orgid-label-color">
                                    Standard Org Id
                                </label>

                                <div className="input-icon">
                                    <input
                                        type="text"
                                        className="form-control name-input"
                                        id="orgid"
                                        placeholder="Enter three character ORG ID"
                                        maxlength="3"
                                        onChange={(e) => setConnectAccount({ ...connectAccount, orgid: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>}
                    </div>}
                </div>
            </form>
        </div>
    )
}

export default ConnectAccount;
