angular.module('cashMachineRoutes', [])
       .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'cashMachineHomeController'
		})
		.when('/replenishment', {
			templateUrl: 'pages/replenishment.html',
			controller: 'cashMachineReplenishmentController'
		})
		.otherwise({redirectTo:'/'});

	$locationProvider.html5Mode(true);
}]);
