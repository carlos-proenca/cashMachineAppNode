# CashMachineApp
This a example of mean stack node app

This project was deployed on heroku

URL: https://cash-machine-app.herokuapp.com/

## Endpoints to test:

### To make a Replenishments of cash machine:

Local: localhost:3000/api/v1/cashs/replenishments

Remote: https://cash-machine-app.herokuapp.com/api/v1/cashs/replenishments

Request:

{
  quantity: 10,
  type: "ONE_HUNDRED_NOTES"
}


### To get how many notes from a cash quantity:

local: localhost:3000/api/v1/cashs/quantity/:quantity - where quantity is a path url parameter

Remote: https://cash-machine-app.herokuapp.com/api/v1/cashs/quantity/350
