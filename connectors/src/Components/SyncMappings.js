import React from 'react'

const SyncMappings = () => {
  return (
    <div>
      <span>Choose the items you would like to sync and their direction</span>
      <div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            id={`toggleButton-1`}
          />
          <label className="form-check-label toggle-alignment" htmlFor={`toggleButton-1`}>
            Customer / Location
          </label>
        </div><br />
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            id={`toggleButton-2`}
          />
          <label className="form-check-label toggle-alignment" htmlFor={`toggleButton-2`}>
            Contacts
          </label></div><br />
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            id={`toggleButton-3`}
          />
          <label className="form-check-label toggle-alignment" htmlFor={`toggleButton-3`}>
            Case
          </label>
        </div>
      </div>
    </div>
  )
}

export default SyncMappings;
