angular
	.module('app')
	.directive('footer', footer);

function footer () {
	var directive = {
		restrict: 'A',
		templateUrl: './src/directives/footer.html'
	};
	return directive;
}