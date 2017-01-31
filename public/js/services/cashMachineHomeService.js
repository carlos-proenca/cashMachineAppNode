/*
 * Declaring the cashMachineHomeService module with cashMachineHomeService
 */
angular.module('cashMachineHomeService', [])
       .service('cashMachineHomeService', function() {

     const GET_CASH_URL = "/api/v1/cashs/quantity/";

      /*
       * Get needed notes by cash quantity
       */
      this.getCash = (quantityMoney) => {
        let fullCashUrl = GET_CASH_URL + quantityMoney;
        return fetch(fullCashUrl, {
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        });
      }
});
