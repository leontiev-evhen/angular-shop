angular
	.module('app')
	.config(function($stateProvider) {

		var states = [
			{
				name: 'home',
				url: '',
				component: 'products',
				resolve: {
					products: function(productsService) {
						return productsService.getProducts().then(function(data) {
						    return data;
						}).catch(function() {
						    $scope.error = 'unable to get the products';
						});
					}
				}
			},
			{
			name: 'item',
				url: '/product/{itemId}',
				component: 'item',
				resolve: {
			        item: function(productsService, $stateParams) {
			            return productsService.getItem($stateParams.itemId);
			        }
		      	}
			},
			{
				name: 'cart',
				url: '/cart',
				component: 'cart'
			},
			{
				name: 'success',
				url: '/success',
				component: 'success'
			},
			{
				name: '404',
				url: '*path',
				templateUrl: './src/pages/404.html',
			},
		];

		states.forEach(function(state) {
	    	$stateProvider.state(state);
	  	});
	});