angular.module('lib', []).
  directive('type', function() {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if(attrs.type != 'phone') return;
        if(!ngModel) return; // do nothing if no ng-model
        scope.$watch(attrs.ngModel, function(value) {
          if(value == undefined || /^1\d{10}$/.test(value))
            ngModel.$setValidity('wrong', true);
          else
            ngModel.$setValidity('wrong', false);
      });
    }
  };
});