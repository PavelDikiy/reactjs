import React from 'react';
import { CreditRateServiceConsumer} from '../creditrate-service-context';

const widthCreditRateService = () =>  (Wrapped) => {
  return(props)=>{
    return(
      <CreditRateServiceConsumer>
        {
          (creditRateService) => {
            return (
              <Wrapped {...props} creditRateService={creditRateService} />
            )
          }
        }
      </CreditRateServiceConsumer>
    );
  }
};

export default widthCreditRateService;