angular.module('app')
.service('shopingCart', function($http){
	var items = [];
	$http.get('./src/data/products.json', { cache: true }).then(function(response) {
		items = response.data;
	});
	var service = {
		getProducts: function() {
			return items;
		},
		getProduct: function() {
			return items[0];
		}
	}
	return service;
})