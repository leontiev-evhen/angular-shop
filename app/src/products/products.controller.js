function productsCtrl ($scope, cartService, Flash) {

	$scope.addToCart = function (data) {
		data.count = 1;
		cartService.addToCart(data)
        $scope.$emit('addToCart');
    	Flash.create('success', 'Success, item was add to cart');
	};

}
