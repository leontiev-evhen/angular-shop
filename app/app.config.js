angular.module('app')
.config(function($stateProvider) {
	var productsState = {
		name: 'products',
		url: '/products',
		component: 'products',
	}
	
	var itemState = {
		name: 'item',
		url: '/product/1',
		component: 'item',
	}
	
	$stateProvider.state(productsState);
	$stateProvider.state(itemState);
})

