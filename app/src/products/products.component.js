angular
	.module('app')
	.component('products', {
		bindings: {products : '<'},
		templateUrl: './src/products/products.html',
		controller: productsCtrl
	});
