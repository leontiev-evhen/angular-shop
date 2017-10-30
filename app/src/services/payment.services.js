angular
	.module('app')
	.factory('paymentService', paymentService);

paymentService.$inject = ['$http', '$q'];

function paymentService ($http, $q) {
	return {
		getPaymentSystems: getPaymentSystems
	};

	function getPaymentSystems () {
	    var defer = $q.defer();

	    $http.get('./src/data/payment.json').then(function(response) {
	      	defer.resolve(response.data);
	    }, function(response) {
	      	defer.reject(response);
	    });

	    return defer.promise;
	}
}