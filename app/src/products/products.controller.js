function productsController ($scope, shopingCart) {
	
$scope.getAllProducts = function() {
	return shopingCart.getProducts();
}

}
