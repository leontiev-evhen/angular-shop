function itemCtrl ($scope, cartService, Flash) {
	$scope.addToCart = function () {
		$scope.$ctrl.item.count = 1;
		cartService.addToCart($scope.$ctrl.item);
		$scope.$emit('addToCart');
		Flash.create('success', 'Success, item was add to cart');
	};
}