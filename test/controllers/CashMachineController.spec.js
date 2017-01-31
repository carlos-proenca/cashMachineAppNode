// test dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should  = chai.should();

// app dependencies
const app = require("../../app.js");

chai.use(chaiHttp);

/**
 * Cash Machine Controller Test
 */
describe('/GET - api/v1/cashs/quantity/350', () => {

      it('Should retrieve calculated notes from 350 R$ cash quantity', (done) => {

          let expectedResult = {
             "TEN_NOTES": 0,
             "TWENTY_NOTES": 0,
             "FIFTY_NOTES": 1,
             "ONE_HUNDRED_NOTES": 3
          }

          chai.request(app)
              .get('/api/v1/cashs/quantity/350')
              .end((error, response) => {
                  response.should.have.status(200);
                  let result = JSON.stringify(response.body);
                  result.should.be.equal(JSON.stringify(expectedResult));
                  done();
          });
      });
  });
