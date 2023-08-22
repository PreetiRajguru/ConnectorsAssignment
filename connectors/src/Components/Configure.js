import React, { useState } from 'react';
import GeneralDetails from './GeneralDetails';
import { Link } from 'react-router-dom';
import * as constants from '../Constants/ConstantMessages';

const steps = [
    { label: 'General Details', component: GeneralDetails },
    { label: 'Connect Account', component: GeneralDetails },
    { label: 'Sync & Mappings', component: GeneralDetails },
    { label: 'Filters', component: GeneralDetails },
    { label: 'Test & enable Connection', component: GeneralDetails },
];

function DoneIcon() {
    return <i class="bi bi-check-circle-fill"></i>;
}

function StepContent({ done, index }) {
    return done ? <DoneIcon /> : index + 1;
}

function RenderStep({ label }, key) {
    const { current } = this;
    const done = key < current;
    const currentStep = key === current;
    const currentClassName = currentStep ? ' stepper-step-current' : '';
    const doneClassName = done ? ' stepper-step-done' : '';
    const className = `stepper-step${currentClassName}${doneClassName}`;
    const isLastStep = key === steps.length - 1;

    return (
        <li className={className} key={key}>
            <div className="  row stepper-position ">
                <div className="stepper__step__content">
                    <div className="stepper-step-index step-circle stepper-index"><StepContent done={done} index={key} /></div>
                    <div className='stepper-labels'>{label}
                        {!isLastStep && <i className="bi bi-chevron-right arrow-position arrow-icon"></i>}
                    </div>
                </div>
            </div>
        </li>
    )
}

function Stepper({ current, steps }) {
    return (
        <ul className="stepper">
            {steps.map(RenderStep, { current })}
        </ul>
    )
}

function StepperState() {
    const [current, setCurrent] = useState(0);
    const [generalDetails, setGeneralDetails] = useState({});
    const [validationErrors, setValidationErrors] = useState({});
    const CurrentStepComponent = steps[current].component;
    const isStep1 = current === 0;

    const handleNext = () => {

        if (!generalDetails.name) {
            setValidationErrors({ generalDetails: constants.NAME_REQUIRED });
            return;
        }

        setCurrent(Math.min(current + 1, steps.length));
    }

    const handlePrevious = () => {
        setCurrent(Math.max(current - 1, 0));
    }

    return (
        <>
            <div className='stepper-header'>
                <span className='stepper-header-text'><b>New Microsoft Dynamics Connector</b></span>
                <i class="bi bi-check-circle enabled-icon"></i>
                <span className='enabled-text'>Enabled</span>
            </div>

            <hr className='hr1'></hr>
            <Stepper steps={steps} current={current} />

            <hr className='hr2'></hr>
            <CurrentStepComponent
                generalDetails={generalDetails}
                setGeneralDetails={setGeneralDetails}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
            />

            <div>
                <hr className='bottom-hr'></hr>
                <Link to="/" className="btn btn-outline-secondary me-2 cancel-button">Cancel </Link>

                <Link type="button"
                 className={isStep1 ? 'btn btn-link save-and-finish-button' : 'btn btn-link save-and-finish-button2'}
                 id={isStep1 ? 'save-and-finish-button' : 'save-and-finish-button2'}>
                 Save & Finish
                </Link>

                {current !== 0 && <button onClick={handlePrevious} className='btn btn-outline-secondary me-2 previous-step-button'>Previous Step</button>}
                <button onClick={handleNext} class="btn btn-primary next-button">Next</button>
            </div>
        </>
    );
}

const Configure = () => {
    return (
        <StepperState />
    );
};

export default Configure;