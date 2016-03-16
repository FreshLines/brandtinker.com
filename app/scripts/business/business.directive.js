'use strict';

function brandtinkerBusinessResults() {
  var directive = {
    templateUrl: '/scripts/business/business_results.html',
    restrict: 'EA',
    controller: "BusinessController"
  };
  return directive;
}

angular
  .module('brandtinker.business', ['brandTinkerControllers'])
  .directive('brandtinkerBusinessResults', brandtinkerBusinessResults);