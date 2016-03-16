'use strict';

/**
 * @ngdoc directive
 * @name  brandTinkerDomainResults
 * @description  Adds a new directive that handles idea results
 * @restrict EA
 */

function brandtinkerDomainResults() {
  var directive = {
    templateUrl: '/scripts/domain/domain_results.html',
    restrict: 'EA',
    controller: "DomainController"
  };
  return directive;
}


angular
  .module('brandtinker.domain', ['brandTinkerControllers'])
  .directive('brandtinkerDomainResults', brandtinkerDomainResults);