angular.module('directives', ['services'])
.directive('myApp', function(myService) {
	return {
		restrict: 'E',
		scope: { },
		template: `Scratch Paper. :P`,
		link: function(scope, element, attrs) {
			console.log(myService.getSessionId());
		}
	}
});
