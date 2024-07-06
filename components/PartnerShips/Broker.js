import React from 'react';

const Broker = ({ option }) => {
  return (
    <div className="broker">
      <h5>{option.title}</h5>
      <p><strong>Registration type:</strong> {option.registrationType}</p>
      <p><strong>Registration fees:</strong> {option.registrationFees}</p>
      <p><strong>Ideal for:</strong> {option.idealFor}</p>
      <p><strong>Partnership model:</strong> {option.partnershipModel}</p>
      <p><strong>Your investments:</strong> {option.investments}</p>
      <p><strong>A/C opening app:</strong> {option.appAvailable ? '✔' : 'X'}</p>
      <p><strong>Reports dashboard:</strong> {option.dashboardAvailable ? '✔' : 'X'}</p>
      <p><strong>Trading Terminal:</strong> {option.terminalAvailable ? '✔' : 'X'}</p>
    </div>
  );
};

export default Broker;
