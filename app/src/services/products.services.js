angular
	.module('app')
	.factory('productsService', productsService);

productsService.$inject = ['$http', '$q'];

function productsService ($http, $q) {
	return {
		getProducts: getProducts,
		getItem: getItem
	};

	function getProducts () {
	      	var defer = $q.defer();

		    $http.get('./src/data/products.json').then(function(response) {
		      	defer.resolve(response.data);
		    }, function(response) {
		      	defer.reject(response);
		    });

		    return defer.promise;
	}

	function getItem (id) {
	    function itemMatchesParam(products) {
	        return products.id === id;
	    }
	      
	    return getProducts().then(function (products) {
	        return products.find(itemMatchesParam)
	    });
    }
}
