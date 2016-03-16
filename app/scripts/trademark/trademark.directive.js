'use strict';

/**
 * @ngdoc directive
 * @name  brandTinkerDomainResults
 * @description  Adds a new directive that handles idea results
 * @restrict EA
 */

function brandtinkerTrademarkResults() {
  var directive = {
    templateUrl: '/scripts/trademark/trademark_results.html',
    restrict: 'EA',
    controller: "TrademarkController"
  };
  return directive;
}

angular
  .module('brandtinker.trademark', ['brandTinkerControllers'])
  .directive('brandtinkerTrademarkResults', brandtinkerTrademarkResults);
