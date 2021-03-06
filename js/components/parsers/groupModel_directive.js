angular.module('contactsApp')
.directive('groupModel', function() {
	return{
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attr, ngModel) {
			ngModel.$formatters.push(function(value) {
				if (value.trim().length === 0) {
					return [];
				}
				return value.split(',');
			});
			ngModel.$parsers.push(function(value) {
				return value.join(',');
			});
		}
	};
});
