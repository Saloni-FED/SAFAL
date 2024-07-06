import React from 'react';
// import './PartnershipOptions.css';
import Broker from './Broker';

const PartnershipOptions = () => {
  const options = [
    {
      title: 'SALES PARTNERSHIP',
      registrationType: 'Remisier',
      registrationFees: 'Rs. 5,000',
      idealFor: 'Teachers, Influencers, Salaried professionals',
      partnershipModel: 'Refer customers & get referral commission',
      investments: 'Zero investment',
      appAvailable: true,
      dashboardAvailable: false,
      terminalAvailable: false,
    },
    {
      title: 'SUB-BROKER (SELF SETUP)',
      registrationType: 'Authorised Person',
      registrationFees: 'Rs. 25,000',
      idealFor: 'Entrepreneurs, who have their own office',
      partnershipModel: 'Add customers, provide assistance & get high % brokerage',
      investments: 'Office Infrastructure',
      appAvailable: true,
      dashboardAvailable: true,
      terminalAvailable: true,
    },
    {
      title: 'SUB-BROKER (SWASTIKA SETUP)',
      registrationType: 'Authorised Person',
      registrationFees: 'Rs. 25,000',
      idealFor: 'Entrepreneurs, looking to start with minimum investment Salaried professionals',
      partnershipModel: 'Add customers, provide assistance & get high % brokerage',
      investments: 'Nominal monthly fee',
      appAvailable: true,
      dashboardAvailable: true,
      terminalAvailable: true,
    },
  ];

  return (
    <div className="partnership-options">
      <h1>Do you have what it takes to be an entrepreneur?</h1>
      <p>Select from any of these partnership options</p>
      <div className="options-container">
        {options.map((option, index) => (
          <Broker key={index} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PartnershipOptions;
