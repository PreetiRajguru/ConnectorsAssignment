// import React from 'react';

// const Configure = () => {
//   return (
//     <div>
//       <h1>Hi there!</h1>
//     </div>
//   );
// };

// export default Configure;



import React, { useState } from 'react';

const Configure = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
      alert("Success");
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
              Save and Next
            </button>
          </form>
        );
      case 2:
        return (
          <form>
            <div className="form-group">
              <label> Last Name:</label>
              <input type="text" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
              Save and Next
            </button>
          </form>
        );
      case 3:
        return (
          <form>
            <div className="form-group">
              <label>Number:</label>
              <input type="number" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
              Save and Next
            </button>
          </form>
        );
      case 4:
        return (
          <form>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
              Save and Next
            </button>
          </form>
        );
      case 5:
        return (
          <form>
            <div className="form-group">
              <label>Number:</label>
              <input type="number" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>
              Save
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Demo Stepper</h4>
              <ul className="list-unstyled d-flex justify-content-between">
                <li className={`step ${currentStep === 1 ? 'active' : ''}`}>1. Introduction</li>
                <li className={`step ${currentStep === 2 ? 'active' : ''}`}>2. Configuration Options</li>
                <li className={`step ${currentStep === 3 ? 'active' : ''}`}>3. Customization</li>
                <li className={`step ${currentStep === 4 ? 'active' : ''}`}>4. Review</li>
                <li className={`step ${currentStep === 5 ? 'active' : ''}`}>5. Finish</li>
              </ul>
              <div className="mt-4">
                {currentStep > 1 && (
                  <button className="btn btn-secondary mr-2" onClick={handlePrevious}>
                    Back
                  </button>
                )}
                {renderStepContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;




