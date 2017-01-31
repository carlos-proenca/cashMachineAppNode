const CashMachineModel = require("../models/CashMachineModel.js")
const mongorito = require('mongorito');

/*
 * The cach machine service type
 * This class contain all service operations for cash machine
 */
class CashMachineService {

  /*
   * Creating CashMachineService with notesMap.
   * The notesMap contains all note types of database
   */
  constructor(){
    this.notesMap = [
      {
        "type":"ONE_HUNDRED_NOTES",
         "value":100
       },
       {
         "type":"FIFTY_NOTES",
          "value":50
        },
        {
          "type":"TWENTY_NOTES",
           "value":20
         },
         {
           "type":"TEN_NOTES",
            "value":10
          }
     ]
  }

   /*
    * Save a new cash quantity into database
    */
   save(quantity, type){
     let cashModel = new CashMachineModel();

     cashModel.set("quantity", quantity);
     cashModel.set("noteType", type);

     cashModel.save();

     return cashModel;
   }

   /*
    * Get and Calculate the quantity of notes from a needed cash
    */
   getNotes(quantity){
      let totalAmount = quantity;

      let totalNotes = {
       "TEN_NOTES": 0,
       "TWENTY_NOTES": 0,
       "FIFTY_NOTES": 0,
       "ONE_HUNDRED_NOTES": 0
      }


      for(let note in this.notesMap){
        totalAmount = this.countNotes(totalAmount, this.notesMap[note], totalNotes);

         if(totalAmount === 0){
           break;
         }
      }

      return totalNotes;
   }

   /*
    * Count how many notes need to be used for cash quantity
    */
   countNotes(quantity, note, result){
     if(quantity > 0) {
         let quantityNotes = Math.floor(quantity / note.value);
         let amount = quantity % note.value;
         const databaseNotes = CashMachineModel.where("noteType", note.type).find();

         if( databaseNotes.get('quantity') > quantityNotes){
           result[note.type] = quantityNotes;
           quantity = (quantity - (quantityNotes *  note.value ));
         }else{
           result[note.type] = quantityNotes;
           quantity = (quantity - (quantityNotes *  note.value ));
         }

         return quantity;
     }
     return 0;
   }
}

module.exports = CashMachineService;
