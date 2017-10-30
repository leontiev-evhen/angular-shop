angular
	.module('app')
	.directive('countCart', countCart);

function countCart () {
	var directive = {
		restrict: 'E',
		template: 'items: {{itemsCount}} {{total | currency}}',
		controller: countCartController
	};
	return directive;
}

countCartController.$inject = ['$scope', 'cartService'];

function countCartController ($scope, cartService) {
	(function () {
		init();
	}());

	function init () {
		$scope.itemsCount = cartService.getCountCart();
		$scope.total = cartService.totalCart();
	}

	$scope.$on('addToCart', function(){
        init();
    });

    $scope.$on('removeItem', function(){
        init();
    });

    $scope.$on('changeCountItem', function(){
        init();
    });

    $scope.$on('clearCart', function(){
        init();
    });
		    
}