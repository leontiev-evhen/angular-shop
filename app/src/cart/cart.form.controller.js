function formCtrl ($scope, $window, cartService, paymentService, storageServise) {

  	paymentService.getPaymentSystems().then(function(data) {
	    $scope.payments = data;
	}).catch(function() {
	    $scope.error = 'unable to get the payments';
	});

    $scope.submitForm = function (user) {
		if ($scope.userForm.$valid) {

			//setter info user
		    storageServise.setInfo(user);

		    //clear cart
		    cartService.clearCart();
		    
		    $scope.$emit('clearCart');
			$window.location.href = '#!/success';
		}
    };
}