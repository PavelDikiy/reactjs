import React from 'react';
import { CreditRateServiceConsumer} from '../creditrate-service-context';

const widthCreditRateService = () =>  (Wrapped) => {
  return(props)=>{
    return(
      <CreditRateServiceConsumer>
        {
          (creditrateService) => {
            return (
              <Wrapped {...props} creditrateService={creditrateService} />
            )
          }
        }
      </CreditRateServiceConsumer>
    )
  }
};

export default widthCreditRateService;