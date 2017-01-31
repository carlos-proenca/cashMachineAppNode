angular.module("cashMachineHomeCtrl", ["cashMachineHomeService"])
       .controller("cashMachineHomeController", function( $scope, cashMachineHomeService) {

         $scope.isToShowResult = false;

         /*
         * switch flag
         */
         $scope.switchBool = (value) => {
            $scope[value] = !$scope[value];
         };

         /*
         * Get notes needed by cash quantity
         */
         $scope.getCash = () => {
             cashMachineHomeService.getCash($scope.money)
             .then((response) => response.json()) // Transform the data into json
             .then((data) => {
                    $scope.isToShowResult = true;
                    $scope.resultNotes = data;
              });
         }
});
