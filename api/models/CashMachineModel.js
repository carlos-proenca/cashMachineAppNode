const mongorito = require('mongorito');
const database = require('../../config/database.js')
const Model = mongorito.Model;

/*
 * The CashMachineModel type.
 * This model represents a CashMachines mongo collection
 */
class CashMachineModel extends Model {

  /*
   * Inform wich collection is used for this model
   */
  collection(){
      return 'CashMachines';
  }
}

module.exports = CashMachineModel;
