const CashMachineService = require("../services/CashMachineService.js");

/*
* The CashMachineController type.
* Control all API operations for cash machine
*/
class CashMachineController {

  constructor(){
    this.cashMachineService = new CashMachineService();
  }

   /*
    * This method is used to do some replenishment into cash machine
    */
   doReplenishment(request){
      let quantity = request.body.quantity;
      let type = request.body.type;
      return this.cashMachineService.save(quantity, type);;
   }

   /*
    *  This method is used to calculates how many notes is needed from a cash quantity
    */
   retrieveNotes(request){
      let quantity = request.params.quantity;
      return this.cashMachineService.getNotes(quantity);
   }
}

module.exports = CashMachineController;
