angular
	.module('app')
	.directive('headerBottom', headerBottom); 

function headerBottom() {
	var directive =  {
		restrict: 'E',
		templateUrl: './src/directives/header-bottom.html'
	};
	return directive;
}