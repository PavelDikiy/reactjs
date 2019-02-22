import jsonData from '../tz.json';

class CreditRateService {
  getRate(){
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(jsonData)
      }, 1000);
    })
  }
}

export default CreditRateService;