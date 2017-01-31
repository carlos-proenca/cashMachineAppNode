const should  = require("chai").should();
const sinon = require("sinon");

const CashMachineService = require("../../api/services/CashMachineService.js");

describe("Test all Cash Machine Service methods", () => {

  it("Should Get notes for 300 R$", () => {
    let cashMachineService = new CashMachineService();
    let notes = cashMachineService.getNotes(300);

    notes.should.have.property('TEN_NOTES').equal(0);
    notes.should.have.property('TWENTY_NOTES').equal(0);
    notes.should.have.property('FIFTY_NOTES').equal(0);
    notes.should.have.property('ONE_HUNDRED_NOTES').equal(3);
  });

  it("Should Save new Notes", () => {
    let cashMachineService = new CashMachineService();
    let quantity = 20;
    let type = "TEN_NOTES";

    const expectedResult = {
      quantity: quantity,
      nodeType: type
    }

    sinon.stub(cashMachineService, 'save').withArgs(quantity, type).returns(expectedResult);
    let saveResult = cashMachineService.save(quantity, type);

    saveResult.should.be.equal(expectedResult);
  });
});
