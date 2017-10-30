angular
	.module('app')
	.component('item', {
		bindings: { item: '<' },
		templateUrl: './src/item/item.html',
		controller: itemCtrl
	});