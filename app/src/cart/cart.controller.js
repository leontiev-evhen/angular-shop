function cartCtrl ($scope, cartService) {
	
	(function () {
		init();
	}());

	function init () {
		$scope.cart = cartService.getCart();
		$scope.total = cartService.totalCart();
	}

	$scope.removeItem = function (key) {
		cartService.removeItemCart(key);
		init();

		$scope.$emit('removeItem');
	};

	$scope.changeCountItem = function (key, bool) {
		if (bool) {
			$scope.cart[key].count++
		} else {
			$scope.cart[key].count--
			if ($scope.cart[key].count <= 1) {
				$scope.cart[key].count = 1
			}
		}

		cartService.setCart($scope.cart);
		init();
		$scope.$emit('changeCountItem');
	};
}
