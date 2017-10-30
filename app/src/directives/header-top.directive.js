angular.module('app')
.directive('headerTop', headerTop);

function headerTop () {
	var directive = {
		restrict: 'E',
		templateUrl: './src/directives/header-top.html'
	};

	return directive;
}