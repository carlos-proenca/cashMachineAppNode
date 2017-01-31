angular.module("cashMachineReplenishmentCtrl", ["cashMachineReplenishmentService"])
       .controller("cashMachineReplenishmentController", function($scope, cashMachineReplenishmentService) {

	$scope.currencyNoteTypes = [
      {
        "type":"TEN_NOTES",
        "value":"10"
      },
      {
        "type":"TWENTY_NOTES",
        "value":"20"
      },
      {
        "type":"FIFTY_NOTES",
        "value":"50"
      },
      {
        "type":"ONE_HUNDRED_NOTES",
        "value":"100"
      }
  ];

  $scope.successTextAlert = "Refueling successfully!";
  $scope.errorTextAlert = "Oops something went wrong! try again later...";
  $scope.showSuccessAlert = false;
  $scope.showErrorAlert = false;

  // switch flag
  $scope.switchBool = (value) => {
     $scope[value] = !$scope[value];
  };

 /*
  * The save notes to Replenishment cash machine
	*/
	$scope.save = () =>{
  		cashMachineReplenishmentService.save(	$scope.quantity, $scope.choosedNote)
          .then((response) => {
            if(response.status === 200 ){
              $scope.showSuccessAlert = true;
            }else{
              $scope.showErrorAlert = true;
            }
          });
    }
});
