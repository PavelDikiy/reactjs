import React from 'react';
import { CreditRateServiceConsumer } from '../components/creditrate-service-context';

const widthCreditRateService = (Wrapped) => {
  return (props) => {
    return (
      <CreditRateServiceConsumer>
        {
          (creditRateService) =>
            <Wrapped {...props} creditRateService={creditRateService} />
        }
      </CreditRateServiceConsumer>
    );
  }
};

export default widthCreditRateService;