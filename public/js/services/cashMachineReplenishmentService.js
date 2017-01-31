/*
* Declaring the cashMachineReplenishmentService module with cashMachineReplenishmentService
 */
angular.module('cashMachineReplenishmentService', [])
       .service('cashMachineReplenishmentService', function() {

      const REPLENISHMENT_URL = "/api/v1/cashs/replenishments";

       /*
        * Save a new quantity for a note
        */
       this.save = (quantity, noteType) => {

         let requestBody = {
             "quantity": quantity,
             "type": noteType
         };

         let data = new FormData();
         data.append( "json", JSON.stringify( requestBody ) );

         return fetch(REPLENISHMENT_URL, {
          	method: 'post',
            body: data
          });
       }
});
